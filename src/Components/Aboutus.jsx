import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Aboutus = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated"); // Apply animation class
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    // Select images
    const mainImage = document.querySelector(".main-image");
    const smallImage = document.querySelector(".small-image");

    if (mainImage) observer.observe(mainImage);
    if (smallImage) observer.observe(smallImage);

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <>
      <br />
      <div
        className="d-flex flex-column"
        style={{
          minHeight: "80vh",
          padding: "2rem",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "0.9rem" }}>
                <strong>Asian World Cargo Services </strong> is an integrated end-to-end logistics service provider having a team with over 20 years’ experience in different local and global companies in Pakistan. Our aim is to support our customers in every way as a reliable logistics partner.
              </p>
              <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "0.9rem" }}>
                As an efficient and intelligent Service Provider with decades of experience in Freight Forwarding & Global Logistics, Asian World has become a leading entity in Pakistan with proficient logistics management services to cater to client challenges.
              </p>
              <p className="text-muted" style={{ fontSize: "0.9rem", marginTop: "0.9rem" }}>
                Our corporate goal and professional approach define who we are! We are unique in the way we conduct our business. We continue to assess ourselves on how we appear, act, and speak! How we distinguish ourselves from our competitors! We are committed to supporting the constantly changing environment, shaped by globalization and its direct effect on changes in values, demographics, and continuously increasing complexities.
              </p>

              <h4 className="mt-3 text-dark">Core Expertise & Strength</h4>
              <ul className="text-muted">
                <li>Reliable worldwide agents and alliances to offer Ocean & Air Services.</li>
                <li>Worldwide Consolidation for Imports and Exports (both LCL & Airfreight)</li>
                <li>Efficient & Cost-effective arrangement with bonded warehouse for fast LCL deliveries</li>
                <li>Comprehensive range of road transport solutions</li>
                <li>Strong Customer Base</li>
                <li>Single point of contact for all customers/agents (Key Account Management) to handle all kinds of cargo safely</li>
                <li>Our capability to do tomorrow’s job today where you can leave all your logistics-related worries on us</li>
                <li>Value-Added services on top of conventional Ocean & Air shipments</li>
                <li>A dynamic leadership team having experience of above 20 years</li>
              </ul>
            </div>

            {/* Right Section - Two Images with Animation */}
            <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center mt-4 mt-lg-0">
              <div className="position-relative w-75 text-center">
                {/* Main Image */}
                <img
                  src="aboutus.jpeg"
                  alt="About Us"
                  className="img-fluid main-image fade-in-up w-100"
                  style={{
                    height: "auto",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                />
                {/* Smaller Image Positioned on Right */}
                <img
                  src="about3.jpg"
                  alt="Additional"
                  className="img-fluid small-image fade-in-up w-75 position-absolute d-none d-md-block"
                  style={{
                    right: "-20%",
                    bottom: "-40%",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
