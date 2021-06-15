const router = require('express').Router();
const tourController = require('../controller/tour');
const {isAdmin}=require('../middleware/auth');

router.post('/create',[isAdmin],tourController.post.createTour);



module.exports=router;