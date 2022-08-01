'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
     await queryInterface.bulkInsert("teachers", [
       {
         name: "Dr.Atif",
         father_name: "Mobeen Ali",
         email: "atif@gmail.com",
         phone_no: "03652345239",
         specialization: "Databases",
         education: "Phd",
         createdAt: new Date(),
         updatedAt: new Date(),
         password:
           "$2a$10$LWC7CwB8C3ZF4NLjL81iJuK6/ir348Q2gDhkV8jENIb3y0J6gXLy2" /*password:1234567 */,
       },
       {
         name: "Mr.yasir",
         father_name: "Asif",
         email: "yasir@gmail.com",
         phone_no: "03652345233",
         specialization: "DLD",
         education: "MS",
         createdAt: new Date(),
         updatedAt: new Date(),
         password:
           "$2a$10$0C3hspjPNZcyTBXYn2ukrOYwsrynkGM0eMLgmcvuVzg2EmFION02." /*password:1234567 */,
       },
       {
         name: "Dr.Aslam",
         father_name: "ahmad",
         email: "aslam@gmail.com",
         phone_no: "03552345233",
         specialization: "Networking",
         education: "Phd",
         createdAt: new Date(),
         updatedAt: new Date(),
         password:
           "$2a$10$kyFaiMljfJElYUFcNThRhuWGbhue18YY7EUCBNPkhVmQ/PwryFSFq" /*password:1234567 */,
       },
       {
         name: "Ayesha",
         father_name: "Ahmed khan",
         email: "ayesha@gmail.com",
         phone_no: "03552345203",
         specialization: "AI",
         education: "MS",
         createdAt: new Date(),
         updatedAt: new Date(),
         password:
           "$2a$10$URpl9z3FhP1m/HtVLNC/J.2VqsOtKr2ng6cXd0wRZp7Bm5220MQwG" /*password:1234567 */,
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
