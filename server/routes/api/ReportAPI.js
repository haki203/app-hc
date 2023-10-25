/* eslint-disable prettier/prettier */
var express = require('express');
var router = express.Router();
const reportModel = require('../../components/report/ReportModel');
const typeModel = require('../../components/report/TypeModel');
const userModel = require('../../components/users/UserModel');
const adminModel = require('../../components/users/AdminModel');
const moment = require('moment'); // Import thư viện moment
const reportController = require('../../components/report/ReportController');
// API POST để thêm báo cáo
router.post('/new', async (req, res) => {
    try {
        let {
            report_date,
            userId,
            type,
            room,
            image,
            time,
            admin,
            accept,
            done,
            description,
        } = req.body; // Lấy dữ liệu từ yêu cầu POST

        if (!report_date) {
            // Sử dụng hàm new Date() để lấy ngày hiện tại và chuyển định dạng thành chuỗi
            report_date = moment().format('DD/MM/YYYY');
        }
        if (!time) {
            // Sử dụng moment để lấy giờ hiện tại và định dạng theo "hh:mm a"
            time = moment().format('hh:mm A');
        }
        // Kiểm tra và đặt các trường là chuỗi rỗng nếu chúng là null hoặc undefined
        const adminValue = admin || '';
        const imageValue = image || 'http://dummyimage.com/142x100.png/5fa2dd/ffffff';
        const acceptValue = accept || '';
        const doneValue = done || '';
        const descriptionValue = description || '';
<<<<<<< HEAD
        const status =0;
=======

>>>>>>> parent of 85e9485 (Merge branch 'main' into bao)
        // Tạo một bản ghi report mới
        const newReport = new reportModel({
            report_date,
            userId,
            type,
            room,
            image:imageValue,
            time,
            admin: adminValue,
            accept: acceptValue,
            done: doneValue,
            description: descriptionValue,
<<<<<<< HEAD
            status:status
=======
>>>>>>> parent of 85e9485 (Merge branch 'main' into bao)
        });

        // Lưu bản ghi report vào cơ sở dữ liệu
        await newReport.save();

        res.status(201).json({ result: true, message: 'Báo cáo đã được thêm thành công.' });
    } catch (error) {
        res.status(400).json({ result: false, message: 'Lỗi khi thêm báo cáo.'+error });
    }
});
// get category
router.get('/category', async (req, res, next) => {
    try {

        const category = await typeModel.find({});
        if (category) {
            res.status(200).json({ category, result: true });
        }
        else {
            res.status(400).json({ result: false, message: "không có danh mục nào" });
        }
    } catch (error) {
        res.status(400).json({ result: false });
    }
});


//api/product
router.get('/', async (req, res, next) => {
    try {
        const report = await reportController.getAllServices();
        res.status(200).json({ report, result: true });
    } catch (error) {
        res.status(400).json({ result: false });
    }
});
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const report = await reportModel.findById(id);
        res.status(200).json({ report, result: true });
    } catch (error) {
<<<<<<< HEAD
        res.status(400).json({result:false,message:'khong có id này'});
    }false
=======
        res.status(400).json({});
    }
>>>>>>> parent of 85e9485 (Merge branch 'main' into bao)
});

// get user by id
router.get('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id);
        if (user) {
            res.status(200).json({ user, result: true });
        }
        else {
            res.status(400).json({ result: false });
        }
    } catch (error) {
        res.status(400).json({});
    }
});


module.exports = router;