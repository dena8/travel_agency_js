const router = require('express').Router();
const tourController = require('../controller/tour');
const {isAdmin}=require('../middleware/auth');
// const multer = require('multer') // v1.0.5
// const upload = multer()
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.post('/create',multipartMiddleware,tourController.post.createTour);



module.exports=router;