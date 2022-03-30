const { Sequelize } = require("sequelize");

// Configuration
// host - creates the file, if used :memory, then its temporary
// new Sequelize(<db-name>,<db-username>,<db-password>);
const sequelize = new Sequelize("quarkproject", "username", "password", {
  host: "./database/db.sqlite",
  dialect: "sqlite",
});

module.exports = sequelize;
