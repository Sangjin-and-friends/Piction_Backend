const { DataTypes, sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define("Diary", {
    diaryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      default: 1,
    },

    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    contents: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  return Diary;
};
