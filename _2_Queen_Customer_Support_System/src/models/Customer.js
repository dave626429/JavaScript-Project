const { Model, DataTypes } = require("sequelize");

// getting sqlite connection 'Object'
// configuration
const sequelize = require("../database/connection");

// Creating DB table using Entity
// Table name will be Customers- done automatically when using sequelize
// Customer is the record requested or inserted (DAO)
class Customer extends Model {}

// getting all table fields ready
Customer.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.NUMBER,
      unique: true,
      allowNull: true,
    },
    adhaarnumber: {
      type: DataTypes.NUMBER,
      unique: true,
      allowNull: true,
    },
  },
  { sequelize, modelName: "Customer" }
);

module.exports = Customer;
