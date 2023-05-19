// модель мероприятия

const { Model, Sequelize, Op } = require("sequelize");
const { sequelize } = require("../config/db");
const { Category }  = require("../models/category-model");
const { Event_id_for_category } = require("../models/event_id-category-model");


class Event extends Model {}
Event.init({
    id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: { // Название
        type: Sequelize.STRING,
        allowNull: false
    },
    date: { // Дата
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false
    },
    time: { // Время
        type: Sequelize.DataTypes.DATE
    }, 
    country: { // Страна
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    city: { // Город
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    venue: { // Место проведения
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    ageLimit: { // Возрастное ограничение
        type: Sequelize.DataTypes.INTEGER
    },
    availablePlaces: { // Свободные места
        type: Sequelize.DataTypes.INTEGER
    },
    description: { // Описание
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    },
    shortDescription: {
        type: Sequelize.DataTypes.STRING(90),
        allowNull: false
    },
    price: { // Цена
        type: Sequelize.DataTypes.DOUBLE(2)
    },
    poster: { // Афиша
        type: Sequelize.DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'event'
});

Event.hasMany(Event_id_for_category, {    // Создание foreign key столбца для Event
    foreignKey: 'id_event',
    onDelete: 'CASCADE',
    allowNull: false,
    type: Sequelize.DataTypes.UUID
});

//Метод поиска мероприятий по нескольким параметрам
Event.searchAll = async function (query) {
    whereStatement = {[Op.and]: []};

    if (query.name) {
        whereStatement[Op.and].push({
            name: {
                [Op.like]: `%${query.name}%`
            }
        });
    }

    if (query.date_from && query.date_to) {
        curDate = new Date();
        date_from = new Date(query.date_from);
        if (date_from < curDate) query.date_from = curDate;
        whereStatement[Op.and].push({
            date: {[Op.between]: [query.date_from, query.date_to]}
        });
    }

    if (query.name_category) {

        const names = await Category.findAll({
            raw: true,
            attributes: ['id_category'],
            where: {
                name_category: query.name_category
            }
        });

        const arrayEvents = await Event_id_for_category.findAll({
            raw: true,
            attributes: ['id_event'],
            where: {
                id_category: {[Op.in]: names.map(el => { return el['id_category']; })}
            }
        });

        whereStatement[Op.and].push({
            id: {
                [Op.in]: arrayEvents.map(el => { return el['id_event']; })
            }
        });
    }

    if (query.city) {
        whereStatement[Op.and].push({
            city: query.city
        });
    }

    const result = await this.findAll({
        where: whereStatement
    });

    const responseData = {
        status: Boolean(result),
        data: result,
    };

    return responseData;
};


module.exports = { Event };