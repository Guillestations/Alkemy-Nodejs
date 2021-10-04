const Sequelize = require("sequelize");
const db = require("../config/db");
const Peli_Serie = require("./Peli_Serie");

const Personaje = db.define("Personaje", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: Sequelize.STRING,
  },
  edad: {
    type: Sequelize.INTEGER,
  },
  peso: {
    type: Sequelize.INTEGER,
  },
  historia: {
    type: Sequelize.STRING,
  },
  imagen: {
    type: Sequelize.STRING,
  },
});
Personaje.belongsTo(Peli_Serie);
Peli_Serie.hasMany(Personaje);

module.exports = Personaje;
