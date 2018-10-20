"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerPurchaseEntry = sequelize.define(
    "BeerPurchaseEntry",
    {
      beerJobId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      quantity: DataTypes.INTEGER,
      chargeDate: DataTypes.DATE,
      commitDate: DataTypes.DATE,
      entryDate: DataTypes.DATE
    },
    {}
  );
  BeerPurchaseEntry.associate = function(models) {
    // associations can be defined here
  };
  return BeerPurchaseEntry;
};
