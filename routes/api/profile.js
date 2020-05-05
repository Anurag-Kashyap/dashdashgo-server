const express = require('express');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator'); 
const auth = require('../../middleware/auth');

const router = express.Router();
const Profile = require('../../models/Profile');
const config = require('config');

// @route GET /profile
// @desc get user profile
// @access private
router.get('/', auth, async (req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['email']);
        if (!profile) {
            return res.status(400).json({ errors: [{ msg: 'User Profile Doesn\'t exist'}] })
        }
        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route POST /profile
// @desc create or update user profile
// @access private
router.post('/', auth, async (req, res) => {
    try {
        let profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['email']);
        if (!profile) {
            return res.status(400).json({ errors: [{ msg: 'User Profile Doesn\'t exist'}] })
        }
        res.json(profile);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;