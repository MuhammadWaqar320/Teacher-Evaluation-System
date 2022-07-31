'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins", [{
      name: "asim",
      email: "waqar@gmail.com",
      password: "12345",
      createdAt: new Date(),
      updatedAt:new Date()
    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete("admins", [
       {
         name: "asim",
         email: "waqar@gmail.com",
         password: "12345",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
     ]);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
