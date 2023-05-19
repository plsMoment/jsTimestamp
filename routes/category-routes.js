// роуты для категорий

const express = require('express');
const { createCategory, deleteCategory, getAll } = require('../controllers/category-controller');

const router = express.Router();
const jsonParser = express.json();

router.post('/categories', jsonParser, createCategory);
router.delete('/categories/:id_category', jsonParser, deleteCategory);
router.get('/categories', jsonParser, getAll);

module.exports = router;