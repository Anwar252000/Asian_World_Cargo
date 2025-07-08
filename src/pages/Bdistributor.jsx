// eslint-disable-next-line no-unused-vars
import React from 'react';

const Bdistributor = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("distributor.jpeg")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
        paddingTop:'130px'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px', padding: '30px' }}>
        <h1 style={{ textAlign: 'center', color: '#FFD700', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}>Become a Distributor</h1>
        
        <p>
          We are excited to offer you the opportunity to become a distributor of our premium mushroom products. Join us in promoting sustainable agriculture and the health benefits of mushrooms while building a profitable business.
        </p>
        
        <h2 style={{ color: '#FFD700' }}>Why Become a Distributor?</h2>
        <ul>
          <li>**Exclusive Access:** Get exclusive access to our products and promotions.</li>
          <li>**Support & Training:** Receive training and ongoing support to help you succeed.</li>
          <li>**Flexible Income:** Enjoy a flexible income potential based on your efforts and commitment.</li>
        </ul>
        
        <h2 style={{ color: '#FFD700' }}>Requirements</h2>
        <ul>
          <li>Passion for mushrooms and agriculture.</li>
          <li>Ability to meet minimum sales targets.</li>
          <li>Strong communication skills and a willingness to learn.</li>
        </ul>
        
        <h2 style={{ color: '#FFD700' }}>How to Apply</h2>
        <p>
          If you are ready to embark on this exciting journey, please fill out the application form below. We will review your application and get back to you as soon as possible.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            required
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            placeholder="Tell us about yourself and why you want to become a distributor"
            required
            rows="4"
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#FFD700', border: 'none', borderRadius: '5px', color: 'black', fontWeight: 'bold', cursor: 'pointer' }}>
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bdistributor;
