"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // many course can belong to one teacher
      Course.belongsTo(models.Teacher, { foreignKey: "teacher_id" });
    }
  }
  Course.init(
    {
      course_code: DataTypes.STRING,
      course_name: DataTypes.STRING,
      credit_hours: DataTypes.INTEGER,
      courseForWhichSemester: DataTypes.STRING,
      teacher_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Teacher",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
