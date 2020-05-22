const mongoose = require("mongoose");

const AppsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
  },
  exact: {
    type: Boolean,
    default: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
  isAdminApproved: {
    type: Boolean,
    default: false
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'organization',
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Apps = mongoose.model("apps", AppsSchema);
