// eslint-disable-next-line no-unused-vars
import React from 'react';

const Herbs = () => {
  const blogPosts = [
    {
      title: 'The Science Behind Mushroom Cultivation',
      date: 'November 15, 2024',
      content: 'Learn about the biology and environmental requirements for cultivating mushrooms, including substrate choice, light, and humidity.',
    },
    {
      title: 'Mushroom Myths and Facts',
      date: 'November 8, 2024',
      content: 'Debunk common myths and learn surprising facts about mushrooms, from their nutritional value to their ecological impact.',
    },
    {
      title: 'Top 5 Edible Mushroom Species',
      date: 'October 29, 2024',
      content: 'Explore five of the most popular edible mushroom species, their culinary uses, and tips for safe foraging.',
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("mcart10.jpg")', // Replace with the background image URL for Mushroom3
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
        paddingTop:'130px'

      }}
    >
      {/* Main content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '8px', padding: '20px' }}>
        <h1 className="text-center">Mushroom3 Blog</h1>
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

export default Herbs;
