const router = require('express').Router();
const userController = require('../controller/user');
const {isAdmin}=require('../middleware/auth');
const asyncHandler = require('express-async-handler');


router.get('/get/current',asyncHandler(userController.get.currentUser));
router.get('/authorities',asyncHandler(userController.get.authorities));
router.get('/find',asyncHandler(userController.get.checkIfUserExist));

router.post('/register',asyncHandler(userController.post.register));
router.post('/login',asyncHandler(userController.post.login));

router.put('/update/authority',asyncHandler(userController.update.updateAuthority));

module.exports=router;

