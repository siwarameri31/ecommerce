module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
      "Admin",
      {
          name: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          password: {
              type: DataTypes.STRING,
              allowNull: false, 
          },
          email: {
              type: DataTypes.STRING,
              allowNull: false,  
              unique: true,      
              validate: {
                  isEmail: true,
              }
          }
      },
    
  );

  return Admin
};
