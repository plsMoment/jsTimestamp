const userService = require('../service/user-service');

const registration = async (req, res, next) => {
    try {
        const userData = await userService.registration(req.body.name, req.body.password, JSON.parse(req.body.isAdmin));
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData);
    } catch (err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        const userData = await userService.login(req.body.name, req.body.password);
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData);
    } catch (err) {
        next(err);
    }
}

const logout = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        const token = await userService.logout(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (err) {
        next(err);
    }
}

const refresh = async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        const userData = await userService.refresh(refreshToken);
        res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        return res.json(userData);
    } catch (err) {
        next(err);
    }
}

const getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return res.json(users);
    } catch (err) {
        next(err);
    }
}

module.exports = { registration, login, logout, refresh, getUsers };