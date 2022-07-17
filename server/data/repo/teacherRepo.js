const { Teacher } = require("../models");
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
  updateTeacherFromDb(newData, id) {
    return Teacher.update(newData, { where: { id: id } });
  }
  getTeacherByEmail(email) {
    return Teacher.findOne({ where: {email: email } });
  }
};
