const { Model, DataTypes } = require("sequelize");

// getting sqlite connection 'Object'
// configuration
const sequelize = require("../db");

// Creating DB table using Entity
// Table name will be Users- done automatically when using sequelize
// User is the record requested or inserted (DAO)
class User extends Model {}

// getting all table fields ready
User.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    token_id: {
      type: DataTypes.STRING,
      unique: true,
    },
    image_url: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
  },
  { sequelize, modelName: "User" }
);

module.exports = User;
