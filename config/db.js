const { Sequelize } = require('sequelize');

const username = 'postgres';    // your username in postgres
const password = 'admin';       // password for your postgres user
const host = 'localhost';       // ip
const port = '5432';            // port
const database = 'TimeStamp';   // database name

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

sequelize.sync().then(result => {
    console.log(result);
}).catch(err => console.log(err));

module.exports = { sequelize }