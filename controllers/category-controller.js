// контроллер категорий

const { Category } = require('../models/category-model');
const {v4: uuidv4} = require('uuid');

const createCategory = async (req, res) => {
    const id_category = uuidv4();
    try {
        await Category.create({
            id_category: id_category,
            name_category: req.body.name_category
        })
        res.status(200).send({status: true});
    } catch(err) {
        console.log(err);
        res.status(500).send({status: false});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const result = await Category.destroy({
            where: {
                id_category: req.params.id_category
            }
        });
        
        res.status(200).send(JSON.stringify({status: Boolean(result)}, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

const getAll = async (req, res) => {
    try {
        categories = await Category.findAll();
        const responseData = {
            status: true,
            data: categories,
        };
        res.status(200).send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

module.exports = {createCategory, deleteCategory, getAll};