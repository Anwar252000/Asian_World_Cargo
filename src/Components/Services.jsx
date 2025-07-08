import { useEffect } from "react";
import {
  FaShip,
  FaPlane,
  FaTruck,
  FaClipboardCheck,
  FaWarehouse,
  FaExclamationTriangle,
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    // ... (Your existing Intersection Observer code)
  }, []);

  return (
    <div style={{ backgroundColor: "#f2f2f2", padding: "2rem 0" }}>
      <div className="container">
        <br />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
          {[
            { icon: <FaShip />, title: "OCEAN FREIGHT", desc: "Description of Ocean Freight services.", link: "/oceanfreight" },
            { icon: <FaPlane />, title: "AIR FREIGHT", desc: "Description of Air Freight services.", link: "/airfreight" },
            { icon: <FaTruck />, title: "ROAD FREIGHT", desc: "Description of Road Freight services.", link: "/roadfreight" },
            { icon: <FaClipboardCheck />, title: "CUSTOM CLEARANCE SERVICES", desc: "Description of Custom Clearance services.", link: "/customclearance" },
            { icon: <FaWarehouse />, title: "WAREHOUSING", desc: "Description of Warehousing services.", link: "/warehousing" },
            { icon: <FaExclamationTriangle />, title: "DG CARGO HANDLING", desc: "Description of DG Cargo Handling services.", link: "/dgcargo" },
          ].map((service, index) => (
            <div className="col service-item" key={index}>
              <a href={service.link} style={{ textDecoration: "none" }}>
                <div className="service-content d-flex flex-column align-items-center text-center">
                  <div className="service-icon mb-3" style={{ fontSize: "40px", color: "#272262" }}>
                    {service.icon}
                  </div>
                  <h3 style={{ color: "#272262" }}>{service.title}</h3>
                  <p style={{ color: "#272262" }}>{service.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
