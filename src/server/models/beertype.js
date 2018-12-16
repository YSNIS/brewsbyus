module.exports = (sequelize, DataTypes) => {
  const BeerType = sequelize.define("BeerType", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subDescription: {
      type: DataTypes.STRING
    }
  });

  BeerType.associate = function(models) {
    // associations can be defined here
  };
  return BeerType;
};
