'use strict';
module.exports = (sequelize, DataTypes) => {
  const Style = sequelize.define('Style', {
    familyId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    textureId: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  Style.associate = function(models) {
    // associations can be defined here
  };
  return Style;
};