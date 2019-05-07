/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Tasks', [{
    description: 'Fix generator',
    type: 'job execution',
    priority: '1',
    status: 'not started',
    location: 'Filmorealty',
    technicianId: 1,
  }, {
    description: 'Fix light bulb',
    type: 'job execution',
    priority: '1',
    status: 'not started',
    location: 'Filmorealty',
    technicianId: 1,
  }, {
    description: 'Check furnitures',
    type: 'inspection',
    priority: '1',
    status: 'not started',
    location: 'Filmorealty',
    technicianId: 1,
  }], {}),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
