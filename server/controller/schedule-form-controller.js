const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const HttpError = require("../model/http-error");
const Schedule = require("../model/schedule-form-model");

exports.createScheduleForm = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Invalid inputs passed!", 422));
  }
  try {
    const { date, time, fullname, email, mobile } = req.body;

    const schedule = new Schedule({
      date,
      time,
      fullname,
      email,
      mobile,
    });

    await schedule.save();
    res.status(201).json({ message: "Schedule Form Submitted Successfully!" });
  } catch {
    const error = new HttpError("Failed To Create Schedule Form!", 500);
    return next(error);
  }
};

exports.getScheduleFormById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findById(id);

    if (!schedule) {
      return res
        .status(404)
        .json({ message: "Schedule Form not found for Provided Id" });
    }

    res.status(200).json({ Schedule: schedule });
  } catch {
    const error = new HttpError(
      "Schedule Form Not Found By Provided Id!.",
      500
    );
    return next(error);
  }
};

exports.getScheduleForm = async (req, res, next) => {
  try {
    const schedule = await Schedule.find();

    if (!schedule) {
      return res.status(404).json({ message: "No Schedule Form Yet!" });
    }

    res.status(200).json({ Schedule: schedule });
  } catch {
    const error = new HttpError("Failed To Get Schedule Form!");
    return next(error);
  }
};

exports.deleteScheduleForm = async (req, res, next) => {
  const Id = req.params.id;

  if (!Id) {
    return res.status(400).json({ message: "Invalid Schedule Form ID" });
  }

  let schedule;
  try {
    schedule = await Schedule.findById(Id).populate("email");
  } catch (err) {
    const error = new HttpError("Failed To Delete Schedule Form!.", 500);
    return next(error);
  }

  if (!schedule) {
    return res.status(404).json({ message: "Schedule Form not found." });
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    await Schedule.deleteOne({ _id: Id }, { session });

    await session.commitTransaction();

    res.status(200).json({ message: "Schedule Form Deleted Successfully." });
  } catch (err) {
    await session.abortTransaction();

    console.error("Error deleting Schedule Form:", err);

    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    session.endSession();
  }
};
