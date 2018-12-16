module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define("Beer", {
    userId: {
      type: DataTypes.INTEGER
    },
    beerTypeId: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    beerAttributes: {
      type: DataTypes.STRING
    }
  });

  Beer.associate = function(models) {
    // associations can be defined here
    Beer.hasOne(models.BeerType, {
      foreignKey: "beerTypeId",
      as: "beerType",
      onDelete: "CASCADE"
    });
  };

  return Beer;
};
