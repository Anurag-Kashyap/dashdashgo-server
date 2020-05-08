const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  onboardingPhase: {
    type: Number,
    required: true,
    default: 1, //1-Registerations Completed, 2-Profile Updated, 3-apps User apps selected, 4- Downloaded Chrome extension/Final
  },
  userApps: [
    {
      app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "apps",
      },
      url: {
        type: String,
        required: false,
        unique: false, // need to false otherwise i may created user registration problems.
      },
    },
  ],
  frequentApps: [
    {
      app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "apps",
      },
      url: {
        type: String,
        required: false,
        unique: false, // need to false otherwise i may created user registration problems.
      },
      frequency: {
        type: Number,
        default: 0,
      },
    },
  ],
  organization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organization",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = User = mongoose.model("user", UserSchema);
