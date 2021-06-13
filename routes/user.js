const router = require('express').Router();
const userController = require('../controller/user');


router.post('/register',userController.post.register);
router.post('/login',userController.post.login);
// router.get("/all", userController.get.getAllCustomers);


module.exports=router;

