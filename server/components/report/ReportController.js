const reportService = require('./ReportService');

const getAllReport = async ()=>{
    try{
        return await reportService.getAllReport();
    }catch(error){
        console.log("getAllReport Controller: "+error);
        throw error;
    }
}

const newReport = async (room, image, option, createAt, description, userId, typeId)=>{
    try{
        return await reportService.newReport(room, image, option, createAt, description, userId, typeId);
    }catch(error){
        console.log("newReport Controller: "+error);
        throw error;
    }
}

module.exports={getAllReport, newReport};
