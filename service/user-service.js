const { User } = require('../models/user-model');
const bcrypt = require('bcrypt');
const tokenService = require('./token-service');
const UserDto = require('../dtos/user-dto');
const ApiError = require('../exceptions/api-error');
const {v4: uuidv4} = require("uuid");

class UserService {
    async registration(name, password, isAdmin) {
        const candidate = await User.findOne({where: { name: name } });
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с именем ${name} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user_id = uuidv4(); // v34fa-asfasf-142saf-sa-asf

        const user = await User.create(
            {user_id: user_id, name: name, password: hashPassword, isAdmin: isAdmin}
        );

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.user_id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async login(name, password) {
        const user = await User.findOne({where: { name: name } })
        if (!user) {
            throw ApiError.BadRequest('Пользователь с таким именем не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль');
        }
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.user_id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }
        const user = await User.findByPk(userData.user_id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.user_id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async isAdmin(token) {

    }
    async getAllUsers() {
        const users = await User.findAll();
        return users;
    }

}

module.exports = new UserService();