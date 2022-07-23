"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("courses", "TeacherId", {
      type: Sequelize.INTEGER,
      references: { model: 'teachers', key: 'id' }
    }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("courses", "TeacherId");
  },
};
