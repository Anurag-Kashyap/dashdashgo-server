const express = require('express');
const auth = require('../../middleware/auth');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator'); 

const router = express.Router();
const config = require('config');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route POST /auth
// @desc authenticate user & get jwt
// @access public
router.post('/', [
    check('email', 'Please include valid credentials').isEmail(),
    check('password', 'Please include valid credentials').exists()
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        
        if (!user) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid user credentials'}] });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid user credentials'}] });
        }

        // Return JWT
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            (err, token) => {
                if (err) throw err;
                res.json({ token: token });
            }
        );
    } catch(err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});

module.exports = router;