'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Ratings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      no_of_star: {
        type: Sequelize.FLOAT,
      },
      feedback: {
        type: Sequelize.TEXT,
      },
      TeacherId: {
        type: Sequelize.INTEGER,
        references: { model: "teachers", key: "id" },
      },
      StudentId: {
        type: Sequelize.INTEGER,
        references:{model:"students",key:"id"}
      },
      type_of_feedback: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Ratings');
  }
};