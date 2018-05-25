'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('upload_exams', {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
        },
        file_upload:{
        type: Sequelize.TEXT
        },
        topicID:
        {
        type: Sequelize.INTEGER
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE
        },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        }
    });
    },
    down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('upload_exams');
    }
};
