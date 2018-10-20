"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerTypeAttribute = sequelize.define(
    "BeerTypeAttribute",
    {
      beerTypeId: DataTypes.INTEGER,
      attributeId: DataTypes.INTEGER
    },
    {}
  );
  BeerTypeAttribute.associate = function(models) {
    // associations can be defined here
  };
  return BeerTypeAttribute;
};
