/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Tasks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    description: {
      type: Sequelize.TEXT,
    },
    type: {
      type: Sequelize.STRING,
    },
    priority: {
      type: Sequelize.ENUM,
      values: ['1', '2', '3'],
    },
    status: {
      type: Sequelize.ENUM,
      values: ['not started', 'started', 'ongoing', 'finished'],
    },
    location: {
      type: Sequelize.STRING,
    },
    technicianId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'technicianId',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Tasks'),
};
