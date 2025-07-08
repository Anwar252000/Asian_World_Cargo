import { Link } from 'react-router-dom';
import HomeNavbar from './HomeNavbar';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  "/slider1.jpeg",
  "/contact.jpeg",
  "/road.jpeg"
];

const Mainbanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid position-relative w-100 p-0" style={{ height: "100vh", overflow: "hidden" }}>
      {/* Background Image Slider */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: -1 }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Banner"
            className="position-absolute w-100 h-100"
            style={{
              objectFit: "cover",
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
          />
        ))}
      </div>

      {/* Navbar component */}
      <HomeNavbar />

      <div className="d-flex flex-column align-items-start justify-content-center" style={{ zIndex: 1, color: 'white', marginTop: "20vh" }}>
        <div className="text-start ps-5">
          <h4 className="fw-bold slide-in">Reliable & Fast Cargo Solutions!</h4>
        </div>

        <div className="text-start mt-3 ps-5">
          <h1 className="fw-bold slide-in">Global Logistics for</h1>
          <h1 className="fw-bold slide-in">Efficient & Secure</h1>
          <h1 className="fw-bold slide-in">Freight Transportation!</h1>
        </div>

        {/* Additional Relevant Content */}
        <div className="text-start ps-5 mt-4">
          <p className="slide-in" style={{ fontSize: '18px', lineHeight: '1.6' }}>
            We specialize in providing seamless and reliable cargo services worldwide. <br />
            Our advanced logistics solutions ensure safe, timely, and efficient delivery of your shipments.
          </p>
        </div>

        {/* New Call to Action Button */}
        <div className="text-start ps-5 mt-4">
          <Link to="/aboutus">
            <button
              type="button"
              className="btn btn-lg fw-bold rounded-5"
              style={{ backgroundColor: "#272262", color: "white", marginBottom: "50px", outline: "solid white 1px" }}
            >
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mainbanner;
