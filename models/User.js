const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    name: {
        type: String,
    },
    avatar: {
        type: String
    },
    onboardingPhase: {
        type: Number,
        required: true,
        //  1-Registerations Completed, 2-Profile Updated, 3-apps User apps selected, 4- Downloaded Chrome extension/Final
        default: 1
    },
    userApps: [{
        app: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'apps'
        },
        url: {
            type: String,
            required: false
        }
    }],
    frequentApps: [{
        app: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'apps'
        },
        url: {
            type: String,
            required: false,
        },
        frequency: {
            type: Number,
            default: 0
        }
    }],
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'organization',
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model('user', UserSchema);