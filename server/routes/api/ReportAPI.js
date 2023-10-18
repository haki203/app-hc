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
        const reports = await reportController.getAllReport();
        console.log("reports :" ,reports)
        if (reports) {
            return res.status(200).json({ result: true, reports: reports });
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

module.exports = router;