const Sequelize = require("sequelize");
require("dotenv").config();

//"AlkemyNode", "root", "root"
const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "mysql",
    operatorsAliases: false,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 3000,
      adle: 10000,
    },
  }
);

module.exports = db;
