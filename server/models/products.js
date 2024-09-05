
const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },


    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    options: {
      type: Sequelize.ENUM(
        "promotion",
        "verified",
        "deliveryCost",
        "Available",
        "no option"
      ),
    },
  })

  return Product;
};
