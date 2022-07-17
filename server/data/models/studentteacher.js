'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentTeacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentTeacher.init(
    {
      teacher_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Teacher",
          key: "id",
        },
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Student",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "StudentTeacher",
    }
  );
  return StudentTeacher;
};