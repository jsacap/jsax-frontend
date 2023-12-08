import React, { useState, useEffect } from 'react';
import './blogPage.css';
import Article from '../../components/article/Article';
import axios from 'axios';
import parse from 'html-react-parser';

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/blog/api/';
    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch data', error);
      });
  }, []);

  return (
    <div className='jsa__blog-page'>
      <div className='jsa__header-content'>
        <h1 className='gradient__text'>BLOG</h1>
      </div>
      <div className='jsa__blog-page-container'>
        {articles.map((article, index) => (
          <Article
            key={index}
            coverPhoto={`http://localhost:8000${article.cover_photo}`}
            title={article.title}
            created={article.created}
            content={parse(`${article.content.slice(0, 300)}...`)}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
