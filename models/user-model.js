const { Model, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");

class User extends Model {}
User.init({
    user_id: {
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },

    isAdmin: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize: sequelize,
    modelName: 'user'
});

module.exports = { User };