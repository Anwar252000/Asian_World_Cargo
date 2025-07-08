// eslint-disable-next-line no-unused-vars
import React from 'react';

const KnowledgeCenter = () => {
  const knowledgeTopics = [
    {
      title: 'Introduction to Mushrooms',
      image: 'https://via.placeholder.com/150',
      description: 'Learn about the different types of mushrooms, their life cycle, and why they are so important to ecosystems around the world.',
    },
    {
      title: 'Health Benefits of Mushrooms',
      image: 'https://via.placeholder.com/150',
      description: 'Explore the various health benefits of mushrooms, including boosting immunity, providing antioxidants, and supporting gut health.',
    },
    {
      title: 'How to Grow Your Own Mushrooms',
      image: 'https://via.placeholder.com/150',
      description: 'A guide on how to cultivate mushrooms at home, from choosing the right species to setting up the perfect growing environment.',
    },
    {
      title: 'Mushroom Foraging Tips',
      image: 'https://via.placeholder.com/150',
      description: 'Discover tips for safely foraging wild mushrooms, identifying edible varieties, and understanding key safety guidelines.',
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("/kcenter.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        padding: '20px',
        paddingTop: '130px', // Adjust padding to match the height of your navbar
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center">Knowledge Center</h1>
        {knowledgeTopics.map((topic, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              marginBottom: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '20px',
              gap: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '8px',
              padding: '15px',
            }}
          >
            <img
              src="mcart2.jpg"
              alt={topic.title}
              style={{ width: '150px', height: '100px', objectFit: 'cover' }}
            />
            <div>
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeCenter;
