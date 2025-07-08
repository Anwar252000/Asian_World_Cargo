import { useState } from "react";
import { NavDropdown, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="container-fluid ms-4 position-relative"
        style={{ height: "112px" }}
      >
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
        <div
          className="collapse navbar-collapse d-none d-lg-block"
          id="navbarNav"
        >
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
            <NavDropdown
              title="Services"
              id="nav-dropdown"
              className="custom-dropdown-white pe-2"
            >
              <Link to="/oceanfreight" className="dropdown-item fw-bold">
                OCEAN FREIGHT
              </Link>
              <Link to="/airfreight" className="dropdown-item fw-bold">
                AIR FREIGHT
              </Link>
              <Link to="/roadfreight" className="dropdown-item fw-bold">
                ROAD FREIGHT
              </Link>
              <Link to="/customclearance" className="dropdown-item fw-bold">
                CUSTOM CLEARANCE SERVICES
              </Link>
              <Link to="/warehousing" className="dropdown-item fw-bold">
                WAREHOUSING
              </Link>
              <Link to="/dgcargo" className="dropdown-item fw-bold">
                DG CARGO HANDLING
              </Link>
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
          style={{ width: "250px", background: "rgba(0,0,0,0.1)" }}
        >
          <Offcanvas.Header
            closeButton
            style={{ backgroundColor: "transparent" }}
          >
            <Offcanvas.Title>
              <Link to="/">
                <img
                  
                  src="/AWC.png"
                  alt="Logo"
                  style={{ width: "120px" }}
                />{" "}
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ backgroundColor: "transparent" }}>
            <ul
              className="navbar-nav fw-bold"
              style={{ background: "transparent" }}
            >
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
              <NavDropdown
                title="Services"
                id="nav-dropdown"
                className="custom-dropdown-white"
              >
                <Link to="/oceanfreight" className="dropdown-item">
                  OCEAN FREIGHT
                </Link>
                <Link to="/airfreight" className="dropdown-item">
                  AIR FREIGHT
                </Link>
                <Link to="/roadfreight" className="dropdown-item">
                  ROAD FREIGHT
                </Link>
                <Link to="/customservice" className="dropdown-item">
                  CUSTOM CLEARANCE SERVICES
                </Link>
                <Link to="/warehousing" className="dropdown-item">
                  WAREHOUSING
                </Link>
                <Link to="/dgcargo" className="dropdown-item">
                  DG CARGO HANDLING
                </Link>
              </NavDropdown>

              {/* Contact Link */}
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  <button
                    type="button"
                    className="btn btn-lg fw-bold rounded-5"
                    style={{
                      backgroundColor: "#272262",
                      color: "white",
                      marginBottom: "50px",
                    }}
                  >
                    Contact Us
                  </button>
                </Link>
              </li>

              {/* Career Link */}
              <li className="nav-item">
                <Link to="/career" className="nav-link text-light">
                  Career
                </Link>
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </nav>
  );
};

export default HomeNavbar;
