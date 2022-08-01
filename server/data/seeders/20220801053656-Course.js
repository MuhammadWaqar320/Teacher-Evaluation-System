'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("courses", [
      {
        course_code: "cs-101",
        course_name: "Networking",
        credit_hours: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "V",
        TeacherId: 49,
      },
      {
        course_code: "cs-102",
        course_name: "DLD",
        credit_hours: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "V",
        TeacherId: 50,
      },
      {
        course_code: "cs-103",
        course_name: "Data Structure",
        credit_hours: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "V",
        TeacherId: 51,
      },
      {
        course_code: "cs-104",
        course_name: "OOP",
        credit_hours: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "VI",
        TeacherId: 51,
      },
      {
        course_code: "cs-105",
        course_name: "PF",
        credit_hours: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "VI",
        TeacherId: 50,
      },
      {
        course_code: "cs-106",
        course_name: "LA",
        credit_hours: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "VI",
        TeacherId: 49,
      },
      {
        course_code: "cs-107",
        course_name: "Math",
        credit_hours: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "IV",
        TeacherId:51,
      },
      {
        course_code: "cs-108",
        course_name: "English",
        credit_hours: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "IV",
        TeacherId: 52,
      },
      {
        course_code: "cs-109",
        course_name: "Pak Studies",
        credit_hours: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
        courseForWhichSemester: "IV",
        TeacherId: 52,
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
