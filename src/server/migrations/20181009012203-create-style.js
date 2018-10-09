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
      FamilyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Family',
          key: 'id'
        },
      },
      ColorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Color',
          key: 'id'
        },
      },
      TextureId: {
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