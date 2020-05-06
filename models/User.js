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
    frequentApps: [{
        app: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'apps'
        },
        url: {
            type: String,
            required: false,
            unique: true
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