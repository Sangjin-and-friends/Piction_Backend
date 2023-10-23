const Sequelize = require("sequelize");
const config = require("../config/config.json");
const db = {};

const dbConfig = config["development"];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
  }
);

const User = require("./User")(sequelize, Sequelize);
const Diary = require("./Diary")(sequelize, Sequelize);

Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

db.User = User;
db.Diary = Diary;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
