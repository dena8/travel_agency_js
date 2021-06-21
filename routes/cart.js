const router = require('express').Router();
const cartController = require('../controller/cart');
const asyncHandler = require('express-async-handler');
const {hasRole} = require('../middleware/index');

router.get('/add/:id',[hasRole('USER_ROLE')],asyncHandler(cartController.post.addTourToCart));
router.put('/remove-item',[hasRole('USER_ROLE')],asyncHandler(cartController.put.removeFromCart));


module.exports=router;