/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    password: '$2y$12$fvKl902OjXxDNRIIDJO2N.f2PPwUEY2/iS7RJacFZJMvYivDbL8vO',
    type: 'technician',
  }, {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@gmail.com',
    password: '$2y$12$fvKl902OjXxDNRIIDJO2N.f2PPwUEY2/iS7RJacFZJMvYivDbL8vO',
    type: 'client',
  }, {
    firstName: 'Admin',
    lastName: 'Doe',
    email: 'admindoe@gmail.com',
    password: '$2y$12$fvKl902OjXxDNRIIDJO2N.f2PPwUEY2/iS7RJacFZJMvYivDbL8vO',
    type: 'admin',
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
