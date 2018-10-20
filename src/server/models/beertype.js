"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerType = sequelize.define(
    "BeerType",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      subDescription: DataTypes.STRING
    },
    {}
  );
  BeerType.associate = function(models) {
    // associations can be defined here
  };
  return BeerType;
};
