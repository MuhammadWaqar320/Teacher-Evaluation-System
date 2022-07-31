"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Student.belongsToMany(models.Teacher, {
        through: "StudentTeacher",
        foreignKey: "student_id",
      });
      Student.belongsToMany(models.Teacher, {
        through: models.Rating,
        foreignKey: "StudentId",
      });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      father_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_No: DataTypes.STRING,
      department: DataTypes.STRING,
      semester: DataTypes.STRING,
      password: DataTypes.STRING,
      cnic:DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Student",
    }
  );
  return Student;
};
