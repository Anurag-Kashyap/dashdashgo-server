const express = require("express");
const auth = require("../../middleware/auth");

const router = express.Router();
// const Profile = require('../../models/Profile');
const User = require("../../models/User");
const Organization = require("../../models/Organization");
const RegistrationTracker = require("../../models/RegistrationTracker");
const App = require("../../models/Apps");
const config = require("config");

// @route GET /track-registration
// @desc get user registration flow data
// @access Private
router.get("/", auth, async (req, res) => {
  try {
    let userTracker = await RegistrationTracker.findOne({user: req.user.id});

    if (!userTracker) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User Tracker Doesn't exist" }] });
    }
    res.json(userTracker);

  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route POST /track-registration
// @desc create or update user registration tracker
// @access Private
router.post("/", auth, async (req, res) => {

  let { name, avatar, userApps, organization, registrationStage } = req.body;

  try {
    let userTracker = await RegistrationTracker.findOne({user: req.user.id});

    let trackerFields = {};

    if (name) trackerFields.name = name;
    if (avatar) trackerFields.avatar = avatar;
    if (userApps) trackerFields.userApps = userApps;
    if (organization) trackerFields.organization = organization;
    if (registrationStage) trackerFields.registrationStage = registrationStage;

    // non existing user tracker
    if (!userTracker) {
        trackerFields.user = req.user.id;
        _userTracker = new RegistrationTracker(trackerFields);
        await _userTracker.save();
        console.log('creating new user tracker');
        return res.json(_userTracker);
    }

    //updating user tracker fields
    _userTracker = await RegistrationTracker.findOneAndUpdate(
      { user: req.user.id},
      { $set: trackerFields },
      { new: true }
    );

    res.json(_userTracker);

  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
