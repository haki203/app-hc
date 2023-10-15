const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const schema = new Schema({
    report_date: { type: String, required: true }, // Tiêu đề (bắt buộc phải có)
    userId: { type: ObjectId, ref: 'users' }, // Tham chiếu đến bảng Author thông qua khóa ngoại AuthorID
    type: { type: Number}, // Tham chiếu đến bảng Category thông qua khóa ngoại CategoryID
    room: { type: String },
    image: { type: String },
    time: { type: String },
    admin: { type: String },
    accept: { type: String },
    done: { type: String },
});
// Đảm bảo rằng bảng Products chưa được định nghĩa trước đó
module.exports = mongoose.model('report', schema, 'reports');
