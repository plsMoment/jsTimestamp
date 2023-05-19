// модель категорий

const { Model, Sequelize, Op } = require("sequelize");
const { sequelize } = require("../config/db");

class Category extends Model {}
Category.init({
    id_category: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },

    name_category: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    modelName: 'category'
});

module.exports = { Category };