// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { Navbar } from 'react-bootstrap';
// import Navbar from './Navbar'; // Adjust the path as necessary to import your Navbar

const Mushroom = () => {
  const blogPosts = [
    {
      title: 'The Wonders of Mushrooms',
      date: 'November 5, 2024',
      content: 'Mushrooms are fascinating organisms with incredible benefits for health, cuisine, and the ecosystem. Let\'s explore some of the most interesting types and their uses.',
    },
    {
      title: 'Health Benefits of Eating Mushrooms',
      date: 'October 30, 2024',
      content: 'Mushrooms are packed with essential vitamins, minerals, and antioxidants. They can boost your immune system and improve overall wellness.',
    },
    {
      title: 'Foraging Tips for Wild Mushrooms',
      date: 'October 20, 2024',
      content: 'Before heading into the woods, learn how to identify edible mushrooms and understand the safety precautions to avoid toxic varieties.',
    },
  ];

  return (
   
     



    
    <div
      style={{
        backgroundImage: 'url("background.jpeg")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white', // Adjust text color for better contrast
        padding: '20px',
        paddingTop:'130px'
      }}
    >      

      {/* Main content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '8px', padding: '20px' }}>
        <h1 className="text-center">Mushroom Blog</h1>
        {blogPosts.map((post, index) => (
          <div key={index} style={{ marginBottom: '30px' }}>
            <h2>{post.title}</h2>
            <p><strong>{post.date}</strong></p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mushroom;
