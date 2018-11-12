"use strict";
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define(
    "Beer",
    {
      userId: DataTypes.INTEGER,
      beerTypeId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      beerAttributes: DataTypes.STRING
    },
    {}
  );
  Beer.associate = function(models) {
    // associations can be defined here
  };
  return Beer;
};
