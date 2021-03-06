/** 
Author: Sairaghav Venkataraman
Description:
Initialise Sequelize and defines objects for areas, members and products
*/

const dbConfig = require("../config/config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  native: dbConfig.ssl,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.areas = require("./areas.js")(sequelize, Sequelize);
db.members = require("./members.js")(sequelize, Sequelize);
db.products = require("./products.js")(sequelize, Sequelize);

module.exports = db;