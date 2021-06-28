const Sequelize = require('sequelize');

const db = require('../config/db');

const Personaje = db.define('Personaje', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    edad: {
        type: Sequelize.INTEGER
    },
    historia: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    }
});

module.exports = Personaje;