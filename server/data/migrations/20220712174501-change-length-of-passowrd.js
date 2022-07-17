"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("teachers", "password", {
      type: Sequelize.STRING(200),
      allowNull: false,
    });
    //  await queryInterface.changeColumn("students", "password", {
    //    type: Sequelize.STRING(200),
    //    allowNull: false,
    //  });
    //   await queryInterface.changeColumn("admins", "password", {
    //     type: Sequelize.STRING(200),
    //     allowNull: false,
    //   });
  },
};
