'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
	return queryInterface.createTable('Comments', {
	    id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	    },
	    data:{
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
	return queryInterface.dropTable('Comments');
    }
};
