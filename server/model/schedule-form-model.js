const mongoose = require("mongoose");

const scheduleFormSchema = new mongoose.Schema({
  date: { type: Date },
  time: { type: Date },
  fullname: { type: String },
  email: { type: String },
  mobile: { type: String },
});

const schedule = mongoose.model("Schedule", scheduleFormSchema);

module.exports = schedule;
