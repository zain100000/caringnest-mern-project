const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const contactFormController = require("../controller/contact-form-controller");

router.post(
  "/createContactForm",
  [
    check("name").not().isEmpty(),
    check("email").not().isEmpty(),
    check("mobile").isLength({ min: 11 }),
    check("message").not().isEmpty(),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    contactFormController.createContactForm(req, res, next);
  }
);

router.get("/getContactForm", contactFormController.getContactForm);

router.get("/getContactForm/:id", contactFormController.getContactFormById);

router.delete("/removeContactForm/:id", contactFormController.deleteContactForm);

module.exports = router;
