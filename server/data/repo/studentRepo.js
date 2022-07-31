const { Student } = require("../models");
const { Rating } = require("../models");
const { Teacher } = require("../models");

module.exports = class studentRepo {
  addStudentInToDb(newAdminData) {
    return Student.create(newAdminData);
  }
  getAllStudentFromDb() {
    return Student.findAll();
  }
  deleteStudentFromDb(id) {
    return Student.destroy({
      where: {
        id: id,
      },
    });
  }
  getStudentRatingInformationFromDb(id) {
    return Rating.findAll({
      where: { StudentId: id },
      include: [Student, Teacher],
    });
  }
  getStudentInfoByIdFromDb(id) {
    return Student.findOne({
      where: {
        id: id,
      },
    });
  }
  getStudentByEmail(email) {
    return Student.findOne({ where: { email: email } });
  }
  addRatingInToDb(data) {
    return Rating.create(data);
  }
  updateStudentFromDb(newData, id) {
    return Student.update(newData, { where: { id: id } });
  }
  updateStudentFromDbByEmail(newData, email) {
    return Student.update(newData, { where: { email: email } });
  }
};
