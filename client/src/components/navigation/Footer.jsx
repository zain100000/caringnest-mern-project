import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";

const Footer = () => {
  return (
    <section id="Footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-3 contact">
            <div className="row">
              <div className="col-lg-12">
                <div className="mainContainer">
                  <h6 className="footerHeading">Contact</h6>
                  <i className="fas fa-phone-alt icon"></i>
                  <br />
                  <span className="text-black ">612-451-1654 </span>
                </div>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-lg-12">
                <div className="mainContainer">
                  <i className="fas fa-envelope icon"></i>
                  <span className="text-black ">
                    caringnesthomehealth@gmail.com
                  </span>
                </div>
              </div>
            </div>
            <br />

            <div className="row">
              <div className="col-lg-12">
                <div className="mainContainer">
                  <i className="fas fa-map icon"></i>
                  <span className="text-black ">
                    <br />
                    447 Marnie Street South, Maplewood MN 55119
                  </span>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 hours">
            <h6 className="footerHeading">Hours</h6>
            <p style={{ fontWeight: "bold" }}>Monday - Thursday(9am - 5pm)</p>
            <p style={{ fontWeight: "bold" }}>
              Friday (8am - 4pm)(12pm - 1pm Break)
            </p>
            <p className="text-danger" style={{ fontWeight: "bold" }}>
              Saturday (Closed)
            </p>
            <p className="text-danger" style={{ fontWeight: "bold" }}>
              Sunday (Closed)
            </p>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 links">
            <h6 className="footerHeading">Waivers</h6>
            <p>Community Access for Disability Inclusion (CADI)</p>
            <p>Elderly Waiver (EW)</p>
            <p>Brain Injury (BI)</p>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 mission">
            <h6 className="footerHeading">Our Mission</h6>
            <p>
              Our Mission is to provide the best home health service to our
              clients where they can enjoy their freedom and a professional
              support service.
            </p>
            <div className="row">
              <div className="col-lg-12">
                <Link className="btn" to="/about">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small text-center text-white bg-dark p-3 mt-5">
        &copy;Copyright @ 2024 By{" "}
        <span style={{ color: "var(--primary)" }}>Caring Nest Home</span> | All
        Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
