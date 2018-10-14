'use strict';
module.exports = (sequelize, DataTypes) => {
  const Family = sequelize.define('Family', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  Family.associate = function(models) {
    // associations can be defined here
  };
  return Family;
};