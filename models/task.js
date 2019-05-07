module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING,
    location: DataTypes.STRING,
  }, {});
  Task.associate = (models) => {
    // associations can be defined here
    Task.belongsTo(models.User, {
      foreignKey: 'technicianId',
      onDelete: 'CASCADE',
    });
  };
  return Task;
};
