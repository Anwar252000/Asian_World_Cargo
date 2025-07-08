import React from 'react';
import { Link } from 'react-router-dom';

const Oceanfreight = () => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '60vh',
          backgroundImage: 'url("ocean.jpeg")',
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
        <div
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            color: 'white',
          }}
        >
          <Link to="/" style={{ color: 'white', fontSize: '20px' }}>
            Home
          </Link>{' '}
          / <Link to="/oceanfreight" style={{ color: 'white', fontSize: '20px' }}>
            Ocean Freight
          </Link>
        </div>
      </div>

      <div
        style={{
          color: 'black',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ color: '#272262' }}>Ocean Freight</h1>

        <p>
          We are continuing to invest in our Ocean Freight services, and our
          team prides itself on offering very competitive rates for both import
          and export markets.
        </p>
        <p>
          Our team has the expertise to handle a wide variety of ‘general and
          dangerous’ goods, and all are highly trained in the required
          analytical skills. We also understand the complexities during peak
          seasons, so we always have multiple options to load your containers
          timely.
        </p>

        <h2 style={{ color: '#272262' }}>Key Features</h2>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start', // Align to the left
            width: 'fit-content',
            margin: '0 auto',
          }}
        >
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            Selection of reliable & compatible Shipping Lines
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            Efficient and renowned Foreign Agents
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            Competitive Freight Rates with multiple options
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            Professional cargo handling
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            Dedicated operational staff
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            Door-to-door shipments
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            CFS/CY handling (multiple pick-ups, single FCL delivery)
          </li>
          <li>
            <span
              style={{
                backgroundColor: '#272262',
                color: 'white',
                marginRight: '5px',
                padding: '2px 5px',
                borderRadius: '3px',
              }}
            >
              &#10003;
            </span>
            CY/CFS handling (single/FCL pick-up, multiple deliveries)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Oceanfreight;