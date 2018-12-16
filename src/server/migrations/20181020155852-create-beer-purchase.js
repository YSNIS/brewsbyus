"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BeerPurchases", {
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
          as: "beerJobId",
          onDelete: "CASCADE"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
          onDelete: "CASCADE"
        }
      },
      price: {
        type: Sequelize.FLOAT
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      chargeDate: {
        type: Sequelize.DATE
      },
      commitDate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable("BeerPurchases");
  }
};
