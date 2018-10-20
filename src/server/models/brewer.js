'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewer = sequelize.define('Brewer', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    specialty: DataTypes.STRING,
    maxBatchSize: DataTypes.FLOAT
  }, {});
  Brewer.associate = function(models) {
    // associations can be defined here
  };
  return Brewer;
};