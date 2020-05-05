const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
    organization: {
        type: String,
        default: 'RockStack Capital'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Organization = mongoose.model('organization', OrganizationSchema);