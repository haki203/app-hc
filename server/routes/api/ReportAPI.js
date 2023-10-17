var express = require('express');
var router = express.Router();
const reportModel = require('../../components/report/ReportModel');
const userModel = require('../../components/users/UserModel');
const reportController = require('../../components/report/ReportController');

//api/product
router.get('/', async (req, res, next) => {
    try {
        const report = await reportController.getAllServices();
        res.status(200).json({report,result:true});
    } catch (error) {
        res.status(400).json({result:false});
    }
});
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const report = await reportModel.findById(id);
        res.status(200).json({report,result:true});
    } catch (error) {
        res.status(400).json({result:false,message:'khong có id này'});
    }false
});

// get user by id
router.get('/user/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userModel.findById(id);
        if(user){
            res.status(200).json({user,result:true});
        }
        else{
            res.status(400).json({result:false});
        }
    } catch (error) {
        res.status(400).json({});
    }
});

// // get category by id
// router.get('/category/:id', async (req, res, next) => {
//     const { id } = req.params;
//     try {
//         const category = await categoryModel.findById(id);
//         res.status(200).json({category,result:true});
//     } catch (error) {
//         res.status(400).json({});
//     }
// });
// // get all product by category
// router.get('/get-by-category/:categoryId', async (req, res) => {
//     try {
//       const { categoryId } = req.params;
//       // Truy vấn cơ sở dữ liệu để lấy các sản phẩm có categoryId tương ứng
//       const product = await productModel.find({ categoryId });
//         if(product){
//             res.status(200).json({result:true,product});
//         }
//         else {
//             res.status(400).json({result:false});
//         }
//     } catch (err) {
//       res.status(500).json({ error: 'Đã có lỗi xảy ra' });
//     }
//   });
// // add sp
// router.post('/', async (req, res, next) => {

//     try {
//         const { name, price, quantity, image, category } = req.body;
//         await productController.addNewProduct(name, price, quantity, image, category);
//         res.status(200).json({ result: true });
//     } catch (error) {
//         res.status(400).json({ result: false });
//     }
// });
// //api/product/search/name?keyword=iphone
// router.get('/search/name', async (req, res, next) => {
//     try {
//         const {keyword} = req.query;
//         const product = await productController.search(keyword);
//         return res.status(200).json({product,result:true});
//     } catch (error) {
//         console.log("api search error: "+error);
//         res.status(400).json({result:false});
//     }
// });
// //upload hinh len sever
// //api/product/upload
// router.post('/upload',[UploadFile.single('image')] ,async (req, res, next) => {
//     try {
//         const {file} =req;
//         if(!file){
//             return res.status(400).json({result:false});
//         }
//         else{
//             const url=`http://172.16.87.39:3000/images/${file.filename}`;
//             return res.status(200).json({result:true,url}); 
//         }
//     } catch (error) {
//         console.log("upload error: "+error);
//         res.status(500).json({});
//     }
// });
// //api/product/get-all-products
// router.get('/get-all-products',[UploadFile.single('image')] ,async (req, res, next) => {
//     try {
//         const {file} =req;
//         if(!file){
//             return res.status(400).json({result:false});
//         }
//         else{
//             const url=`http://172.16.87.39:3000/images/${file.filename}`;
//             return res.status(200).json({result:true,url}); 
//         }
//     } catch (error) {
//         console.log("upload error: "+error);
//         res.status(500).json({});
//     }
// });
module.exports = router;