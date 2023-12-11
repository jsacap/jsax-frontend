import './articlePage.css';
import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const apiUrl = `http://localhost:8000/blog/api/${id}/`;  // Use id directly
    axios.get(apiUrl)
      .then(response => {
        setArticle(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch article data', error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const { title, coverPhoto, created, content } = article;

  return (
    <div>
      <div>
        <img src={coverPhoto} alt='Article cover photo' />
        <h1>{title}</h1>
        <p>{created}</p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div>{/* Additional content if needed */}</div>
    </div>
  );
};

export default ArticlePage;
