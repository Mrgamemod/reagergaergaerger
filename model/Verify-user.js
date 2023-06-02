const mongoose = require('mongoose');

const verify = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: () => Date.now(),
    }
});

module.exports = mongoose.model('VerifyUser', verify);