'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("StudentTeachers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: { model: "teachers", key: "id" },
      },
      student_id: {
        type: Sequelize.INTEGER,
        references: { model: "students", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('StudentTeachers');
  }
};