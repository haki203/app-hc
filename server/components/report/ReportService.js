const reportModel = require('./ReportModel');

const getAllReport = async () => {
    try {
        const reports = await reportModel.find()
            .populate({ path: 'userId', model: 'User' })
            .populate({ path: 'typeId', model: 'Type' })
            .lean() // Sử dụng .lean() để chuyển dữ liệu sang dạng JavaScript object

        if (reports) {
            console.log("getAllReport Service: " + reports);

            // Bây giờ bạn có thể truy xuất thông tin từ các trường liên quan
            reports.forEach(report => {
                const userId = report.userId; // Thông tin từ trường liên quan 'userId'
                const typeId = report.typeId; // Thông tin từ trường liên quan 'typeId'
                // Thực hiện các thao tác với userId và typeId ở đây
            });

            return reports;
        }
    } catch (err) {
        console.log("getAllReport Service error" + err);
        return false;
    }
}

const getAllReportType1 = async () => {
    try {
        const reports = reportModel.find()
            .populate('userId')
            .populate('typeId')
            .execPopulate(); 
        if (reports) {
            return reports
        }
    } catch (err) {
        console.log("getAllReportType1 Service error" + err)
        return false;
    }
}

const newReport = async (room, image, option, createAt, description, userId, typeId) => {
    try {
        const newReport = { room, image, option, createAt, description, userId, typeId };
        const u = new reportModel(newReport);
        await u.save();
        return u;
        
    } catch (error) {
        console.log("newReport Service error" + error)
        return false;
    }
}

module.exports = { getAllReport, getAllReportType1, newReport };
