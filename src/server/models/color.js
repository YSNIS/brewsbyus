'use strict';
module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define('Color', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  Color.associate = function(models) {
    // associations can be defined here
  };
  return Color;
};