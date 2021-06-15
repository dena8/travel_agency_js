const router = require('express').Router();
const userController = require('../controller/user');
const {isAdmin}=require('../middleware/auth');


router.post('/register',userController.post.register);
router.post('/login',userController.post.login);

module.exports=router;

