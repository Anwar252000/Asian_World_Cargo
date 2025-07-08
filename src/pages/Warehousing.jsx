import React from 'react';
import { Link } from 'react-router-dom';

const Warehousing = () => {
  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundImage: 'url("Warehousing.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          filter: 'brightness(0.8)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Centered Breadcrumb Navigation */}
        <div
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            color: "white",
          }}
        >
          <Link to="/" style={{ color: 'white', fontSize: '20px' }}>
            Home
          </Link>{' '}
          <Link to="/Warehousing" style={{ color: 'white', fontSize: '20px' }}> Warehousing </Link>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          color: 'black',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#0149ae' }}>Warehousing</h1>

        <p>
          Does your business require fast, efficient, and trouble-free warehousing & distribution services?
          If so, look no further. Asian World provides secure warehousing and distribution services.
          Your items are available for shipment around the clock.
        </p>
        <p>
          Our professional customer service staff is always on-site for immediate retrieval and preparation
          for urgent delivery.
        </p>

        <h2 style={{ color: '#0149ae' }}>Key Features</h2>
        <ul style={{ 
          listStyle: 'none', 
          paddingLeft: '0', 
          textAlign: 'left', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          width: 'fit-content', 
          margin: '0 auto' 
        }}>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ marginBottom:"2px",backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Fully secured Warehousing
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ marginBottom:"2px",backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Repacking, Re-labeling and consolidation of multiple products
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ marginBottom:"2px",backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Long-term & short-term storage
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{marginBottom:"2px", backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Indoor & outdoor facilities
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{marginBottom:"2px", backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Loading & unloading services
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Crating and transportation services available
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Warehousing;