// const mongoose = require("mongoose");
// const { validationResult } = require("express-validator");
// const HttpError = require("../model/http-error");
// const Referral = require("../model/referral-form-model");

// exports.createReferralForm = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(new HttpError("Invalid inputs passed!", 422));
//   }
//   try {
//     const {
//       makingFirstName,
//       makingLastName,
//       makingEmail,
//       makingMobile,
//       relation,
//       waiver,
//       age,
//       accessbility,
//       services,
//       customServices,
//       referredPersonFirstName,
//       referredPersonLastName,
//       referredPersonEmail,
//       referredPersonMobile,
//       needs,
//       behaviour,
//       physical,
//       facilities,
//       staffingSupport,
//       participating,
//       safety,
//       uniqueNeeds,
//       initials,
//       terms,
//     } = req.body;

//     const referral = new Referral({
//       makingFirstName,
//       makingLastName,
//       makingEmail,
//       makingMobile,
//       relation,
//       waiver,
//       age,
//       accessbility,
//       services,
//       customServices,
//       referredPersonFirstName,
//       referredPersonLastName,
//       referredPersonEmail,
//       referredPersonMobile,
//       needs,
//       behaviour,
//       physical,
//       facilities,
//       staffingSupport,
//       participating,
//       safety,
//       uniqueNeeds,
//       additionalDocs: req.file ? req.file.path.replace(/\\/g, "/") : "",
//       initials,
//       terms,
//     });

//     await referral.save();
//     res.status(201).json({ message: "Referral Form Submitted Successfully!" });
//   } catch {
//     const error = new HttpError("Failed To Create Referral Form!", 500);
//     return next(error);
//   }
// };

// exports.getReferralFormById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const referral = await Referral.findById(id);

//     if (!referral) {
//       return res
//         .status(404)
//         .json({ message: "Referral Form not found for Provided Id" });
//     }

//     res.status(200).json({ Referral: referral });
//   } catch {
//     const error = new HttpError(
//       "Referral Form Not Found By Provided Id!.",
//       500
//     );
//     return next(error);
//   }
// };

// exports.getReferralForm = async (req, res) => {
//   try {
//     const referral = await Referral.find();

//     if (!referral) {
//       return res.status(404).json({ message: "No Referral Form Yet!" });
//     }

//     res.status(200).json({ Referral: referral });
//   } catch {
//     const error = new HttpError("Failed To Get Referral Form!");
//   }
// };

// exports.deleteReferralForm = async (req, res, next) => {
//   const Id = req.params.id;

//   if (!Id) {
//     return res.status(400).json({ message: "Invalid Referral Form ID" });
//   }

//   let referral;
//   try {
//     referral = await Referral.findById(Id).populate("email");
//   } catch (err) {
//     const error = new HttpError("Failed To Delete Referral Form!.", 500);
//     return next(error);
//   }

//   if (!referral) {
//     return res.status(404).json({ message: "Referral Form not found." });
//   }

//   const session = await mongoose.startSession();

//   try {
//     session.startTransaction();

//     await Referral.deleteOne({ _id: Id }, { session });

//     await session.commitTransaction();

//     res.status(200).json({ message: "Referral Form Deleted Successfully." });
//   } catch (err) {
//     await session.abortTransaction();

//     console.error("Error deleting Referral Form:", err);

//     res.status(500).json({ message: "Internal Server Error" });
//   } finally {
//     session.endSession();
//   }
// };

const mongoose = require("mongoose");
const fs = require("fs").promises;
const path = require("path");
const { validationResult } = require("express-validator");
const HttpError = require("../model/http-error");
const Referral = require("../model/referral-form-model");

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
      additionalDocs: req.file ? req.file.path.replace(/\\/g, "/") : "",
      initials,
      terms,
    });

    await referral.save();
    res.status(201).json({ message: "Referral Form created successfully!" });
  } catch (error) {
    console.error("Error creating Referral Form:", error);
    const err = new HttpError("Failed To Create Referral Form!", 500);
    return next(err);
  }
};

exports.getRefferalForm = async (req, res) => {
  try {
    const referral = await Referral.find();

    if (!referral) {
      return res.status(404).json({ message: "No Referral Form Yet!" });
    }

    const referralWithAdditionalDocURL = referral.map((form) => ({
      ...form.toObject(),
      additionalDocs: form.additionalDocs
        ? `/api/referral/${form._id}/additionalDocs`
        : null,
    }));

    res.status(200).json({ Referral: referralWithAdditionalDocURL });
  } catch {
    const error = new HttpError("Failed To Gets Referral Form!", 500);
    return next(error);
  }
};

exports.getReferralFormById = async (req, res) => {
  try {
    const { id } = req.params;
    const referral = await Referral.findById(id);

    if (!referral) {
      return res
        .status(404)
        .json({ message: "Referral Form not found for Provided Id" });
    }

    const referralWithAdditionalDocURL = {
      ...referral.toObject(),
      additionalDocs: referral.additionalDocs
        ? `/api/referral/${id}/additionalDocs`
        : null,
    };

    res.status(200).json({ Referral: referralWithAdditionalDocURL });
  } catch {
    const error = new HttpError(
      "Referral Form Not Found By Provided Id!.",
      500
    );
    return next(error);
  }
};

exports.getReferralFormAdditionalDocs = async (req, res, next) => {
  try {
    const { id } = req.params;
    const referral = await Referral.findById(id);

    if (!referral || !referral.additionalDocs) {
      return res.status(404).json({ message: "Additional Docs not found." });
    }

    res.set("Content-Type", "image/jpeg");

    const absolutePath = path.join(__dirname, "..", referral.additionalDocs);

    res.sendFile(absolutePath);
  } catch (error) {
    console.error("Error fetching Referral Form Additional Docs:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// exports.updateReferralForm = async (req, res, next) => {
//   const { product_pic, product, price } = req.body;
//   const Id = req.params.id;

//   let gents;
//   try {
//     gents = await Referral.findById(Id);
//   } catch (err) {
//     return next(err);
//   }

//   gents.product_pic = product_pic;
//   gents.product = product;
//   gents.price = price;

//   try {
//     await gents.save();
//   } catch (err) {
//     const error = new HttpError("Failed To Update Gents Order!.", 500);
//     return next(error);
//   }

//   res.status(200).json({ gents: gents.toObject({ getters: true }) });
// };

exports.deleteReferralForm = async (req, res, next) => {
  const Id = req.params.id;

  if (!Id) {
    return res.status(400).json({ message: "Invalid Referral Form ID" });
  }

  let referral;
  try {
    referral = await Referral.findById(Id).populate("additionalDocs");
  } catch (err) {
    const error = new HttpError("Failed To Delete Referral Form!.", 500);
    return next(error);
  }

  if (!referral) {
    return res.status(404).json({ message: "Referral Form not found." });
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    if (referral.additionalDocs) {
      try {
        await fs.unlink(referral.additionalDocs);
      } catch (err) {
        console.error("Error deleting Additional Docs:", err);
      }
    }

    await Referral.deleteOne({ _id: Id }, { session });

    await session.commitTransaction();

    res.status(200).json({ message: "Referral Form Deleted Successfully." });
  } catch (err) {
    await session.abortTransaction();

    console.error("Error deleting Referral Form:", err);

    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    session.endSession();
  }
};
