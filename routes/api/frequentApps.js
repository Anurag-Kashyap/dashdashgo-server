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

        if(!user) {
            res.status(400).json({ error: { msg: 'Invalid JWT token provided' }});
        } else {
            if (!user.userApps) {
                res.status(400).json({ error: { msg: 'There\'s no selected user apps currently' }});
            }
        }

        let newFreqApp = {};
        newFreqApp.app = app;
        let appIndex = _.findIndex(user.userApps, ((obj) => {
            return obj.app == app;
        }));
        newFreqApp.url = user.userApps[appIndex].url;
        
        let freqAppList = {};
        freqAppList.frequentApps = user.frequentApps;
        if (freqAppList.frequentApps) {         // frequent apps exist
            let FreqAppIndex = _.findIndex(user.frequentApps, ((obj) => {
                return obj.app == app;
            }));
            if (FreqAppIndex == -1) {           // frequent apps exist + this app doesn't exist here yet
                newFreqApp.frequency = 1;
                freqAppList.frequentApps.push(newFreqApp);

                // sort in desc and limit the max of number of freq apps to 5
                if (freqAppList.frequentApps.length>5) {
                    freqAppList.frequentApps = freqAppList.frequentApps.sort(function(a, b) {
                            return parseFloat(b.frequency) - parseFloat(a.frequency);
                        }).splice(0,5);
                }

            } else {                            // frequent apps exist + this app is already in here
                newFreqApp.frequency = user.frequentApps[FreqAppIndex].frequency + 1;
                user.frequentApps[FreqAppIndex] = newFreqApp;
            }
        } else {                                // frequent apps doesn't exist yet
            newFreqApp.frequency = 1;
            freqAppList.frequentApps = newFreqApp;
        }

        _user = await User.findByIdAndUpdate(
            req.user.id,
            { $set: freqAppList },
            { new: true }
        );

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