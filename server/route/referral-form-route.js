const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const referralFormController = require("../controller/referral-form-controller");
const fileUploadMiddleware = require("../middleware/file-upload");

router.post(
  "/",
  fileUploadMiddleware.additionalDocsUpload,
  [
    check("makingFirstName").not().isEmpty(),
    check("makingLastName").not().isEmpty(),
    check("makingEmail").not().isEmpty(),
    check("makingMobile").isLength({ min: 11 }),
    check("initials").not().isEmpty(),
    check("terms").not().isEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    referralFormController.createReferralForm(req, res, next);
  }
);

router.get("/:id", referralFormController.getReferralFormById);

router.get("/", referralFormController.getRefferalForm);

router.get("/:id/sample", referralFormController.getReferralFormAdditionalDocs);

router.delete("/:id", referralFormController.deleteReferralForm);

module.exports = router;
