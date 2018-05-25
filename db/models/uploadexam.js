'use strict';
module.exports = (sequelize, DataTypes) => {
  var upload_exam = sequelize.define('upload_exam', {
    file_upload: DataTypes.TEXT,
    topicID: DataTypes.INTEGER
  }, {});
  upload_exam.associate = function(models) {
    // associations can be defined here
  };
  return upload_exam;
};
