const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const scheduleFormController = require("../controller/schedule-form-controller");

router.post(
  "/",
  [
    check("date"),
    check("time"),
    check("fullname"),
    check("email").not().isEmpty(),
    check("mobile"),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    scheduleFormController.createScheduleForm(req, res, next);
  }
);

router.get("/", scheduleFormController.getScheduleForm);

router.get("/:id", scheduleFormController.getScheduleFormById);

router.delete("/:id", scheduleFormController.deleteScheduleForm);

module.exports = router;
