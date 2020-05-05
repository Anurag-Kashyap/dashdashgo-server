const mongoose = require('mongoose');

const FrequentAppsSchema = new mongoose.Schema({
    app: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'apps'
    },
    frequency:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = FrequentApps = mongoose.model('frequentApps', FrequentAppsSchema);