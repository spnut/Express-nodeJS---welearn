'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment_exam = sequelize.define('Comment_exam', {
    data: DataTypes.TEXT,
    topicID: DataTypes.INTEGER
  }, {});
  Comment_exam.associate = function(models) {
    // associations can be defined here
  };
  return Comment_exam;
};
