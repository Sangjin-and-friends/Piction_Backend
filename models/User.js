const { DataTypes, sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "User",
      timestamps: false,
    }
  );
  return User;
};
