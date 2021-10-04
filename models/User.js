const Sequelize = require("sequelize");

const db = require("../config/db");

const User = db.define("User", {
  id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isAlpha: {
        msg: "El nombre debe contener solo letras",
      },
      len: {
        args: [3, 50],
        msg: "El nombre debe ser minimamente de tres letras",
      },
    },
  },
  email: {
    type: Sequelize.STRING(60),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Debes ingresar un email valido",
      },
    },
  },
  password: {
    type: Sequelize.STRING(60),
    allowNull: false,
  },
});

module.exports = User;
