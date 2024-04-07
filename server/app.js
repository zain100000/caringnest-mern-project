const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const contactFormRoute = require("./route/contact-form-route");
const scheduleFormRoute = require("./route/schedule-form-route");
const referralFormRoute = require("./route/referral-form-route");

const app = express();

app.use(bodyParser.json());

app.use(
  "/files/additionalDocs",
  express.static(path.join("files", "additionalDocs"))
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/api/contact", contactFormRoute);
app.use("/api/schedule", scheduleFormRoute);
app.use("/api/referral", referralFormRoute);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.nsv3bzq.mongodb.net/caringNest?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.MONGODB_PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
