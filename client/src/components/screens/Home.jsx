import React, { useEffect, useState } from "react";
import "./css/Home.css";
import Loader from "../OtherComponents/Loader/Loader";
import { Link } from "react-router-dom";
import Carousel from "../OtherComponents/Carousel/Carousel";
import Slider1 from "../../assets/slider/slider1.jpg";
import Slider2 from "../../assets/slider/slider2.jpg";
import About from "../../assets/about/about.jpg";

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const images = [Slider1, Slider2];
  const headings = [
    "Welcome to Caring Nest Home",
    "Welcome to Caring Nest Home",
  ];

  const descriptions = [
    "At Caring Nest Home LLC, we provide assisted living services that give your loved ones the perfect home and support to live a happy life.",
    "At Caring Nest Home LLC, we provide assisted living services that give your loved ones the perfect home and support to live a happy life.",
  ];

  return (
    <section id="Home">
      {/* Banner Section */}
      <section id="Banner">
        <Carousel
          images={images}
          headings={headings}
          descriptions={descriptions}
        />
      </section>
      {/* Banner Section */}

      {/* About Section */}
      <section id="About">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">
              <h1 className="title">About Us</h1>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-lg-6">
              <p className="description">
                Caring Nest Home Care is reliable assisted living service
                provider located in Ramsey county. Our trained team are ready to
                provide the best home health care service and meet the
                individual needs of each client. We make sure your loved one is
                given a home where they can express their freedom and enjoy life
                as it is meant to be.
              </p>
              <Link className="btn" to="/about">
                Learn More
              </Link>
            </div>
            <div className="col-lg-6">
              <img src={About} className="about-img" />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}

      {/* Services Section */}
      <section id="Services">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">
              <h1 className="title">Our Services</h1>
            </div>
          </div>

          <div className="row m-5">
            <div className="col-md-12 col-lg-4">
              <div class="card gradient-card gradient-primary text-white">
                <div class="card-body">
                  <p class="card-text">
                    <i class="fas fa-user fa-2x text-success d-flex justify-content-center"></i>
                    <br />
                    <h6 style={{ textAlign: "center" }}>
                      Personalized Attention
                    </h6>
                    <p style={{ textAlign: "center" }}>
                      We offer many services to assist our residents, including
                      counseling, job search assistance, community access
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 ">
              <div class="card gradient-card gradient-primary text-white">
                <div class="card-body">
                  <p class="card-text">
                    <i class="fas fa-user-md fa-2x text-success d-flex justify-content-center"></i>
                    <br />
                    <h6 style={{ textAlign: "center" }}>
                      Registered Nurse Service
                    </h6>
                    <p style={{ textAlign: "center" }}>
                      Our registered nurses perform a variety of duties
                      including Medication administration, taking vital signs.
                    </p>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 ">
              <div class="card gradient-card gradient-primary text-white">
                <div class="card-body">
                  <p class="card-text">
                    <i class="fas fa-clipboard-check fa-2x text-success d-flex justify-content-center"></i>
                    <br />
                    <h6 style={{ textAlign: "center" }}>
                      Medication Distribution
                    </h6>
                    <p style={{ textAlign: "center" }}>
                      At Caring Nest Home Care, we offer professional, reliable
                      Medication Distribution services to all of our patients.
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}

      {/* Extra Section */}
      <section id="Extra" className="mt-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="text-center text-success">
                We are dedicated to provide high quality care and a warm
                environment that you can call home.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* Extra Section */}

      {/* Contact Section */}
      <section id="Contact" style={{ marginTop: 100, marginBottom: 100 }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h3 style={{ fontSize: 20, marginTop: 15 }}>
                Make the first step to get your home care!
              </h3>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Link to="/contact" className="btn">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <hr />
    </section>
  );
};

export default Home;
