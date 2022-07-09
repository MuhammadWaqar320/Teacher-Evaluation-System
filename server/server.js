require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { router } = require("./routes/appRoutes");

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT} at ${new Date()}`);
});
