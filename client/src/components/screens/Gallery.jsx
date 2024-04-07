import React, { useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./css/Gallery.css";

const Gallery = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Optionally, you can add a cleanup function to scroll to the top when the component is unmounted
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <section id="GALLERY" style={{ overflowX: "hidden" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5">
            <h1 className="title">Our Gallery</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner mt-5">
                <div className="carousel-item active">
                  <img
                    src="https://bondhomecare.com/public/sites/14/51/images/uploaded/14/image10.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://bondhomecare.com/public/sites/14/51/images//uploaded/14/image13.jpg"
                    alt="Image"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://bondhomecare.com/public/sites/14/51/images//uploaded/14/image14.jpg"
                    alt="Image"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            style={{ marginTop: 150 }}
          >
            <div className="row">
              <h2 className="text-success" style={{ fontSize: "2.2rem" }}>
                As of Febraury: 2024 Available Now
              </h2>
              <p className="text-muted" style={{ fontSize: 20 }}>
                Location Maplewood, MN
              </p>
            </div>
            <div className="row">
              <h5>5 Bedrooms near MapleWood</h5>
              <p className="text-muted" style={{ textAlign: "justify" }}>
                We have 5 bedrooms, 4 bathrooms available. At Caring Nest, our
                clients enjoy their comfortable home atmosphere with Xfinity
                high speed internet access and over 185 channels of Xfinity
                cable Television programs. We provide a game room on the main
                level of the home with option to also enjoy a walk around a safe
                neighborhood.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <img src={Logo} className="Logo" />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Gallery;
