// import React from 'react';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container-fluid mt-3 footer-1 sm-footer"
      style={{
        background: "linear-gradient(135deg, #272262, #00adef)", // Lightning gradient
        padding: "30px 0",
      }}
    >
      <div className="row col-12">
        {/* Logo and Description Section */}
        <div className="col-12 col-md-3 pb-4">
          <img
            src="AWC.png"
            alt="Logo"
            style={{
              width: "110px",
              filter: "brightness(0) invert(1)",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <p className="ps-2 ms-5  text-white">
            Asian World Cargo Services is an integrated end-to-end logistics
            service provider having a team with over 20 years’ experience in
            different local and global companies in Pakistan. Our aim is to
            support our customers in every way as a reliable logistics partner.
          </p>
        </div>

        {/* Office Section */}
        <div className="col-12 col-md-3 mt-4 pt-2">
          <h3 style={{ color: "white", fontWeight: "bold" }}>Address</h3>
          <p style={{ textAlign: "left", color: "white" }}>
            <strong>ASIAN WORLD CARGO SERVICES</strong><br /> Suite 505, Progressive Square, Plot 11-A,
            Block-6,
            <br />
            PECHS, Shahrah-e-Faisal, Karachi – Pakistan
          </p>
          <strong>Webiste</strong> :
          <Link
            to="http://www.asianworld.com.pk/"
            style={{ textDecoration: "none" }}
          >
            <span className="text-white">www.asianworld.com.pk</span>
          </Link>
          <br />
          <strong>COUNTRY-WIDE PRESENCE</strong>
          <p>Karachi – Lahore – Islamabad – Sialkot – Multan</p>
        </div>

        {/* Links Section */}
        <div className="col-12 col-md-2 mt-4 pt-2">
          <h3 style={{ color: "white", fontWeight: "bold" }}>Links</h3>
          <ul className="list-unstyled" style={{ color: "white" }}>
            <li>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" style={linkStyle}>
                About
              </Link>
            </li>

            <li>
              <Link to="/Career" style={linkStyle}>
                Career
              </Link>
            </li>
            <li>
              <Link to="/contact" style={linkStyle}>
                Contact US
              </Link>
            </li>
          </ul>
        </div>

        {/* Email Subscription and Social Icons Section */}
        <div className="col-12 col-md-2 mt-4 pt-2">
          <h3 style={{ color: "white", fontWeight: "bold" }}>Email</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "250px",
            }}
          >
            <strong>Email : info@asiantworld.com.pk</strong>
            <Link></Link>
            <strong>Phone : +92 21 3432 1247, 3432 1248</strong>
            <strong>Fax : +92 21 3432 1246</strong>
            <br />

            <input
              type="email"
              placeholder="Enter your email"
              className="form-control mb-2"
              style={{
                borderRadius: "20px",
                padding: "10px",
              }}
            />
            <button
              style={{
                padding: "10px",
                backgroundColor: "#003366",
                color: "white",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Subscribe
            </button>
            <div className="d-flex justify-content-center mt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61572945936242"
                className="m-2 text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/asian-world-cargo-services-773611350/"
                className="m-2 text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/asian_world_cargo_services/"
                className="m-2 text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Link style to be used throughout
const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  transition: "color 0.3s",
};

export default Footer;
