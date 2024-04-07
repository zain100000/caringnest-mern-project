import React, { useEffect } from "react";
import ABOUT from "../../assets/about/about.jpg";
import { Link } from "react-router-dom";
import "./css/About.css";

const About = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <section id="ABOUT">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">
            <h1 className="title">About Us</h1>
          </div>
        </div>

        <div className="row m-5">
          <div className="col-lg-6">
            <h2>About Caring Nest</h2>
            <p className="description">
              Caring Nest Home Care is reliable assisted living service provider
              located in Ramsey county. Our trained team are ready to provide
              the best home health care service and meet the individual needs of
              each client. We make sure your loved one is given a home where
              they can express their freedom and enjoy life as it is meant to
              be.
            </p>
            <p className="description">
              {" "}
              Caring Nest has everything That you need to boost your visitors
              and convert visitors to clients.
            </p>
            <p className="description">
              {" "}
              Caring Nest provides high quality solutions at very affordable
              rates for senior care businesses. which helps you to grow your
              business next level.
            </p>
            <p className="description">
              {" "}
              We offer waivered services such as, Community Access for
              Disability Inclusion(CADI), Developmental Disabilities(DD),
              Community Alternative Care(CAC) and The Brain Injury(TBI).
            </p>
            <p className="description">
              {" "}
              Our facility is located located in Maplewood and is with walking
              distance from M Health Fairview Woodwinds and Maplewood Mall.
            </p>
            <Link className="btn" to="/contact">
              Contact Us
            </Link>
          </div>
          <div className="col-lg-6">
            <img src={ABOUT} className="About-img" />
          </div>
        </div>

        <div className="row" style={{ marginTop: 150, marginBottom: 100 }}>
          <div className="col-sm-12 col-md-12 col-lg-6 mission">
            <h3 className="text-dark text-center">OUR MISSION STATEMENT</h3>
            <p
              className="description text-muted text-center"
              style={{ fontWeight: "bold" }}
            >
              Our Mission is to provide the best home health service to our
              clients where they can enjoy their freedom and a professional
              support service.
            </p>
            <p
              className="description text-muted text-center"
              style={{ fontWeight: "bold" }}
            >
              TO PROVIDE 24/7 SUPPORT TO OUR CLIENTS
            </p>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-6 vision">
            <h3 className="text-dark text-center">OUR VISION STATEMENT</h3>
            <p
              className="description text-muted text-center"
              style={{ fontWeight: "bold" }}
            >
              We want to see a world where everyone receives compassionate care
              where the central focus is their care and wellbeing.
            </p>
            <p
              className="description text-muted text-center"
              style={{ fontWeight: "bold" }}
            >
              TO PROVIDE 24/7 SUPPORT TO OUR CLIENTS
            </p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default About;
