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
function shuffle (array) {
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
};

// @route GET /profile
// @desc get user profile
// @access private
router.get("/", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id)
      .populate({
        path: "organization",
        select: {
          _id: 0,
          name: 1,
        },
      })
      .populate({
        path: "userApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
        },
      })
      .populate({
        path: "frequentApps.app",
        select: {
          _id: 1,
          name: 1,
          icon: 1,
        },
      });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User Profile Doesn't exist" }] });
    }
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
  let { name, avatar, userApps, organization, onboardingPhase, newApp } = req.body;

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
    ).populate("organization", ["name"]);

    profile.frequentApps = _user.frequentApps.splice(0,5);

    res.json(profile);

  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});


// @route POST /profile
// @desc create or update user apps
// @access private
router.post("/update-apps", auth, async (req, res) => {
  
  let { userApps } = req.body;

  try {
  
    let user = await User.findById(req.user.id);

    // non existing user profile
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "User profile doesn't exist" }] });
    }

    userApps.forEach(obj => {
      
    });

    // updating existing user profile
    profile = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { 
          'candidates.$.status': 'Accepted', 
        } 
      },
      { new: true }
    ).populate("organization", ["name"]);

    res.json(profile);

  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
