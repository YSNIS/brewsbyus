"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("StatusUpdateEntries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beerJobId: {
        type: Sequelize.INTEGER,
        references: {
          model: "BeerJobs",
          key: "id",
          as: "beerJobId"
        }
      },
      statusId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Statuses",
          key: "id",
          as: "statusId"
        }
      },
      entryDate: {
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
    return queryInterface.dropTable("StatusUpdateEntries");
  }
};
