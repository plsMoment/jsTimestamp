const { City } = require('./models/city-model');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const sequelize = require('./config/db');


const initCity = async () => {
    try {
        const data = fs.readFileSync("config/city.txt").toLocaleString();
        const names = data.split("\n");
        const res = names.map(el => {
            return { 'id_city': uuidv4(), 'name_city': el };
        });
        await City.bulkCreate(res);
    } catch(err) {
        console.log(err);
    }
}

initCity();
