const mongoose = require('mongoose');

const AppsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    icon: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Apps = mongoose.model('apps', AppsSchema);