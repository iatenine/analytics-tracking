const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Impression extends Model {}

Impression.init(
  {
    impressionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    target_url: {
      type: DataTypes.STRING,
    },
    source_url: {
      type: DataTypes.STRING,
    },
    isClick: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = Impression;
