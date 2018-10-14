'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Style', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      familyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Family',
          key: 'id'
        },
      },
      colorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Color',
          key: 'id'
        },
      },
      textureId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Texture',
          key: 'id'
        },
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
    return queryInterface.dropTable('Style');
  }
};