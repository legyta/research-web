const Sequelize = require("sequelize");

const { host, user, password, name, dialect } = require("../configs/configs");

const connector = new Sequelize(name, user, password, {
  host,
  dialect,
});

connector
  .authenticate()
  .then(() => console.log(`Connection to database is successful`))
  .catch((err) =>
    console.error(`Connection to database was unsuccessful: ${err}`)
  );

const db = {};

db.Sequelize = Sequelize;
db.connector = connector;
db.user = require("./user.model")(Sequelize, connector);
db.response = require("./response.model")(Sequelize, connector);
db.article = require("./article.model")(Sequelize, connector);

//Setting up database relationship
db.user.hasMany(db.response, { foreignKey: "userId" });

module.exports = db;
