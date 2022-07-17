"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("courses", "teacher_Id", {
      type: Sequelize.INTEGER,
      references: { model: 'teachers', key: 'id' }
    }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("courses", "teacher_Id");
  },
};
