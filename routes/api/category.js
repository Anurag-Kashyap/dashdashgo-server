const express = require('express');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator'); 
const auth = require('../../middleware/auth');

const router = express.Router();
const Category = require('../../models/Category');
const config = require('config');

// @route POST /category
// @desc create or update category
// @access private
router.post('/', [auth, [
    check('name', 'Please include a category Name').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { name } = req.body;
    try {
        const category = await Category.findOne({ name });
        if (category) {
            return res.status(400).json({ msg: 'Category already exists' })
        }
        let _category = new Category ({
            name
        });
        _category.name = name;
        await _category.save();
        res.json({error: null, ok: 'Category saved successfully!'});
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route GET /category
// @desc fetch all category
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const filter = {};
        const categories = await Category.find(filter);
        res.json(categories);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;