var express = require('express');
var router = express.Router();
const reportController = require('../../components/report/ReportController');
const appFirebase = require("../../config/FirebaseConfig")

const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });


//http://localhost:3000/api/report/list
router.get('/list', async (req, res, next) => {
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
        const userIdValue = userId || '652bc5771e8e20f18f052a65';
        const imageValue = image || 'http://dummyimage.com/142x100.png/5fa2dd/ffffff';
        const acceptValue = accept || null;
        const doneValue = done || null;
        const descriptionValue = description || "khong co mo ta";
        const status = 0;
        // Tạo một bản ghi report mới
        const newReport = {
            report_date,
            userId: userIdValue,
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
        let newResult="";
        try {
            newResult = await reportModel.create(newReport);
        } catch (error) {
            console.log(error);
        }
        if (newResult) {
            res.status(201).json({ result: true, message: 'Báo cáo đã được thêm thành công.' ,report:newResult});
            return;
        } else {
            res.status(400).json({ result: false, message: 'Thêm báo cáo thất bại' });
            return;
        }
    } catch (error) {
        console.log("API:" + error)
        return res.status(500).json({ result: false, massage: "Can't get reports"})
    }
})

//http://localhost:3000/api/report/newReport
router.post('/newReport/:userId/:typeId', upload.array("filename"), async (req, res, next) => {
    try {
        const { room, option, description} = req.body;
        const {userId, typeId} = req.query
        const createAt = new Date();

        const dateTime = giveCurrentDateTime();
    
        const uploadPromises = req.files.map(async (file) => {
          const storageRef = ref(storage, `images/${file.originalname + " " + dateTime}`);
          const metadata = {
            contentType: file.mimetype,
          };
    
          const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
          const downloadURL = await getDownloadURL(snapshot.ref);
    
          return downloadURL; 
        });
    
        const urls = await Promise.all(uploadPromises);

        const report = await reportController.newReport(room, urls, option, createAt, description, userId, typeId);
        
        if (report) {
            return res.status(200).json({ result: true, report: report, message: "Add Success" });
        }
        return res.status(400).json({ result: false, report: null, message: "Add Fail" });

    } catch (error) {
        return res.status(500).json({ result: false, report: null })
    }
})

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
}

// http://localhost:3000/api/report/upload
router.post("/upload", upload.array("filename"), async (req, res) => {
    try {
        const dateTime = giveCurrentDateTime();
    
        const uploadPromises = req.files.map(async (file) => {
          const storageRef = ref(storage, `images/${file.originalname + " " + dateTime}`);
          const metadata = {
            contentType: file.mimetype,
          };
    
          const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
          const downloadURL = await getDownloadURL(snapshot.ref);
    
          return downloadURL; 
        });
    
        const urls = await Promise.all(uploadPromises); 
    
        console.log("Tải lên tệp thành công.");
        return res.send({
          message: "Tệp đã được tải lên vào lưu trữ Firebase",
          downloadURLs: urls, 
        });
      } catch (error) {
        return res.status(400).send(error.message);
      }
});
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const report = await reportModel.findById(id).populate('admin', 'full_name');;
        res.status(200).json({  result: true,report:report });
    } catch (error) {
        res.status(400).json({ result: false, message: 'khong có id này' });
    } false
});
router.post('/accept', async (req, res, next) => {
    const { id } = req.body;
    try {
        const report = await reportModel.findById(id).populate('admin', 'full_name');
        res.status(200).json({ report, result: true });
    } catch (error) {
        res.status(400).json({ result: false, message: 'khong có id này' });
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