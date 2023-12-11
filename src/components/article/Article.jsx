import { useNavigate } from 'react-router-dom';
import './article.css';
import React from 'react';
import parse from 'html-react-parser';

const Article = ({ id, coverPhoto, title, created, content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const articleDetails = {
      id,
      title,
      created,
      coverPhoto,
      content: typeof content === 'string' ? content : undefined,
    };

    navigate(`/blog/article/${id}`, { state: articleDetails });
  };

  return (
    <div className='jsa__blog-container_article' onClick={handleClick}>
      <div className='jsa__blog-container_article-image'>
        <img src={coverPhoto} alt='Article Cover Photo' />
      </div>
      <div className='jsa__blog-container_article-content'>
        <div>
          <h3>{title}</h3>
          <p>{created}</p>
          parse({content})
        </div>
      </div>
    </div>
  );
};

export default Article;
