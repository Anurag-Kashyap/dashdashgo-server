const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    userApps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'apps'
    }],
    frequentApps: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'frequentApps',
        default: null
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

module.exports = Profile = mongoose.model('profile', ProfileSchema);