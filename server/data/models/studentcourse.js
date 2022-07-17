'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StudentCourse.init(
    {
      course_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Course",
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
      modelName: "StudentCourse",
    }
  );
  return StudentCourse;
};