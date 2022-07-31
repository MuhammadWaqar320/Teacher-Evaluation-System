const { Teacher } = require("../models");
const {Rating}=require("../models");
const { Student } = require("../models");
const {Course } = require("../models");

module.exports = class TeacherRepo {
  addTeacherInToDb(newAdminData) {
    return Teacher.create(newAdminData);
  }
  getAllTeacherFromDb() {
    return Teacher.findAll();
  }
  deleteTeacherFromDb(id) {
    return Teacher.destroy({
      where: {
        id: id,
      },
    });
  }
  getTeacherInfoByIdFromDb(id) {
    return Teacher.findOne({
      where: {
        id: id,
      },
    });
  }
  getTeacherRatingInfoByIdFromDb(id) {
    return Rating.findAll({
      where: {
        TeacherId: id,
      },
      include: [Student],
    });
  }
  getAllTeacherBySemesterFromDb(semester) {
    return Course.findAll({
      where: {
        courseForWhichSemester: semester,
      },
      include: [Teacher],
    });
  }
  updateTeacherFromDb(newData, id) {
    return Teacher.update(newData, { where: { id: id } });
  }
  updateTeacherFromDbByEmail(newData, email) {
    return Teacher.update(newData, { where: { email: email } });
  }
  getTeacherByEmail(email) {
    return Teacher.findOne({ where: { email: email } });
  }
  getTeacherInfoById(id) {
    return Teacher.findOne({ where: { id: id } });
  }
};
