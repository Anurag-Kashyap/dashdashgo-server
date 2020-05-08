const mongoose = require('mongoose');

const RegistrationTrackerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    userApps: [{
        app: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'apps'
        },
        url: {
            type: String,
            required: false,
            unique: true,
        }
    }],
    organization: {
        type: String
    },
    registrationStage: {
        type: Number,
        default: 0      // 0-not started, 1-email,password set, 2-name, org name set, 3-apps selected, 4-downloaded chrome extension
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = RegistrationTracker = mongoose.model('registrationSchema', RegistrationTrackerSchema);