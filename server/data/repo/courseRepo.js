const { Course } = require("../models");
const { Teacher } = require("../models");
module.exports = class CourseRepo {
  addCourseInToDb(newAdminData) {
    return Course.create(newAdminData);
  }
  getAllCourseFromDb() {
    return Course.findAll({include:[Teacher]});
  }
  deleteCourseFromDb(id) {
    return Course.destroy({
      where: {
        id: id,
      },
    });
  }
  getCourseInfoByIdFromDb(id) {
    return Course.findOne({
      where: {
        id: id,
      },
      include:[Teacher]
    });
  }
  updateCourseFromDb(newData, id) {
    return Course.update(newData, { where: { id: id } });
  }
};
