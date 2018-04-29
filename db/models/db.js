'use strict';
module.exports = (sequelize, DataTypes) => {
  var DB = sequelize.define('DB', {
    title: DataTypes.TEXT,
    detail: DataTypes.TEXT
  }, {});
  DB.associate = function(models) {
    // associations can be defined here
  };
  return DB;
};