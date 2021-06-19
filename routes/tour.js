const router = require('express').Router();
const tourController = require('../controller/tour');
const {isAdmin}=require('../middleware/auth');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const asyncHandler = require('express-async-handler');


router.get('/all',asyncHandler(tourController.get.all));
router.get('/:id',asyncHandler(tourController.get.tourById));

router.post('/create',multipartMiddleware,asyncHandler(tourController.post.createTour));

router.delete('/remove/:id',asyncHandler(tourController.delete.tourById));


module.exports=router;