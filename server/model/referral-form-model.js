const mongoose = require("mongoose");

const referralFormSchema = new mongoose.Schema({
  makingFirstName: { type: String },
  makingLastName: { type: String },
  makingEmail: { type: String },
  makingMobile: { type: String },
  relation: { type: String },
  waiver: { type: String },
  age: { type: String },
  accessbility: { type: String },
  services: { type: String },
  customServices: { type: String },
  referredPersonFirstName: { type: String },
  referredPersonLastName: { type: String },
  referredPersonEmail: { type: String },
  referredPersonMobile: { type: String },
  needs: { type: String },
  behaviour: { type: String },
  physical: { type: String },
  facilities: { type: String },
  staffingSupport: { type: String },
  participating: { type: String },
  safety: { type: String },
  uniqueNeeds: { type: String },
  additionalDocs: { type: String },
  initials: { type: String },
  terms: { type: String },
});

const referral = mongoose.model("Referral", referralFormSchema);

module.exports = referral;
