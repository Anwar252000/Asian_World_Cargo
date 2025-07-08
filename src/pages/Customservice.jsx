import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you are using React Router

const Customservice = () => {
  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundImage: 'url("cc.jpeg")', // Replace with your image URL
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
          / <Link to="/Customservice" style={{ color: 'white', fontSize: '20px' }}> Custom Clearance Services </Link>
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
        <h1 style={{ color: '#0149ae' }}>Custom Clearance Services</h1>

        <p>
          Asian World is here to help customers & overseas partners to get all custom paperwork completed and deliver shipments to the consignee’s door.
        </p>

        <p>
          Paperwork in logistics is one of the most challenging tasks to perform. However, as a reliable service provider, we ensure full compliance with all required laws and regulations for smooth clearance of shipments.
        </p>
      </div>
    </div>
  );
};

export default Customservice;
