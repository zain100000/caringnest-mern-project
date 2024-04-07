const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const contactFormController = require("../controller/contact-form-controller");

router.post(
  "/",
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

router.get("/", contactFormController.getContactForm);

router.get("/:id", contactFormController.getContactFormById);

router.delete("/:id", contactFormController.deleteContactForm);

module.exports = router;
