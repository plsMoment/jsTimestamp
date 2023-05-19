// модель участника мероприятий

const { Model, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");
const { Event } = require('../models/event-model');

class Participant extends Model { }
Participant.init({
    Ticket_ID: { // ID билета
        type: Sequelize.DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    User_ID: { // ID пользователя
        type: Sequelize.DataTypes.UUID
    },
    User_Initials: { // Инициалы пользователя
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    Num_Of_Occupied_Place: { // Номер занимаего места на мероприятии
        type: Sequelize.DataTypes.INTEGER
    },
    User_email: { // Электронная почта пользователя
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'participant'
});

Event.hasMany(Participant, {    // Создание foreign key столбца для Event
    foreignKey: 'Event_ID',
    onDelete: 'CASCADE',
    allowNull: false,
    type: Sequelize.DataTypes.UUID
});

module.exports = { Participant };