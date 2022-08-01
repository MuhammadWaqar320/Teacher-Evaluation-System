"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins", [
      {
        name: "Abdullah",
        email: "abdullahchohan265@gmail.com",
        password:
          "$2a$10$SWhSEOx5QKf5eS1cZrgWmeMc2va4ZmtKZTMvXfdETovOr8lF818Zq" /*password:1234567 */,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", [
      {
        name: "Abdullah",
        email: "abdullahchohan265@gmail.com",
        password:
          "$2a$10$SWhSEOx5QKf5eS1cZrgWmeMc2va4ZmtKZTMvXfdETovOr8lF818Zq" /*password:1234567 */,
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
  },
};
