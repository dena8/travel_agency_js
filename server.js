require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const customError = require("./error/custom_error");
const invalidCredentials = require("./error/invalid_user_or_password");
var path = require('path')

const db = require("./config/sequelize");
//db.sync({ force: true });
db.sync();

require("./config/express")(app);
require("./config/routes")(app);
require("./config/cloudinary");
require('./scheduling/shcedule')
require('./scheduling/clearLogs')


app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});


app.use(function (err, req, res, next) {
  console.error(err.stack);

  if (err instanceof customError || err instanceof invalidCredentials) { 
    console.log("FROM GLOBAL");
    res.status(err.status).send({ message: err.message });
    return;
  }

  res.status(500).send({ message: "Something went wrong. Please try again." });
});

app.listen(port, (err) => {
  if (err) {
    throw new Error("Error starting application");
  }
  console.log(`Travel agency app listening at http://localhost:${port}`);
});
