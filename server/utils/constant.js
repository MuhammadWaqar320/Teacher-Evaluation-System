require("dotenv").config();
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.APP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
const KEYS = {
  SECRET_KEY: "2MOe0XHFW2ZLn!tK%E8uh7LmK",
};
const USER_TYPE = {
  STUDENT: 2,
  TEACHER: 1,
  ADMIN: 3,
};
const HTTP_STATUS = {
  CONTINUE: 100,
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
};
module.exports = {
  HTTP_STATUS,
  USER_TYPE,
  KEYS,
  transporter
};
