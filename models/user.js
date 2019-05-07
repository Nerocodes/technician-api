module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    type: DataTypes.ENUM('client', 'technician', 'admin'),
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Task, {
      foreignKey: 'technicianId',
      as: 'technician',
    });
  };
  return User;
};
