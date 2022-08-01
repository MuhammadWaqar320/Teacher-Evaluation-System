'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert("contactus", [
        {
          name: "Dr.Atif",
          email: "atif@gmail.com",
          phone_no: "03652345239",
          subject: "complain",
          message: "your system is not working properly",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dr.Asim",
          email: "asim@gmail.com",
          phone_no: "03552345239",
          subject: "complain",
          message: "your system is not working properly please resolve this issue",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dr.Aslam",
          email: "aslam@gmail.com",
          phone_no: "03652545239",
          subject: "complain",
          message: "your system is not working properly",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
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

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
