const { Model, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");

class Token extends Model {}
Token.init({
    user_id: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },

    refreshToken: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: sequelize,
    modelName: 'token'
});

module.exports = { Token };