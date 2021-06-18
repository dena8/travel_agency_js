const router = require('express').Router();
const tourController = require('../controller/tour');
const {isAdmin}=require('../middleware/auth');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();


router.get('/all',tourController.get.all);
router.get('/:id',tourController.get.tourById);

router.post('/create',multipartMiddleware,tourController.post.createTour);

router.delete('/remove/:id', tourController.delete.tourById);


module.exports=router;