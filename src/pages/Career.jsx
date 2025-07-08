import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobListings = [
    {
      title: "Ocean Freight Specialist",
      location: "Remote/On-site",
      description: "Manage ocean freight services and ensure timely global shipments.",
      requirements: [
        "Degree in Logistics or related field",
        "Experience in ocean freight operations",
        "Strong communication skills",
      ],
    },
    {
      title: "Air Freight Coordinator",
      location: "On-site",
      description: "Coordinate air freight shipments for global delivery.",
      requirements: [
        "Degree in Logistics or related field",
        "Experience in air freight and customs clearance",
        "Organizational skills",
      ],
    },
    {
      title: "Customs Clearance Specialist",
      location: "On-site",
      description: "Ensure smooth customs clearance and compliance with regulations.",
      requirements: [
        "Degree in International Trade or related field",
        "Experience in customs clearance",
        "Attention to detail",
      ],
    },
  ];

  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: 'url("freight.jpeg")',
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
          / <Link to="/career" style={{ color: "white", fontSize: "20px" }}>Career</Link>
        </div>
      </div>

      {/* Content Section - Two Column Layout */}
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
        {/* Left Section - Job Listings */}
        <div style={{ flex: 1 }}>
          <h1 style={{ color: "#0149ae" }}>Career Opportunities</h1>
          <p>
            We're looking for talented individuals to join our growing team at Asian World Cargo Service. 
            If you have a passion for logistics and cargo services, we invite you to apply.
          </p>

          {jobListings.map((job, index) => (
            <div key={index} style={{ marginBottom: "30px", paddingBottom: "10px", borderBottom: "1px solid #ccc" }}>
              <h3 style={{ color: "#0149ae" }}>{job.title}</h3>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
              <h4>Requirements:</h4>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                {job.requirements.map((req, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center" }}>
                    ➡ {req}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Section - Apply Now Form */}
        <div style={{ flex: 0.8, backgroundColor: "#f9f9f9", padding: "30px", borderRadius: "8px" }}>
          <h2 style={{ color: "#0149ae", textAlign: "center" }}>Apply Now</h2>
          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
            <input
              type="text"
              placeholder="Your Phone Number"
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
            <textarea
              placeholder="Why do you want to work with us?"
              required
              rows="4"
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#0149ae",
                border: "none",
                borderRadius: "5px",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
