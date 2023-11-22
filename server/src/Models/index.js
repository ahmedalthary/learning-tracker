const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const Config = require("../Config/Config");

const db = {};

const sequelize = new Sequelize(
  Config.db.database,
  Config.db.user,
  Config.db.password,
  Config.db.options
);

fs.readdirSync(__dirname)
  .filter((file) => file !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
