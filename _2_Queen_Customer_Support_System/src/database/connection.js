const { Sequelize } = require("sequelize");

// Configuration
// host - creates the file, if used :memory, then its temporary
// new Sequelize(<db-name>,<db-username>,<db-password>);
const sequelize = new Sequelize("queenbeautysalon", "username", "password", {
  host: "./src/database/db.sqlite",
  dialect: "sqlite",
});

module.exports = sequelize;
