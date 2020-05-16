const express = require("express");
var _ = require("lodash");
const auth = require("../../middleware/auth");

const router = express.Router();
const User = require("../../models/User");
const config = require("config");

// @route POST /frequent-apps
// @desc send app frequency counter
// @access private
router.post("/", auth, async (req, res) => {
  let { app } = req.body;

  try {
    let user = await User.findById(req.user.id);

    if (!user) {
      res.status(400).json({ error: { msg: "Invalid JWT token provided" } });
    } else {
      if (!user.userApps) {
        res
          .status(400)
          .json({ error: { msg: "There's no selected user apps currently" } });
      }
    }

    let newFreqApp = {};
    newFreqApp.app = app;
    let appIndex = _.findIndex(user.userApps, (obj) => {
      return obj.app == app;
    });
    newFreqApp.url = user.userApps[appIndex].url;

    let freqAppList = {};
    freqAppList.frequentApps = user.frequentApps;
    if (freqAppList.frequentApps) {
      // frequent apps exist
      let FreqAppIndex = _.findIndex(user.frequentApps, (obj) => {
        return obj.app == app;
      });
      if (FreqAppIndex == -1) {
        // frequent apps exist + this app doesn't exist here yet
        newFreqApp.frequency = 1;
        freqAppList.frequentApps.push(newFreqApp);

        // sort in desc
        freqAppList.frequentApps = freqAppList.frequentApps.sort(function (
          a,
          b
        ) {
          return parseFloat(b.frequency) - parseFloat(a.frequency);
        });
      } else {
        // frequent apps exist + this app is already in here
        newFreqApp.frequency = user.frequentApps[FreqAppIndex].frequency + 1;
        // user.frequentApps[FreqAppIndex] = newFreqApp;
        freqAppList.frequentApps[FreqAppIndex] = newFreqApp;
        freqAppList.frequentApps = freqAppList.frequentApps.sort(function (
          a,
          b
        ) {
          return parseFloat(b.frequency) - parseFloat(a.frequency);
        });
      }
    } else {
      // frequent apps doesn't exist yet
      newFreqApp.frequency = 1;
      freqAppList.frequentApps = newFreqApp;
    }

    _user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: freqAppList },
      { new: true }
    ).populate({
      path: "frequentApps.app",
      select: {
        _id: 1,
        name: 1,
        icon: 1,
        exact: 1,
      },
    });

    _user.frequentApps = _user.frequentApps.splice(0, 5); // sending only top 5 frequent Apps

    res.json(_user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// @route GET /frequent-apps
// @desc retrieve top 5 frequently used app
// @access private
router.get("/", auth, async (req, res) => {
  try {
    _user = await User.findById(req.user.id).populate({
      path: "frequentApps.app",
      select: {
        _id: 1,
        name: 1,
        icon: 1,
        exact: 1,
      },
    });

    if (_user) {
      if (!_user.frequentApps) {
        return res
          .status(400)
          .json({ error: { msg: "There's no frequently used apps" } });
      }
      return res.json({ frequentApps: _user.frequentApps.splice(0, 5) });
    }
    res.status(400).json({ error: { msg: "User not Found" } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
