const config = require("../../src/conex.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: 0,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);
db.event = require("../models/event.js")(sequelize, Sequelize);
db.show = require("../models/show.js")(sequelize, Sequelize);

db.user.belongsTo(db.role, {
  foreignKey: { 
    name: "role_id",
    allowNull: false
  }
});

db.show.belongsTo(db.event, {
  foreignKey: {
    name: "event_id",
    allowNull: false
  }
})

db.ROLES = ["user", "admin"];

module.exports = db;