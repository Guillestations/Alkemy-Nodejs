const Sequelize = require('sequelize');

const db = require('../config/db');

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    Correo: {
        type: Sequelize.STRING
    },
    Password: {
        type: Sequelize.STRING
    }
});

module.exports = User;