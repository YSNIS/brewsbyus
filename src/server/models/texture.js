'use strict';
module.exports = (sequelize, DataTypes) => {
  const Texture = sequelize.define('Texture', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Texture.associate = function(models) {
    // associations can be defined here
  };
  return Texture;
};