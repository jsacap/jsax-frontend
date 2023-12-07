import './article.css';
import React from 'react';

const Article = ({ coverPhoto, title, created, content }) => {
  return (
    <div className='jsa__blog-container_article'>
      <div className='jsa__blog-container_article-image'>
        <img src={coverPhoto} alt='Article Cover Photo' />
      </div>
      <div className='jsa__blog-container_article-content'>
        <div>
        <h3>{title}</h3>
        <p>{created}</p>
        <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default Article