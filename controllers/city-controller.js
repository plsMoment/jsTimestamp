// контроллер  городов

const { City } = require('../models/city-model');
const {v4: uuidv4} = require('uuid'); // функции из этого модуля создают айдишники
const fs = require('fs');


const getAll = async (req, res) => {
    try {
        city = await City.findAll();
        const responseData = {
            status: true,
            data: city,
        };
        //console.log(city);
        res.status(200).send(JSON.stringify(responseData, null, 2));
    } catch(err) {
        res.status(500).send({status: false});
    }
}

module.exports = { getAll };