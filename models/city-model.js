// модель города

const { Model, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");
const {initCity} = require("../controllers/city-controller");

class City extends Model {}
City.init({
    id_city: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },

    name_city: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    timestamps: false,
    modelName: 'city'
});

module.exports = { City };