const Sequelize = require('sequelize');

const db = require('../config/db');

const Genero = db.define('Genero', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING
    },
    imagen: {
        type: Sequelize.STRING
    },
    peliSerie: {
        type: Sequelize.INTEGER
    }
});

module.exports = Genero;