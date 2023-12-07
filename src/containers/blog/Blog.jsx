import React, { useState, useEffect } from 'react';
import './blog.css';
import parse from 'html-react-parser';
import Article from '../../components/article/Article';
import axios from 'axios';



const Blog = () => {
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

    const featureFourArticlesTitles = [
      'BTC Newsletter Issue #1',
      'BTC Newsletter Issue #3',
      'BTC Newsletter Issue #6',
      'Recession Deep Dive (FY22)'
    ];
    
  const featureFourArticles = articles.filter(articles => featureFourArticlesTitles.includes(articles.title))  
  const featureArticle = articles.find(article => article.title === 'Calc App');
  const articlesGroupB = [3, 6, 8];
  return (
    <div className='jsa__blog section__padding'>
      <div className='jsa__blog-heading'>
        <h1 className='gradient__text'>Blog Articles</h1>
      </div>
      <div className='jsa__blog-container'>
        <div className='jsa__blog-container_groupA'>
      {featureArticle && (
        <Article key={featureArticle.id}
        coverPhoto={`http://localhost:8000${featureArticle.cover_photo}`}
        title={featureArticle.title}
        created={featureArticle.created}
        content={parse(`${featureArticle.content.slice(0, 800)}.........`)}/>
      )}
        </div>


        <div className='jsa__blog-container_groupB'>
          {featureFourArticles.map((article, index) => (
          <Article key={index} 
          coverPhoto={`http://localhost:8000${article.cover_photo}`} 
          title={article.title} created={article.created} 
          content={parse(`${article.content.slice(0, 300)}...`)} 
            />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Blog