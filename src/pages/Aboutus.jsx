import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: 'url("aboutpage.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          filter: "brightness(0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Breadcrumb Navigation */}
        <div style={{ padding: "10px 20px", borderRadius: "5px", color: "white" }}>
          <Link to="/" style={{ color: "white", fontSize: "20px" }}>
            Home
          </Link>{" "}
          / <Link to="/aboutus" style={{ color: "white", fontSize: "20px" }}>About Us</Link>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "50px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "40px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#0149ae" }}>About Us</h1>
          <p>
            Asian World Cargo Services is an integrated end-to-end logistics service provider with a team having over 20 years of experience across local and global companies in Pakistan. Our goal is to be a reliable logistics partner and support our customers in every way.
          </p>
          <p>
            As an efficient and intelligent service provider with decades of experience in freight forwarding & global logistics, Asian World has become a leading entity in Pakistan, offering proficient logistics management services to address client challenges.
          </p>
          <p>
            Our corporate goal and professional approach define who we are. We strive to assess how we appear, act, and speak—distinguishing ourselves from competitors. We are committed to supporting the constantly changing environment shaped by globalization, impacting values, demographics, and increasing complexities.
          </p>
          <h2 style={{ color: "#0149ae" }}>Core Expertise & Strength</h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Reliable worldwide agents and alliances to offer Ocean & Air Services</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Worldwide Consolidation for Imports and Exports (LCL & Airfreight)</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Efficient & Cost-effective arrangement with bonded warehouse for fast LCL deliveries</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Comprehensive range of road transport solutions</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Strong customer base and dedicated team</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Single point of contact for all customers (Key Account Management)</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Capability to handle all logistics challenges effectively</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>Value-added services on top of conventional Ocean & Air shipments</li>
            <li><span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>A dynamic leadership team with over 20 years of experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;