import { useState } from "react";
import { NavDropdown, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backdropFilter: "blur(2px)",
      }}
    >
      <div className="container-fluid ms-4 position-relative" style={{ height: "110px" }}>
      <Link to="/">
  <img src="/AWC.png" alt="AWC Logo" style={{ width: "160px" }} />
</Link>


        {/* Sidebar toggle button for mobile screens only */}
        <Button
          className="navbar-toggler d-lg-none" // Show only on mobile
          type="button"
          aria-label="Toggle navigation"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        {/* Regular navbar for large screens only */}
        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center fw-bold">
            {/* Home Link */}
            <li className="nav-item">
              <Link to="/" className="nav-link text-light pe-4">
                Home
              </Link>
            </li>

            {/* About Us Link */}
            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-light pe-4">
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <NavDropdown title="Services" id="nav-dropdown-white" className="custom-dropdown-white pe-2">
              <Link to="/oceanfreight" className="dropdown-item text-dark fw-bold">OCEAN FREIGHT</Link>
              <Link to="/airfreight" className="dropdown-item text-dark fw-bold">AIR FREIGHT</Link>
              <Link to="/roadfreight" className="dropdown-item text-dark fw-bold">ROAD FREIGHT</Link>
              <Link to="/customclearance" className="dropdown-item text-dark fw-bold">CUSTOM CLEARANCE SERVICES</Link>
              <Link to="/warehousing" className="dropdown-item text-dark fw-bold">WAREHOUSING</Link>
              <Link to="/dgcargo" className="dropdown-item text-dark fw-bold">DG CARGO HANDLING</Link>
            </NavDropdown>

            {/* Career Link */}
            <li className="nav-item">
              <Link to="/career" className="nav-link text-light pe-4">
                Career
              </Link>
            </li>

            {/* Contact Link */}
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                <button
                  type="button"
                  className="btn btn-lg fw-bold rounded-5"
                  style={{ backgroundColor: "#272262", color: "white" }}
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Bootstrap Offcanvas Sidebar for mobile screens only */}
        <Offcanvas
          show={isSidebarOpen}
          onHide={toggleSidebar}
          placement="end"
          className="d-lg-none"
          backdropFilter="blur(10px)"
          style={{ width: "250px", background: "rgba(0,0,0,0.1)" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <img src="/SYN.png" alt="Logo" style={{ width: "120px" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="navbar-nav fw-bold">
              {/* Home Link */}
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">
                  Home
                </Link>
              </li>

              {/* About Us Link */}
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link text-light">
                  About Us
                </Link>
              </li>

              {/* Services Dropdown */}
              <NavDropdown title="Services" id="nav-dropdown-white" className="custom-dropdown-white">
                <Link to="/oceanfreight" className="dropdown-item text-dark">OCEAN FREIGHT</Link>
                <Link to="/airfreight" className="dropdown-item text-dark">AIR FREIGHT</Link>
                <Link to="/roadfreight" className="dropdown-item text-dark">ROAD FREIGHT</Link>
                <Link to="/customclearance" className="dropdown-item text-dark">CUSTOM CLEARANCE SERVICES</Link>
                <Link to="/warehousing" className="dropdown-item text-dark">WAREHOUSING</Link>
                <Link to="/dgcargo" className="dropdown-item text-dark">DG CARGO HANDLING</Link>
              </NavDropdown>

              {/* Career Link */}
              <li className="nav-item">
                <Link to="/career" className="nav-link text-light">
                  Career
                </Link>
              </li>

              {/* Contact Link */}
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <button
                    type="button"
                    className="btn btn-lg fw-bold rounded-5"
                    style={{
                      backgroundColor: "rgb(1, 73, 174)",
                      color: "white",
                      marginBottom: "50px",
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default Navbar;
