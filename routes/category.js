const router = require('express').Router();
const categoryController = require('../controller/category');

router.post('/create',categoryController.post.createCategory);
router.get('/all', categoryController.get.allCategories);

module.exports = router;