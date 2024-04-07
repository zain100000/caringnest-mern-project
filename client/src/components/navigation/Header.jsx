import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import Logo from "../../assets/logo.png";
import "./css/Header.css";

const Header = () => {
  return (
    <section id="Header">
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container">
          <strong>
            <NavLink className="navbar-brand" to="/">
              <img className="Logo" src={Logo} alt="Logo" />
            </NavLink>
          </strong>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Our Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/referral">
                  Referral Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/schedule">
                  Schedule Tour
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            {/* Button  */}
            <NavLink className="btn">Call Us!</NavLink>
            {/* Button  */}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
