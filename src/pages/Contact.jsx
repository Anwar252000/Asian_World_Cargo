import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Full-Screen Background with Dim Effect */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: 'url("career.jpeg")',
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
        <div
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <Link to="/" style={{ color: "white", fontSize: "20px" }}>
            Home
          </Link>{" "}
          /{" "}
          <Link to="/contact" style={{ color: "white", fontSize: "20px" }}>
            {" "}
            Contact{" "}
          </Link>
        </div>
      </div>

      {/* Contact Content */}
      <div
        style={{ color: "black", padding: "30px 20px", textAlign: "center" }}
      >
        <h1 style={{ color: "#0149ae" }}>Contact Us</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          {/* Address Section */}
          <div style={{ width: "45%", textAlign: "left" }}>
            <h2>Contact Information</h2>
            <p>
              <strong>ASIAN WORLD CARGO SERVICES</strong>
              <br />
              Suite 505, Progressive Square, Plot 11-A, Block-6,
              <br />
              PECHS, Shahrah-e-Faisal, Karachi – Pakistan
              <br />
              <strong>Phone:</strong> +92 21 3432 1247, 3432 1248
              <br />
              <strong>Fax:</strong> +92 21 3432 1246
              <br />
              <strong>Email:</strong> info@asiantworld.com.pk
              <br />
              <strong>Website:</strong> www.asianworld.com.pk
            </p>
            <h2>Country-Wide Presence</h2>
            <p>Karachi – Lahore – Islamabad – Sialkot – Multan</p>
          </div>

          {/* Contact Form */}
          <div style={{ width: "45%", textAlign: "left" }}>
            <h2>Contact Form</h2>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{ padding: "8px", borderRadius: "5px" }}
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{ padding: "8px", borderRadius: "5px" }}
              />

              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                style={{ padding: "8px", borderRadius: "5px" }}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                style={{ padding: "8px", borderRadius: "5px" }}
                rows="3"
              ></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "#272262",
                  // color: '#272262',
                  padding: "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              className="text-white">
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
