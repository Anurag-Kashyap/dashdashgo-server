const express = require('express');
var _ = require('lodash');
const auth = require('../../middleware/auth');

const router = express.Router();
const User = require('../../models/User');
const config = require('config');

// @route POST /frequent-apps
// @desc send app frequency counter
// @access private
router.post('/', auth,
    async (req, res) => {

    let { app } = req.body;

    try {
        let user = await User.findById(req.user.id);

        if (!user.userApps) {
            res.status(400).json({ error: { msg: 'There\'s no selected user apps currently' }});
        }

        let frequentApp = {};
        frequentApp.frequentApps = {};

        frequentApp.frequentApps.app = app;

        let userApp = _.findIndex(user.userApps, ['app', app]);
        console.log('check ', userApp);
        // frequentApp.frequentApps.url = 

        // if (user.frequentApps.filter({app: app}).frequency) {
        //     frequentApp.frequentApps.frequency = user.frequentApps.filter({app: app}).frequency + 1
        // } else {
        //     frequentApp.frequentApps.frequenc = 1;
        // }

        _user = await User.findByIdAndUpdate(
            req.user.id,
            { $set: frequentApp },
            { new: true })

        console.log(_user, frequentApp);

        res.json(_user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


// @route GET /frequent-apps
// @desc retrieve top 5 high frequency app
// @access private
router.get('/', auth, async (req, res) => {
    try {
        const filter = {};
        const categories = await Category.find(filter);
        res.json(categories);
    } catch(err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
});


module.exports = router;