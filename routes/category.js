const router = require('express').Router();
const categoryController = require('../controller/category');
const asyncHandler = require('express-async-handler');

router.get('/all',asyncHandler(categoryController.get.allCategories));

router.post('/create',asyncHandler(categoryController.post.createCategory));


module.exports = router;