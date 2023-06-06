const express = require('express');
const { registration, login, logout, refresh, getUsers } = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');
const permissionMiddleware = require('../middlewares/permission-middleware');

const router = express.Router();
const jsonParser = express.json();

router.post('/registration', jsonParser, registration);
router.post('/login', jsonParser, login);
router.post('/logout', jsonParser, logout);
router.get('/refresh', jsonParser, refresh);
router.get('/users', authMiddleware, permissionMiddleware, getUsers);

module.exports = router;