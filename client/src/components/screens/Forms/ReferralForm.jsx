import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../OtherComponents/Loader/Loader";
import "../css/Referral.css";
import axios from "axios";

const ReferralForm = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const [makingFirstName, setMakingFirstName] = useState("");
  const [makingLastName, setMakingLastName] = useState("");
  const [makingEmail, setMakingEmail] = useState("");
  const [makingMobile, setMakingMobile] = useState("");
  const [relation, setRelation] = useState("");
  const [selectedWaiver, setSelectedWaiver] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedAccessiblity, setSelectedAccessibility] = useState("");
  const [services, setServices] = useState("");
  const [selectedCustomServices, setSelectedCustomServices] = useState("");
  const [referredPersonFirstName, setReferredPersonFirstName] = useState("");
  const [referredPersonLastName, setReferredPersonLastName] = useState("");
  const [referredPersonEmail, setReferredPersonEmail] = useState("");
  const [referredPersonMobile, setReferredPersonMobile] = useState("");
  const [needs, setNeeds] = useState("");
  const [behaviour, setBehaviour] = useState("");
  const [physical, setPhysical] = useState("");
  const [selectedFacilities, setSelectedFacilities] = useState("");
  const [selectedStaffingSupport, setSelectedStaffingSupport] = useState("");
  const [selectedParticipating, setSelectedParticipating] = useState("");
  const [selectedSafety, setSelectedSafety] = useState("");
  const [uniqueNeeds, setUniqueNeeds] = useState("");
  const [additionalDocs, setAdditionalDocs] = useState("");
  const [initials, setInitials] = useState("");
  const [terms, setTerms] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleReferralForm = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const referralFormData = new FormData();

      referralFormData.append("makingFirstName", makingFirstName);
      referralFormData.append("makingLastName", makingLastName);
      referralFormData.append("makingEmail", makingEmail);
      referralFormData.append("makingMobile", makingMobile);
      referralFormData.append("relation", relation);
      referralFormData.append("waiver", selectedWaiver);
      referralFormData.append("age", selectedAge);
      referralFormData.append("accessibility", selectedAccessiblity);
      referralFormData.append("services", services);
      referralFormData.append("customServices", selectedCustomServices);
      referralFormData.append(
        "referredPersonFirstName",
        referredPersonFirstName
      );
      referralFormData.append("referredPersonLastName", referredPersonLastName);
      referralFormData.append("referredPersonEmail", referredPersonEmail);
      referralFormData.append("referredPersonMobile", referredPersonMobile);
      referralFormData.append("needs", needs);
      referralFormData.append("behaviour", behaviour);
      referralFormData.append("physical", physical);
      referralFormData.append("facilities", selectedFacilities);
      referralFormData.append("staffingSupport", selectedStaffingSupport);
      referralFormData.append("participating", selectedParticipating);
      referralFormData.append("safety", selectedSafety);
      referralFormData.append("uniqueNeeds", uniqueNeeds);
      referralFormData.append("additionalDocs", additionalDocs);
      referralFormData.append("initials", initials);
      referralFormData.append("terms", terms);

      const referralFormApiUrl =
        "https://caring-nest-deployment-server.onrender.com/api/referral/createReferralForm";
      const response = await axios.post(referralFormApiUrl, referralFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        setSuccessMessage(
          "Thank You! Your Referral Form Has Been Submitted Successfully!"
        );
        setErrorMessage("");
        window.scrollTo(0, 0);
      } else {
        setSuccessMessage("Error saving data. Please try again later!");
        setErrorMessage("");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error during Submitting Referral Form!", error);
      setSuccessMessage("An error occurred during Submitting Referral Form!");
      setErrorMessage("");
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="REFERRAL">
      {successMessage && (
        <center>
          <div
            className="alert alert-success w-50 d-flex justify-content-center align-items-center p-4"
            role="alert"
          >
            <span style={{ fontSize: 20, paddingRight: 20 }}>
              {successMessage}
            </span>
            <br />
            <Link to="/" className="btn w-25">
              OK
            </Link>
          </div>
        </center>
      )}
      {errorMessage && (
        <center>
          <div
            className="alert alert-danger w-50 d-flex justify-content-center align-items-center p-4"
            role="alert"
          >
            <span style={{ fontSize: 20, paddingRight: 20 }}>
              {errorMessage}
            </span>
            <br />
            <Link to="/" className="btn w-25">
              OK
            </Link>
          </div>
        </center>
      )}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 mt-5 text-center">
            <h1 className="text-success">Referral Form</h1>
            <p className="text-muted">
              Please fill out the following Assisted Living referral form for
              our team to review.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <form
              className="p-2 m-2"
              encType="multipart/form-data"
              onSubmit={handleReferralForm}
            >
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Full Name:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="First Name(Individual making referral)"
                    name="makingFirstName"
                    value={makingFirstName}
                    onChange={(e) => {
                      setMakingFirstName(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Last Name:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Last Name(Individual making referral)"
                    name="makingLastName"
                    value={makingLastName}
                    onChange={(e) => {
                      setMakingLastName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Email:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Email(Individual making referral)"
                    name="makingEmail"
                    value={makingEmail}
                    onChange={(e) => {
                      setMakingEmail(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Phone:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Phone Number(Individual making referral)"
                    name="makingMobile"
                    value={makingMobile}
                    onChange={(e) => {
                      setMakingMobile(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Relation:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Relationship the referred individual?"
                    name="relation"
                    value={relation}
                    onChange={(e) => {
                      setRelation(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Waiver Program?
                        </label>
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="cadi_waiver"
                            checked={selectedWaiver === "CADI Waiver"}
                            onChange={() => setSelectedWaiver("CADI Waiver")}
                          />
                          <span className="px-2">CADI Waiver</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="tbi_waiver"
                            checked={selectedWaiver === "TBI Waiver"}
                            onChange={() => setSelectedWaiver("TBI Waiver")}
                          />
                          <span className="px-2">TBI Waiver</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="elderly_waiver"
                            checked={selectedWaiver === "Elderly Waiver"}
                            onChange={() => setSelectedWaiver("Elderly Waiver")}
                          />
                          <span className="px-2">Elderly Waiver</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="individual_waiver"
                            checked={
                              selectedWaiver ===
                              "Individual is not on waiver program"
                            }
                            onChange={() =>
                              setSelectedWaiver(
                                "Individual is not on waiver program"
                              )
                            }
                          />
                          <span className="px-2">
                            Individual is not on waiver program
                          </span>{" "}
                          <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Is the recipient of service 55 Years of age and older?
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="age_yes"
                            checked={selectedAge === "Yes"}
                            onChange={() => setSelectedAge("Yes")}
                          />
                          <span className="px-2">Yes</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="age_no"
                            checked={selectedAge === "No"}
                            onChange={() => setSelectedAge("No")}
                          />
                          <span className="px-2">No</span> <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-4 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Is the recipient of services in need of an accessible
                          home (no stairs, shower accessibility, etc.)?
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="accessible_yes"
                            checked={selectedAccessiblity === "Yes"}
                            onChange={() => setSelectedAccessibility("Yes")}
                          />
                          <span className="px-2">Yes</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="accessible_no"
                            checked={selectedAccessiblity === "No"}
                            onChange={() => setSelectedAccessibility("No")}
                          />
                          <span className="px-2">No</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="accessible_certain"
                            checked={
                              selectedAccessiblity ===
                              "Yes, to a certain degree"
                            }
                            onChange={() =>
                              setSelectedAccessibility(
                                "Yes, to a certain degree"
                              )
                            }
                          />
                          <span className="px-2">Yes, to a certain degree</span>{" "}
                          <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Services:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Seeking What Type of Services?"
                    name="services"
                    value={services}
                    onChange={(e) => {
                      setServices(e.target.value);
                    }}
                  />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Is the recipient of services in need of 24-hour
                          customized assisted living services?
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="custom_service_yes"
                            checked={selectedCustomServices === "Yes"}
                            onChange={() => setSelectedCustomServices("Yes")}
                          />
                          <span className="px-2">Yes</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="custom_service_no"
                            checked={selectedCustomServices === "No"}
                            onChange={() => setSelectedCustomServices("No")}
                          />
                          <span className="px-2">No</span> <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Full Name:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="First Name(Individual being referred)"
                    name="referredPersonFirstName"
                    value={referredPersonFirstName}
                    onChange={(e) => {
                      setReferredPersonFirstName(e.target.value);
                    }}
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Last Name:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Last Name(Individual being referred)"
                    name="referredPersonLastName"
                    value={referredPersonLastName}
                    onChange={(e) => {
                      setReferredPersonLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Email:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Email(Individual being referred)"
                    name="referredPersonEmail"
                    value={referredPersonEmail}
                    onChange={(e) => {
                      setReferredPersonEmail(e.target.value);
                    }}
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Phone:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Phone Number(Individual being referred)"
                    name="referredPersonMobile"
                    value={referredPersonMobile}
                    onChange={(e) => {
                      setReferredPersonMobile(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Needs:
                  </label>
                  <textarea
                    className="inputField px-3"
                    placeholder="Medical/Personal Needs"
                    rows={3}
                    name="needs"
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                  />
                </div>

                <div className="col-lg-4 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Behavioural:
                  </label>
                  <textarea
                    className="inputField px-3"
                    placeholder="Behavioural Summary and Vulnerabilities"
                    rows={3}
                    name="behaviour"
                    value={behaviour}
                    onChange={(e) => setBehaviour(e.target.value)}
                  />
                </div>

                <div className="col-lg-4 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Physical:
                  </label>
                  <textarea
                    className="inputField px-3"
                    placeholder="Physical Summary"
                    rows={3}
                    name="physical"
                    value={physical}
                    onChange={(e) => setPhysical(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Is the recipient of services currently living in an
                          assisted living facility?
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="assisted_facility_yes"
                            checked={selectedFacilities === "Yes"}
                            onChange={() => setSelectedFacilities("Yes")}
                          />
                          <span className="px-2">Yes</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="assisted_facility_no"
                            checked={selectedFacilities === "No"}
                            onChange={() => setSelectedFacilities("No")}
                          />
                          <span className="px-2">No</span> <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Determine the staffing support needed.
                        </label>
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="staffing_support_1"
                            checked={selectedStaffingSupport === "1:1"}
                            onChange={() => setSelectedStaffingSupport("1:1")}
                          />
                          <span className="px-2">1:1</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="staffing_support_2"
                            checked={selectedStaffingSupport === "1:2"}
                            onChange={() => setSelectedStaffingSupport("1:2")}
                          />
                          <span className="px-2">1:2</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="staffing_support_3"
                            checked={selectedStaffingSupport === "1:3"}
                            onChange={() => setSelectedStaffingSupport("1:3")}
                          />
                          <span className="px-2">1:3</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-3 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="staffing_support_4"
                            checked={selectedStaffingSupport === "1:4"}
                            onChange={() => setSelectedStaffingSupport("1:4")}
                          />
                          <span className="px-2">1:4</span> <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Is the recipient of services currently participating
                          in a day program?
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="participating_yes"
                            checked={selectedParticipating === "Yes"}
                            onChange={() => setSelectedParticipating("Yes")}
                          />
                          <span className="px-2">Yes</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="participating_no"
                            checked={selectedParticipating === "No"}
                            onChange={() => setSelectedParticipating("No")}
                          />
                          <span className="px-2">No</span> <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Does the recipient of services require visual safety
                          checks during sleep hours?
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="safety_yes"
                            checked={selectedSafety === "Yes"}
                            onChange={() => setSelectedSafety("Yes")}
                          />
                          <span className="px-2">Yes</span> <br />
                        </label>
                      </div>

                      <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="radio"
                            name="safety_no"
                            checked={selectedSafety === "No"}
                            onChange={() => setSelectedSafety("No")}
                          />
                          <span className="px-2">No</span> <br />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Unique Needs:
                  </label>
                  <textarea
                    className="inputField px-3"
                    placeholder="Unique Circumstances/Needs"
                    name="uniqueNeeds"
                    value={uniqueNeeds}
                    onChange={(e) => setUniqueNeeds(e.target.value)}
                  />
                </div>

                <div className="col-lg-6 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Any Additional Documents:
                  </label>
                  <div className="sampleField">
                    <input
                      type="file"
                      name="additional_docs"
                      className="px-2"
                      onChange={(e) => setAdditionalDocs(e.target.files[0])}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12 mb-3">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Initials:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Initials"
                    name="initials"
                    value={initials}
                    onChange={(e) => setInitials(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-sm-12 col-md-12 col-lg-6 mb-3">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <label style={{ fontSize: 16, fontWeight: "500" }}>
                          Information
                        </label>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-12 mb-3">
                        <label style={{ cursor: "pointer" }}>
                          <input
                            type="checkbox"
                            name="terms"
                            checked={terms}
                            onChange={() => {
                              setTerms(!terms);
                            }}
                            required
                          />
                        </label>
                        <span className="px-2">
                          I declare that the information I've provided is
                          accurate & complete.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {loading ? (
                <Loader />
              ) : (
                <div className="row">
                  <div className="col-lg-12">
                    <button className="btn">Submit</button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralForm;
