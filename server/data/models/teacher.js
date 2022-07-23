"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // teacher can teach many subjects
      Teacher.hasMany(models.Course);
      Teacher.belongsToMany(models.Student, {
        through: "StudentTeacher",
        foreignKey: "TeacherId",
      });
       Teacher.belongsToMany(models.Student, {
         through: models.Rating,
         foreignKey: "TeacherId",
       });
    }
  }
  Teacher.init(
    {
      name: DataTypes.STRING,
      father_name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone_No: DataTypes.STRING,
      specialization: DataTypes.STRING,
      education: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Teacher",
    }
  );
  return Teacher;
};
