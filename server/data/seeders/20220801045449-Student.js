'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("students", [
      {
        name: "Sohail",
        father_name: "Akbar",
        email: "m.waqar.c320@gmail.com",
        phone_No: "03445375430",
        department: "computer science",
        semester: "V",
        createdAt: new Date(),
        updatedAt: new Date(),
        password:
          "$2a$10$a8Mik7N0J04X6hX.elst9ubQetaDECrgRYiNOp3DH6X1250YZybV2" /* password : B0OoRSDwZ6 */,
        cnic: "8240132173681",
      },
      {
        name: "Asif",
        father_name: "Junaid",
        email: "junaid@gmail.com",
        phone_No: "03445375430",
        department: "computer science",
        semester: "V",
        createdAt: new Date(),
        updatedAt: new Date(),
        password:
          "$2a$10$a8Mik7N0J04X6hX.elst9ubQetaDECrgRYiNOp3DH6X1250YZybV2" /* password : B0OoRSDwZ6 */,
        cnic: "8240132173681",
      },
      {
        name: "Khizar",
        father_name: "asim",
        email: "khizar@gmail.com",
        phone_No: "03445375450",
        department: "computer science",
        semester: "VI",
        createdAt: new Date(),
        updatedAt: new Date(),
        password:
          "$2a$10$tzaEFnHiyGgw8qy3xSZKuueoTMdvkYti.foRTabFOfiVsYNHhtbhK" /* password : YamYrz6kVj */,
        cnic: "8240132175451",
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
