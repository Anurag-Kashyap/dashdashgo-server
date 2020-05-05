const express = require('express');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator'); 
const auth = require('../../middleware/auth');

const router = express.Router();
const Category = require('../../models/Category');
const App = require('../../models/Apps');
const config = require('config');

// @route POST /apps
// @desc create or update app list
// @access private
router.post('/', [auth, [
    check('name', 'Please include an app name').not().isEmpty(),
    check('url', 'Please include an url').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let { name, url, icon, category } = req.body;
    try {
        const app = await Apps.findOne({ name });
        const categoryExists = await Category.findOne({ name: req.body.category });
        let _app = new App ({
            name,
            url,
            icon,
            category
        });
        if (app) {
            return res.status(400).json({ msg: 'App already exists' })
        }
        if (!categoryExists) {
            let _category = new Category ({
                name
            });
            _category.name = category;
            await _category.save();
            const newCategory = await Category.findOne({ name: category });
            _app.category = newCategory.id;
        } else {
            _app.category = categoryExists.id;
        }
        _app.name = name;
        _app.url = url;
        _app.icon = icon;
        await _app.save();
        res.json({error: null, ok: 'App saved successfully!'});

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});                  


// @route GET /apps
// @desc fetch all apps
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const filter = {};
        const apps = await App.find(filter);
        res.json(apps);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;