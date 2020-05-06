const express = require('express');
const gravatar = require('gravatar');
const { check, validationResult } = require('express-validator'); 
const auth = require('../../middleware/auth');

const router = express.Router();
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Organization = require('../../models/Organization');
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
router.post('/', [auth, [
    check('name', 'Please include your Name').not().isEmpty(),
    check('userApps', 'Please select some apps to add to your list').not().isEmpty()
]], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    let { name, avatar, userApps, organization } = req.body;
    try {
        let user = await User.findById(req.user.id);
        let profile = await Profile.findOne({ user: req.user.id })
            .populate('user', ['email']);
        
        let _profile = new Profile({
            user,
            name,
            avatar,
            userApps,
            organization
        });

        let _organization = new Organization({
            name
        });

        if (!profile) {
            console.log('Creating new user profile');
            _profile.user = req.user.id
            _profile.name = name;
            if (!avatar) {
                avatar = gravatar.url(user.email, {
                    s: '200',
                    r: 'pg',
                    d: 'retro'
                });
            }
            _profile.avatar = avatar;
            if (userApps) _profile.userApps = userApps;

            if (!organization) {
                organization = 'RockStack Capital';
            }
            _organization.name = organization
            await _organization.save()
            let org = await Organization.findOne({ name: organization });
            _profile.organization = org.id;

            await _profile.save();
            return res.json(_profile);
        }

        res.json({ error: null, ok: 'Profile updated successfully' });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;