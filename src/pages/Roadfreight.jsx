import React from 'react';
import { Link } from 'react-router-dom';

const Roadfreight = () => {
  return (
    <div>
      {/* Full-Screen Background Image with Dim Effect */}
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundImage: 'url("road.jpg")',
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
          <Link to="/Roadfreight" style={{ color: 'white', fontSize: '20px' }}> Road Freight </Link>
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
        <h1 style={{ color: '#0149ae' }}>Road Freight</h1>

        <p>
          Finding the right solution for your business matters to us. Whether you have a single pallet, a few pallets, a full load or odd-sized goods, we are able to help you deliver the goods safely to your destinations through reliable truckers.
        </p>

        <p>
          Asian World has a complete range of road transport solutions to arrange ex-works and/or door deliveries throughout the globe.
        </p>

        <h2 style={{ color: '#0149ae' }}>Key Features</h2>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: 'fit-content', margin: '0 auto' }}>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{marginBottom:"2px", backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Carefully selected reliable truckers
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{marginBottom:"2px", backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Flexible options for LTL (Less than Truck Load) & FTL (Full Truck Load)
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{marginBottom:"2px", backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Availability of special vehicles for out-gauge/over-dimension project cargo
          </li>
          <li style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ backgroundColor: "#272262", color: "white", marginRight: "5px", padding: "2px 5px", borderRadius: "3px" }}>&#10003;</span>
            Efficient pick-up/handling of Export Shipments and handling/delivery of Import Shipments
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Roadfreight;