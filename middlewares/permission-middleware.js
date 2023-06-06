const ApiError = require('../exceptions/api-error');
const tokenService = require('../service/token-service');

module.exports = function (req, res, next) {
    try {
        if (!req.user.isAdmin) {
            return next(ApiError.Forbidden());
        }
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};