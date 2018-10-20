'use strict';
module.exports = (sequelize, DataTypes) => {
  const StatusUpdateEntry = sequelize.define('StatusUpdateEntry', {
    beerJobId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    entryDate: DataTypes.DATE
  }, {});
  StatusUpdateEntry.associate = function(models) {
    // associations can be defined here
  };
  return StatusUpdateEntry;
};