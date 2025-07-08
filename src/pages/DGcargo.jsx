import React from "react";
import { Link } from "react-router-dom";

const DGcargo = () => {
  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: 'url("DG.jpg")', // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          filter: "brightness(0.8)", // Dim effect
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
          <Link to="/DGcargo" style={{ color: "white", fontSize: "20px" }}>
            {" "}
            DG Cargo Handling{" "}
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          color: "black",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#0149ae" }}>DG Cargo Handling</h1>

        <p>
          Transportation of dangerous goods is a complex procedure requiring
          detailed understanding and knowledge of the relevant regulations.
          Asian World specializes in all aspects of dangerous goods handling
          service, from identification to packaging, marking, labeling, and
          documentation.
        </p>

        <p>
          We provide nearly every class of dangerous goods handling service
          across a wide range of products, including:
        </p>

        <h2 style={{ color: "#0149ae" }}>Dangerous Goods Categories</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: "0",
              textAlign: "left",
              display: "grid",
              gridTemplateColumns: "auto auto", // Two columns
              gap: "10px", // Space between items
            }}
          >
            {[
              "Chemicals",
              "Petrochemicals",
              "Petroleum products",
              "Liquefied gases",
              "Aerosols",
              "Cosmetics",
              "Paints",
              "Batteries",
              "Gases",
              "Flammable Liquids / Flammable Solids",
              "Oxidizing, Toxic & Infectious Substances",
              "Corrosives",
              "Miscellaneous Dangerous Goods",
            ].map((item, index) => (
              <li key={index} style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    backgroundColor: "#272262",
                    color: "white",
                    marginRight: "5px",
                    padding: "2px 5px",
                    borderRadius: "3px",
                  }}
                >
                  &#10003;
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DGcargo;
