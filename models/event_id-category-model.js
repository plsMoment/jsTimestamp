// модель для связи id мероприятий и категорий

const { Model, Sequelize, Op } = require("sequelize");
const { sequelize } = require("../config/db");
const { Category } = require('./category-model');

class Event_id_for_category extends Model {}
Event_id_for_category.init(
{}
, {
    sequelize,
    modelName: 'event_id_for_category'
});

Category.hasMany(Event_id_for_category, {    // Создание foreign key столбца для Category
    foreignKey: 'id_category',
    onDelete: 'CASCADE',
    allowNull: false,
    type: Sequelize.DataTypes.UUID
});

Event_id_for_category.createCategory = async (body, id) => {
    const names = await Category.findAll({
        raw: true,
        attributes: ['id_category'],
        where: {
            name_category: body.name_category
        }
    });
    names.map(el => { el['id_event'] = id; return el; });
    Event_id_for_category.bulkCreate(names);    
}


Event_id_for_category.deleteEventCategory = async(id) => {
    await Event_id_for_category.destroy({
        where: {
            id_event: id
        }
    })
}


module.exports = { Event_id_for_category };