var express = require('express');
var router = express.Router();
const mongoose = require('mongoose'); // Import mongoose
const reportModel = require('../../components/report/ReportModel');
const typeModel = require('../../components/report/TypeModel');
const userModel = require('../../components/users/UserModel');
const adminModel = require('../../components/users/AdminModel');
const moment = require('moment'); // Import thư viện moment
const reportController = require('../../components/report/ReportController');
const { populate } = require('../../components/products/ProductModel');
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
        if (!image) {
            // Sử dụng moment để lấy giờ hiện tại và định dạng theo "hh:mm a"
            res.status(400).json({ result: false, message: 'missing image' });
            return;
        }
        if (!userId) {
            // Sử dụng moment để lấy giờ hiện tại và định dạng theo "hh:mm a"
            res.status(400).json({ result: false, message: 'missing userId' });
            return;
        }
        if (!room) {
            // Sử dụng moment để lấy giờ hiện tại và định dạng theo "hh:mm a"
            res.status(400).json({ result: false, message: 'missing room' });
            return;
        }
        if (!description) {
            // Sử dụng moment để lấy giờ hiện tại và định dạng theo "hh:mm a"
            res.status(400).json({ result: false, message: 'missing description' });
            return;
        }

        // Kiểm tra và đặt các trường là chuỗi rỗng nếu chúng là null hoặc undefined
        const adminValue = admin || null;
        const imageValue = image || 'http://dummyimage.com/142x100.png/5fa2dd/ffffff';
        const acceptValue = accept || null;
        const doneValue = done || null;
        const descriptionValue = description || "khong co mo ta";
        const status = 0;
        // Tạo một bản ghi report mới
        const newReport = {
            report_date,
            userId: userId,
            type,
            room,
            image: imageValue,
            time,
            admin: adminValue,
            accept: acceptValue,
            done: doneValue,
            description: descriptionValue,
            status: 0
        };
        //Lưu bản ghi report vào cơ sở dữ liệu
        let newResult = "";
        try {
            newResult = await reportModel.create(newReport);
        } catch (error) {
            console.log(error);
        }
        if (newResult) {
            res.status(201).json({ result: true, message: 'Báo cáo đã được thêm thành công.', report: newResult });
            return;
        } else {
            res.status(400).json({ result: false, message: 'Thêm báo cáo thất bại' });
            return;
        }
    } catch (error) {
        res.status(400).json({ result: false, message: 'Lỗi khi thêm báo cáo.' + error });
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



router.get('/', async (req, res, next) => {
    try {
        const report = await reportController.getAllServices();
        res.status(200).json({ report, result: true });
    } catch (error) {
        console.log(error);
        res.status(400).json({ result: false });
    }
});
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const report = await reportModel.findById(id)
        res.status(200).json({ result: true, report: report });
    } catch (error) {
        res.status(400).json({ result: false, message: 'khong có id này' });
    } false
});
router.post('/accept', async (req, res, next) => {
    const { idReport, idAdmin } = req.body;

    const acceptAt = moment().format('hh:mm A');
    if (idReport.length < 10) {
        return res.status(400).json({ result: false, message: 'Thieu idReport' });
    }
    else if (idAdmin.length < 10) {
        return res.status(400).json({ result: false, message: 'Thieu idAdmin' });

    } else {
        try {
            const adminId =new mongoose.Types.ObjectId(idAdmin);
            console.log(adminId);
            // Tìm tài liệu report dựa trên idReport và cập nhật trường admin thành idAdmin
            const report = await reportModel.findByIdAndUpdate(idReport, { admin: adminId, status: 1, accept: acceptAt });

            if (!report) {
                // Trường hợp không tìm thấy report với idReport tương ứng
                return res.status(400).json({ result: false, message: 'Không tìm thấy báo cáo này' });
            }

            res.status(200).json({ report, result: true });
        } catch (error) {
            console.log(error);
            res.status(500).json({ result: false, message: 'Lỗi khi cập nhật báo cáo' });
        }
    }

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