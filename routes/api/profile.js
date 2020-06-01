const express = require("express");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const router = express.Router();
// const Profile = require('../../models/Profile');
const User = require("../../models/User");
const Organization = require("../../models/Organization");
const App = require("../../models/Apps");
const config = require("config");

// Fisher-Yates sorting algo
function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// @route GET /profile
// @desc get user profile
// @access private
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id)
      .populate({
        path: "organization",
        select: {
          _id: 1,
          name: 1,
        },
      })
      .populate({
        path: "userApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      })
      .populate({
        path: "frequentApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      })
      .select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User Profile Doesn't exist" }] });
    }
    user.frequentApps = user.frequentApps.splice(0, 5);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route POST /profile
// @desc create or update user profile
// @access private
router.post("/", auth, async (req, res) => {
  let {
    name,
    avatar,
    userApps,
    organization,
    onboardingPhase,
    newApp,
  } = req.body;

  try {
    let user = await User.findById(req.user.id);

    // non existing user profile
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User profile doesn't exist" }] });
    }

    let _organization = new Organization({
      name,
    });

    let profileFields = {};

    if (name) profileFields.name = name;

    if (!user.avatar && !avatar) {
      avatar = gravatar.url(user.email, {
        s: "200",
        r: "pg",
        d: "retro",
      });
      profileFields.avatar = avatar;
    } else if (avatar) {
      profileFields.avatar = avatar;
    }

    if (onboardingPhase) {
      profileFields.onboardingPhase = onboardingPhase;
    }

    if (userApps) {
      profileFields.userApps = userApps;
      if (onboardingPhase === 3) profileFields.frequentApps = userApps;
    }

    if (!user.organization && !organization) {
      // no org data provided nor org mapped with user before
      organization = "Default Organization";
      let org = await Organization.findOne({ name: organization });
      if (!org) {
        _organization.name = organization;
        await _organization.save();
        let newOrg = await Organization.findOne({ name: organization });
        profileFields.organization = newOrg.id;
      } else {
        profileFields.organization = org.id;
      }
    } else if (organization) {
      let org = await Organization.findOne({ name: organization });
      if (!org) {
        // org data provided but org non-existent before
        _organization.name = organization;
        await _organization.save();
        let newOrg = await Organization.findOne({ name: organization });
        profileFields.organization = newOrg.id;
      } else {
        // org data provided and org exists
        profileFields.organization = org.id;
      }
    }

    // updating existing user profile
    profile = await User.findByIdAndUpdate(
      req.user.id,
      { $set: profileFields },
      { new: true }
    )
      .populate("organization", ["name"])
      .select("-password");

    profile.frequentApps = profile.frequentApps.splice(0, 5);

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route GET /profile/apps
// @desc get user apps
// @access private
router.get("/apps", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id)
      .populate({
        path: "userApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      })
      .select("-password");
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User Profile Doesn't exist" }] });
    }
    res.json({ userApps: user.userApps });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route POST /profile
// @desc create or update user apps
// @access private
router.post("/update-app-url", auth, async (req, res) => {
  let userApps = req.body;

  try {
    let user = await User.findById(req.user.id);

    // non existing user profile
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User profile doesn't exist" }] });
    }

    let _user1 = await User.findOneAndUpdate(
      {
        _id: req.user.id,
        "userApps.app": userApps.app,
      },
      {
        $set: { "userApps.$.url": userApps.url },
      },
      { new: true }
    );

    let _user2 = await User.findOneAndUpdate(
      {
        _id: req.user.id,
        "frequentApps.app": userApps.app,
      },
      {
        $set: { "frequentApps.$.url": userApps.url },
      },
      { new: true }
    )
      .populate({
        path: "userApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      })
      .populate({
        path: "frequentApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      });

    _user2.frequentApps = _user2.frequentApps.sort(function (a, b) {
      return parseFloat(b.frequency) - parseFloat(a.frequency);
    });
    _user2.frequentApps = _user2.frequentApps.splice(0, 5);

    res.json(_user2);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route POST /profile
// @desc create or update user apps
// @access private
router.post("/update-userapps", auth, async (req, res) => {
  let { userApps } = req.body;

  try {
    let user = await User.findById(req.user.id);

    // non existing user profile
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User profile doesn't exist" }] });
    }

    newApps = [];
    deletedApps = [];
    userApps.forEach((obj) => {
      let checker = [];
      user.userApps.forEach((el) => {
        if (JSON.stringify(obj.app) == JSON.stringify(el.app)) {
          checker.push(true);
        } else checker.push(false);
      });
      let existence = checker.findIndex((obj) => obj === true);
      if (existence < 0) newApps.push(obj);
    });

    user.userApps.forEach((obj) => {
      let checker = [];
      userApps.forEach((el) => {
        if (JSON.stringify(obj.app) == JSON.stringify(el.app)) {
          checker.push(true);
        } else checker.push(false);
      });
      let existence = checker.findIndex((obj) => obj === true);
      if (existence < 0) deletedApps.push(obj);
    });

    // if any new app exists
    if (newApps.length) {
      newApps.forEach(async (obj) => {
        await User.updateOne(
          { _id: req.user.id },
          {
            $push: {
              userApps: { app: obj.app, url: obj.url },
              frequentApps: { app: obj.app, url: obj.url, frequency: 0 },
            },
          }
        );
        console.log("added new app - ", obj.url);
      });
    }

    // if any existing app is deleted
    if (deletedApps.length) {
      deletedApps.forEach(async (obj) => {
        await User.updateOne(
          { _id: req.user.id },
          {
            $pull: {
              userApps: { app: obj.app },
              frequentApps: { app: obj.app },
            },
          }
        );
        console.log("deleted app - ", obj.url);
      });
    }

    let updatedUser = await User.findById(req.user.id)
      .populate({
        path: "userApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      })
      .populate({
        path: "frequentApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
          exact: 1,
        },
      });

    updatedUser.frequentApps = updatedUser.frequentApps
      .sort(function (a, b) {
        return parseFloat(b.frequency) - parseFloat(a.frequency);
      })
      .splice(0, 5);

    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
