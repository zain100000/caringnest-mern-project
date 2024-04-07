import React, { useState, useEffect } from "react";
import ScheduleImg from "../../../assets/schedule/schedule.jpg";
import "../css/Schedule.css";
import Loader from "../../OtherComponents/Loader/Loader";
import { Link } from "react-router-dom";
import axios from "axios";

const Schedule = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const handleScheduleForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const scheduleFormData = {
        date,
        time,
        name,
        email,
        mobile,
      };

      const ContactApiUrl =
        "https://caring-nest-deployment-server.onrender.com/api/schedule";
      const response = await axios.post(ContactApiUrl, scheduleFormData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status >= 200 && response.status < 300) {
        setSuccessMessage("Thank You! Your Schedule Has Been Booked!");
        setErrorMessage("");
        window.scrollTo(0, 0);
      } else {
        setErrorMessage("Error Booking Schedule!");
        setSuccessMessage("");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      setErrorMessage("Error During Booking Schedule!");
      setSuccessMessage("");
      window.scrollTo(0, 0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="SCHEDULE">
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
            <h1>Schedule A Tour</h1>
            <p className="text-muted">
              Select a Date and Time and we will book your tour.
            </p>
          </div>
        </div>

        <div className="row p-5">
          <div className="col-lg-6">
            <form className="p-2 m-2" onSubmit={handleScheduleForm}>
              <div className="row mb-3">
                <div className="col-lg-12">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Date:
                  </label>
                  <input
                    className="inputField px-3"
                    name="date"
                    type="date"
                    style={{ cursor: "pointer" }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-12">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Time:
                  </label>
                  <div className="d-flex flex-row w-100">
                    <select
                      className="inputField px-2"
                      name="time"
                      style={{ cursor: "pointer" }}
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">Select A Time:</option>
                      <option value="10AM">10AM</option>
                      <option value="11AM">11AM</option>
                      <option value="12PM">12PM</option>
                      <option value="1PM">1PM</option>
                      <option value="2PM">2PM</option>
                      <option value="3PM">3PM</option>
                      <option value="4PM">4PM</option>
                      <option value="5PM">5PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-12">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Full Name:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Full Name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-lg-12">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Email:
                  </label>
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

              <div className="row mb-3">
                <div className="col-lg-12">
                  <label
                    className="mb-2"
                    style={{ fontSize: 16, fontWeight: "500" }}
                  >
                    Phone:
                  </label>
                  <input
                    className="inputField px-3"
                    placeholder="Phone Number"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              {loading ? (
                <Loader />
              ) : (
                <div className="row p-2 mb-5">
                  <div className="col-lg-12">
                    <button className="btn">Book Appointment</button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="col-lg-6">
            <img
              src={ScheduleImg}
              style={{ width: "100%", height: "90%", padding: 50 }}
              alt="Schedule"
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Schedule;
