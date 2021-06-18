const router = require('express').Router();
const userController = require('../controller/user');
const {isAdmin}=require('../middleware/auth');


router.get('/get/current',userController.get.currentUser);
router.get('/authorities',userController.get.authorities);
router.get('/find',userController.get.checkIfUserExist);

router.post('/register',userController.post.register);
router.post('/login',userController.post.login);

router.put('/update/authority',userController.update.updateAuthority);

module.exports=router;

