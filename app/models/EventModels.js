const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    visitorId: String,
    requestId: String,
    events: Object
})

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
