import './articlePage.css';
import React from 'react';
import parse from 'html-react-parser';
import { useLocation } from 'react-router-dom';

const ArticlePage = () => {
    const location = useLocation();
    const { state } = location;

    if (!state) {
        return <div>No Article Available </div>;
    }

    const { title, coverPhoto, created, content } = state;

    return (
        <div>
            <div>
                <img src={coverPhoto} alt='Article cover photo' />
                <h1>{title}</h1>
                <p>{created}</p>
                <p>{parse(content)}</p>
            </div>
            <div>
            </div>
        </div>
    );
}

export default ArticlePage;
