const Sequelize = require('sequelize');

const db = new Sequelize('AlkemyNode','root','root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max:5,
        min: 0,
        acquire: 3000,
        adle: 10000
    },

})

module.exports = db;
