"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
   
      await queryInterface.changeColumn("admins", "password", {
        type: Sequelize.STRING(200),
        allowNull: false,
      });
  },
};
