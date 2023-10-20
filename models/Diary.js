const { DataTypes, sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define(
    "Diary",
    {
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      contents: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      imageURL: {
        type: DataTypes.STRING(2000),
        allowNull: false,
      },

      date: {
        type: DataTypes.DATE,
        primaryKey: true,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      emotions: {
        type: DataTypes.JSON,
      },
    },
    {
      tableName: "Diary",
      timestamps: false,
    }
  );
  return Diary;
};
