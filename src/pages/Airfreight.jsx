import React from 'react';
import { Link } from 'react-router-dom';

const Airfreight = () => {
  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundImage: 'url("air.jpeg")', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          filter: 'brightness(0.8)', // Dim effect
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
          <Link to="/airfreight" style={{ color: 'white', fontSize: '20px' }}> Air Freight </Link>
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          color: 'black', // Simple black text
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#0149ae' }}>Air Freight</h1>

        <p>
          For critical shipment deliveries, Asian World provides comprehensive and reliable air freight services specially designed to meet customers’ needs through our global alliances. We can arrange your shipments to be collected and forwarded Door-to-Airport or Door-to-Door. We also offer cross-country trade.
        </p>
        <p>
          We work closely with all the major airlines with whom we have built strong relationships, enabling us to achieve excellent buying ability and space allocation.
        </p>
        <p>
          We also specialize in handling hazardous and dangerous cargo, having the necessary qualifications and licenses from competent authorities through our international network alliances.
        </p>

        <h2 style={{ color: '#0149ae' }}>Key Features</h2>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content', margin: '0 auto' }}>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px", marginBottom:"2px" }}>&#10003;</span>
            Highly competitive rates
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" ,marginBottom:"2px"}}>&#10003;</span>
            Fast connections and lowest transit time
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px",marginBottom:"2px" }}>&#10003;</span>
            Dedicated and experienced team to update end-to-end status
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Capable of handling all types of goods
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Airfreight;