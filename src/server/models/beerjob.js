"use strict";
module.exports = (sequelize, DataTypes) => {
  const BeerJob = sequelize.define(
    "BeerJob",
    {
      beerId: DataTypes.INTEGER,
      brewerId: DataTypes.INTEGER,
      jobCap: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      statusId: DataTypes.INTEGER,
      canningDate: DataTypes.DATE,
      estimatedShippingDate: DataTypes.DATE,
      dateShipped: DataTypes.DATE
    },
    {}
  );
  BeerJob.associate = function(models) {
    // associations can be defined here
    BeerJob.hasOne(models.Beer, {
      foreignKey: "beerId",
      as: "beer",
      onDelete: "CASCADE"
    });
  };
  return BeerJob;
};
