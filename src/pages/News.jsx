// eslint-disable-next-line no-unused-vars
import React from 'react';

const News = () => {
  const newsArticles = [
    {
      title: 'New Study Reveals Health Benefits of Mushrooms',
      date: 'November 5, 2024',
      image: 'https://via.placeholder.com/150', // Replace with a real image URL
      excerpt: 'A groundbreaking study highlights the numerous health benefits of consuming mushrooms, including immune system support and cancer-fighting properties.',
    },
    {
      title: 'Top Mushroom Recipes for the Fall Season',
      date: 'October 30, 2024',
      image: 'https://via.placeholder.com/150', // Replace with a real image URL
      excerpt: 'Discover mouth-watering mushroom recipes perfect for fall, from creamy soups to hearty pasta dishes.',
    },
    {
      title: 'How Climate Change is Affecting Mushroom Growth',
      date: 'October 25, 2024',
      image: 'https://via.placeholder.com/150', // Replace with a real image URL
      excerpt: 'Learn about the impact of climate change on mushroom growth patterns and what it means for foragers and mushroom lovers.',
    },
  ];

  return (
    <div
      style={{
        backgroundImage: 'url("news.jpeg")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white', // Adjust text color for better contrast
        padding: '20px',
        paddingTop:'130px'

      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center">Mushroom News</h1>
        {newsArticles.map((article, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              marginBottom: '30px',
              borderBottom: '1px solid #ccc',
              paddingBottom: '20px',
              gap: '15px',
              backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for better readability
              borderRadius: '8px',
              padding: '15px',
            }}
          >
            <img
              src="mcart3.jpg"
              alt={article.title}
              style={{ width: '150px', height: '100px', objectFit: 'cover' }}
            />
            <div>
              <h2>{article.title}</h2>
              <p><strong>{article.date}</strong></p>
              <p>{article.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
