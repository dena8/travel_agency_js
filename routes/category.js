const router = require('express').Router();
const categoryController = require('../controller/category');

router.get('/all', categoryController.get.allCategories);

router.post('/create',categoryController.post.createCategory);


module.exports = router;