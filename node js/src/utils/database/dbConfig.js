const { Sequelize } = require("sequelize");
const envVariable = require("../../config/index");

const sequelize = new Sequelize({
  database: "blog_app",
  dialect: "mysql",
  username: "root",
  password: "Pyromanial1234##",
  storage: ":memory:",
  models: [__dirname + "../models/Blog"],
});

module.exports = sequelize;
