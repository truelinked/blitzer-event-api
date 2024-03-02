const mongoose = require('../../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    visitorId: String,
    requestId: String,
    events: Object
})

eventSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

eventSchema.set('toJSON', {
    virtuals: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
    Event
}
