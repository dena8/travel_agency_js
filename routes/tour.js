const router = require('express').Router();
const tourController = require('../controller/tour');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const asyncHandler = require('express-async-handler');
const {isAuth,hasRole} = require('../middleware/index')


router.get('/all',isAuth('false'),asyncHandler(tourController.get.all));
router.get('/:id',asyncHandler(tourController.get.tourById));

router.post('/create',hasRole('GUIDE_ROLE'),multipartMiddleware,asyncHandler(tourController.post.createTour));

router.delete('/remove/:id',hasRole('ADMIN_ROLE'),asyncHandler(tourController.delete.tourById));


module.exports=router;