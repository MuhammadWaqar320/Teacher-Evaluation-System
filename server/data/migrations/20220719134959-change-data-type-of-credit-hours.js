"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("courses", "credit_hours", {
      type: Sequelize.FLOAT,
      allowNull: false,
    });
  },
};
