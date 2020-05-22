const express = require("express");
const gravatar = require("gravatar");
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const router = express.Router();
const Category = require("../../models/Category");
const App = require("../../models/Apps");
const User = require("../../models/User");
const config = require("config");

// @route POST /apps
// @desc create or update app list
// @access private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Please include an app name").not().isEmpty(),
      check("url", "Please include an url").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, url, icon, exact, category, creator } = req.body;

    try {
      const app = await Apps.findOne({ name });

      const categoryExists = await Category.findOne({name: category});

      let _app = new App({
        name,
        url,
        icon,
        exact,
        category,
        creator
      });

      if (app) {
        return res.status(400).json({ msg: "App already exists" });
      }

      if (!categoryExists) {
        let _category = new Category({
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
      _app.creator = creator;
      await _app.save();

      res.json({ error: null, ok: "App saved successfully!" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
  }
);

// @route GET /apps
// @desc fetch all apps
// @access private
router.get("/", auth, async (req, res) => {
  try {
    
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(400).json({error: { msg: "User doesn't exist" }});
    }

    organization = user.organization;
    
    const apps = await App.find({ $or:[ { creator: organization}, { creator: null }] })
      .populate({
        path: "category",
        select: {
          _id: 0,
          name: 1,
        },
      })
      .select({
        _id: 1,
        name: 1,
        url: 1,
        icon: 1,
        exact: 1,
        isAdminApproved: 1,
        creator: 1
      })
      .sort("category")
      .exec((err, data) => {
        try {
          let arr = [];
          data.forEach((ele) => {
            const isHeader = arr.find((obj) => obj.header === ele.category.name);

            if (!isHeader)
              arr.push({
                header: ele.category.name,
              });

            arr.push(ele);
          });
          res.json(arr);
        } catch (error) {
          res.json(err);
        }
      });    

    // res.json(apps);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.post("/test", auth, async (req, res) => {
  try {
    let { app, creator } = req.body;
    await App.findByIdAndUpdate(app, { $set: { creator: creator }});
    res.json({ok: true});
  } catch (error) {
    res.json({err: error})
  }
});

module.exports = router;
