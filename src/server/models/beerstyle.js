"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerStyle = sequelize.define(
    "BeerStyle",
    {
      name: DataTypes.STRING,
      descriptions: DataTypes.STRING
    },
    {}
  );
  BeerStyle.associate = function(models) {
    // associations can be defined here
  };
  return BeerStyle;
};
