"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("BeerTypeAttributes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beerTypeId: {
        type: Sequelize.INTEGER
      },
      attributeId: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable("BeerTypeAttributes");
  }
};
