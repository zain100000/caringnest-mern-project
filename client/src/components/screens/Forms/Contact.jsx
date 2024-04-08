import React, { useState, useEffect } from "react";
import "../css/Contact.css";
import Loader from "../../OtherComponents/Loader/Loader";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const handleContactForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const contactformData = {
        name,
        email,
        mobile,
        message,
      };

      const ContactApiUrl =
        "https://caring-nest-deployment-server.onrender.com/api/contact/createContactForm";
      const response = await axios.post(ContactApiUrl, contactformData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        setSuccessMessage("Thank You! Your Form Has Been Submit!");
        setErrorMessage("");
        window.scrollTo(0, 0);
      } else {
        setErrorMessage("Error Submitting Contact Form!");
        setSuccessMessage("");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      setErrorMessage("Error During Submitting Contact Form!");
      setSuccessMessage("");
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="CONTACT">
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
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">
            <h1 className="title">Contact Us</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <p className="description text-muted">
              For more information about Caring Next Home, please send us an
              email today.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <form>
              <div className="row p-2">
                <div className="col-lg-12">
                  <input
                    className="inputField px-3"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row p-2">
                <div className="col-lg-12">
                  <input
                    className="inputField px-3"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row p-2">
                <div className="col-lg-12">
                  <input
                    className="inputField px-3"
                    placeholder="Phone"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row p-2">
                <div className="col-lg-12">
                  <textarea
                    className="inputField px-3"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    rows={3}
                    required
                  />
                </div>
              </div>

              {loading ? (
                <Loader />
              ) : (
                <div className="row p-2 mb-5">
                  <div className="col-lg-12">
                    <button className="btn" onClick={handleContactForm}>
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Contact;
