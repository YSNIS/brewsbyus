"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerFamily = sequelize.define(
    "BeerFamily",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  BeerFamily.associate = function(models) {
    // associations can be defined here
  };
  return BeerFamily;
};
