"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BeerJobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Beers",
          key: "id",
          as: "beerId",
          onDelete: "CASCADE"
        }
      },
      brewerId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Brewers",
          key: "id",
          as: "brewerId",
          onDelete: "CASCADE"
        }
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
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("BeerJobs");
  }
};
