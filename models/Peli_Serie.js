const Sequelize = require("sequelize");
const db = require("../config/db");
const Personaje = require("./Personaje");

const Peli_Serie = db.define("Peli_Serie", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: Sequelize.STRING,
  },
  fecha: {
    type: Sequelize.DATE,
  },
  calificacion: {
    type: Sequelize.INTEGER,
  },
  imagen: {
    type: Sequelize.STRING,
  },
});
// Peli_Serie.hasMany(Personaje);
// Personaje.belongsTo(Peli_Serie);

// Peli_Serie.hasMany(Personajes);

module.exports = Peli_Serie;
