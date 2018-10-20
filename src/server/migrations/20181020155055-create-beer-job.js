'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BeerJobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beerId: {
        type: Sequelize.INTEGER
      },
      brewerId: {
        type: Sequelize.INTEGER
      },
      jobCap: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.FLOAT
      },
      statusId: {
        type: Sequelize.INTEGER
      },
      canningDate: {
        type: Sequelize.DATE
      },
      estimatedShippingDate: {
        type: Sequelize.DATE
      },
      dateShipped: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('BeerJobs');
  }
};