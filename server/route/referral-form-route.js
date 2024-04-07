const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const referralFormController = require("../controller/referral-form-controller");
const cloudinaryUpload = require("../middleware/file-upload");

// Route to create a new Referral Form
router.post(
  "/",
  cloudinaryUpload.upload,

  [
    check("makingFirstName").not().isEmpty(),
    check("makingLastName").not().isEmpty(),
    check("makingEmail").not().isEmpty(),
    check("makingMobile").isLength({ min: 11 }),
    check("initials").not().isEmpty(),
    check("terms").not().isEmpty(),
  ],
  referralFormController.createReferralForm
);

// Route to get a specific Referral Form by ID
router.get("/:id", referralFormController.getReferralFormById);

// Route to get Referral Form
router.get("/", referralFormController.getReferralForm);

// Route to get Referral Form docs
router.get("/:id/docs", referralFormController.getReferralFormDocs);

// Route to delete Referral Form
router.delete("/:id", referralFormController.deleteReferralForm);

module.exports = router;
