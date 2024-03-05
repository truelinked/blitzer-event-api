const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    accessKey: String,
})

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;