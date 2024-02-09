const mongoose = require('../../../common/mongoose.service').mongoose;
const Schema = mongoose.Schema;

authSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

authSchema.set('toJSON', {
    virtuals: true
});

const authSchema = new Schema({
    accessKey: String,
})
