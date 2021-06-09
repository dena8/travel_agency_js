const router = require('express').Router();
const userController = require('../controller/user');


router.post('/add',userController.post.postUser);

module.exports=router;

