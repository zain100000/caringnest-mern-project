const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  mobile: { type: String },
  message: { type: String },
});

const contact = mongoose.model("Contact", contactFormSchema);

module.exports = contact;
