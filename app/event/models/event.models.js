const mongoose = require('../../../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;

eventSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

eventSchema.set('toJSON', {
    virtuals: true
});

const eventSchema = new Schema({
    
})