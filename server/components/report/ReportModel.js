const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    report_date: { type: String}, 
    userId: { type: ObjectId, ref: 'users' }, 
    type: { type: Number}, 
    room: { type: String },
    image: { type: String },
    time: { type: String },
    admin: { type: String },
    accept: { type: String },
    done: { type: String },
    description: { type: String },
});
module.exports = mongoose.model('report', schema, 'reports');
