"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerPurchase = sequelize.define(
    "BeerPurchase",
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
  BeerPurchase.associate = function(models) {
    // associations can be defined here
  };
  return BeerPurchase;
};
