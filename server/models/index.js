const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('Product', 'siwar', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});





sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
   
  }) .catch((error) => {
    console.error('Unable to connect to the database:', error)
  });

const db= {}
  db.Product = require('./products')(sequelize, DataTypes)
  db.Category = require('./category')(sequelize, DataTypes)
  db.Admin = require('./admin')(sequelize, DataTypes)
  
  
  
  db.Admin.hasMany(db.Product, { foreignKey: { allowNull: false } });
  db.Product.belongsTo(db.Admin);
  
  db.Category.hasMany(db.Product, { foreignKey: { allowNull: false } });
  db.Product.belongsTo(db.Category);

  //  sequelize.sync({ force: true }) .then(() => {
  //   console.log('Models have been synchronized.')
  // })
  // .catch((error) => {
  //   console.error('Unable to connect to the database:', error)

  // });

module.exports = db
