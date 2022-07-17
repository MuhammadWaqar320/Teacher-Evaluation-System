'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating.init(
    {
      no_of_star: DataTypes.FLOAT,
      feedback: DataTypes.TEXT,
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
      modelName: "Rating",
    }
  );
  return Rating;
};