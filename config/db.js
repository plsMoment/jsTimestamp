const { Sequelize } = require('sequelize');

const username = '';            // your username in postgres
const password = '';            // password for your postgres user
const host = '';                // ip
const port = '';                // port
const database = '';            // database name

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

sequelize.sync().then(result => {
    console.log(result);
}).catch(err => console.log(err));

module.exports = { sequelize }