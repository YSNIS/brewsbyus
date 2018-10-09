'use strict';
module.exports = (sequelize, DataTypes) => {
  const Style = sequelize.define('Style', {
    FamilyId: DataTypes.INTEGER,
    ColorId: DataTypes.INTEGER,
    TextureId: DataTypes.INTEGER
  }, {});
  Style.associate = function(models) {
    // associations can be defined here
  };
  return Style;
};