const contactusService = new (require("../services/contactusService"))();
const { constructResponse } = require("../utils/allFunctions");
const createContactus = async (req, res) => {
  const responseData = await contactusService.addContactInfo(req.body);
  return constructResponse(res, responseData);
};
module.exports = {
  createContactus,
};
