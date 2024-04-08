const HttpError = require("../model/http-error");
const { validationResult } = require("express-validator");
const Referral = require("../model/referral-form-model");
const fileUpload = require("../middleware/file-upload");
const { v2: cloudinary } = require("cloudinary");

exports.createReferralForm = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }
  try {
    const {
      makingFirstName,
      makingLastName,
      makingEmail,
      makingMobile,
      relation,
      waiver,
      age,
      accessbility,
      services,
      customServices,
      referredPersonFirstName,
      referredPersonLastName,
      referredPersonEmail,
      referredPersonMobile,
      needs,
      behaviour,
      physical,
      facilities,
      staffingSupport,
      participating,
      safety,
      uniqueNeeds,
      initials,
      terms,
    } = req.body;

    // Check if req.file exists and upload docs image to Cloudinary if available
    let docsUrl;
    if (req.file) {
      docsUrl = await fileUpload.cloudinaryDocsUpload(req.file);
    }

    const referral = new Referral({
      makingFirstName,
      makingLastName,
      makingEmail,
      makingMobile,
      relation,
      waiver,
      age,
      accessbility,
      services,
      customServices,
      referredPersonFirstName,
      referredPersonLastName,
      referredPersonEmail,
      referredPersonMobile,
      needs,
      behaviour,
      physical,
      facilities,
      staffingSupport,
      participating,
      safety,
      uniqueNeeds,
      initials,
      terms,
      additionalDocs: docsUrl,
    });

    await referral.save();
    res.status(201).json({ message: "Referral Form created successfully!" });
  } catch (error) {
    console.error("Error creating Referral Form:", error);
    const err = new HttpError("Failed To Create Referral Form!", 500);
    return next(err);
  }
};

exports.getReferralForm = async (req, res, next) => {
  try {
    const referral = await Referral.find();

    if (!referral) {
      return res.status(404).json({ message: "No Referral Form Yet!" });
    }

    const referralformWithDocsURL = referral.map((form) => ({
      ...form.toObject(),
      additionalDocs: form.additionalDocs
        ? `/api/referral/${form._id}/docs`
        : null,
    }));

    res.status(200).json({ Referral: referralformWithDocsURL });
  } catch {
    const error = new HttpError("Failed To Gets Referral Form!", 500);
    return next(error);
  }
};

exports.getReferralFormById = async (req, res, next) => {
  try {
    const formId = req.params.id;
    const referral = await Referral.findById(formId);

    if (!referral) {
      return res
        .status(404)
        .json({ message: "Form not found for Provided Id" });
    }

    // Include the docs URL in the response
    const referralformWithDocsURL = {
      ...referral.toObject(),
      additionalDocs: referral.additionalDocs
        ? `/api/referral/${formId}/additionalDocs`
        : null,
    };

    res.status(200).json({ Referral: referralformWithDocsURL });
  } catch {
    const error = new HttpError("Docs Not Found By Provided Id!.", 500);
    return next(error);
  }
};

exports.getReferralFormDocs = async (req, res, next) => {
  const formId = req.params.id;

  try {
    const referral = await Referral.findById(formId);

    if (!referral || !referral.additionalDocs) {
      return res.status(404).json({ message: "Additional Docs not found." });
    }

    // Redirect to the Cloudinary URL for the docs image
    const docsUrl = referral.additionalDocs;
    res.redirect(docsUrl);
  } catch (error) {
    console.error("Error fetching Referral Form Docs:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.deleteReferralForm = async (req, res, next) => {
  const formId = req.params.id;

  // Check if the id is undefined or falsy
  if (!formId) {
    return res.status(400).json({ message: "Invalid Referral Form ID" });
  }

  try {
    const referral = await Referral.findById(formId);

    if (!referral) {
      // Send a response indicating that the Referral Form was not found
      return res.status(404).json({ message: "Referral Form not found." });
    }

    // Check if referral form.docs is defined
    if (referral.additionalDocs) {
      try {
        const publicId = referral.additionalDocs
          .split("/caringnest/additionalDocs/")[1]
          .split(".")[0];
        console.log("Extracted Public ID:", publicId); // Logging for verification

        // Delete the docs file from Cloudinary
        const deletionResult = await cloudinary.uploader.destroy(publicId);
        if (deletionResult.result === "ok") {
          console.log(`Doc deleted from Cloudinary: ${publicId}`);
        } else {
          console.error(`Failed to delete doc from Cloudinary: ${publicId}`);
        }
      } catch (err) {
        console.error("Error deleting doc from Cloudinary:", err);
      }
    }

    // Delete the Referral from MongoDB
    await Referral.deleteOne({ _id: formId });

    res.status(200).json({ message: "Referral Form Deleted Successfully." });
  } catch (error) {
    console.error("Error deleting Referral Form:", error);
    const err = new HttpError("Failed To Delete Referral Form!", 500);
    return next(err);
  }
};
