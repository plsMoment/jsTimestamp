const express = require('express');
const {getAll} = require('../controllers/city-controller');

const router = express.Router();

router.get('/cities', getAll);

module.exports = router;