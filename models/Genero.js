const Sequelize = require('sequelize');
const db = require('../config/db');
const Peli_Serie = require('./Peli_Serie')

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
// Genero.belongsTo(Peli_Serie);
module.exports = Genero;