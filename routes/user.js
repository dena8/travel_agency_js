const router = require('express').Router();
const userController = require('../controller/user');


router.post('/add',userController.post.postUser);
router.get("/all", userController.get.getAllCustomers);


module.exports=router;

