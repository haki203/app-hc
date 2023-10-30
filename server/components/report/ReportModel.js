const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    id: { type: ObjectId }, 
    room: { type: String },
    image: [{ type: String }],
    option: { type: String},
    createAt: { type: Date },
    description: { type: String },
    userId: { type: ObjectId, ref: 'users' }, 
    typeId: { type: ObjectId, ref: 'types' },
});
module.exports = mongoose.model('report', schema, 'reports');
