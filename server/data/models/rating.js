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
          Rating.belongsTo(models.Teacher, { foreignKey: "TeacherId" });
          Rating.belongsTo(models.Student, { foreignKey: "StudentId" });

    }
  }
  Rating.init(
    {
      no_of_star: DataTypes.FLOAT,
      feedback: DataTypes.TEXT,
      type_of_feedback:DataTypes.TEXT,
      TeacherId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Teacher",
          key: "id",
        },
      },
      StudentId: {
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