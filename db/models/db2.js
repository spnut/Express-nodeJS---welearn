'use strict';
// database exam
module.exports = (sequelize, DataTypes) => {
  var DB_exam = sequelize.define('DB_exam', {
    title: DataTypes.TEXT,
    detail: DataTypes.TEXT,
    fileUpload: DataTypes.TEXT
  }, {});
  DB_exam.associate = function(models) {
    // associations can be defined here
  };
  return DB_exam;
};