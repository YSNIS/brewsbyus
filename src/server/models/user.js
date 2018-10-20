"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipcode: DataTypes.STRING,
      type: DataTypes.STRING,
      age: DataTypes.DATE
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
