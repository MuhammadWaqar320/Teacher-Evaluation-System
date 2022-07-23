const {Rating}=require("../models");
const {Teacher}=require("../models")
const { Student } = require("../models");

module.exports = class RatingRepo {
  getRatingDetailFromDb() {
    return Rating.findAll({ include: [Student, Teacher] });
  }
  deleteRatingFromDb(id){
    return Rating.destroy({where:{TeacherId:id}});
  };
};