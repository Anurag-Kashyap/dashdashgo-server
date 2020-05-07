const express = require('express');
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

        let frequentApp = {}
        
        frequentApp.app = app;
        frequentApp.url = ( () => {
            let userApp =  user.userApps.filter({app: app});
            return userApp
        });
        frequentApp.frequency = ( () => {
            let freqApp =  user.frequentApps.filter({app: app});
            if (freqApp) {
                return freqApp.frequency += 1
            }
            return 1
        });

        console.log('check-1', frequentApp);

        res.json({ok: 'check'});
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
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
        res.status(500).send('Server Error');
    }
});


module.exports = router;