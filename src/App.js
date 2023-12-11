import React from 'react';
import { Footer, Blog, Features, Trading, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogPage, ArticlePage } from './pages';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Routes>
        <Route path="/blog" element={<BlogPageLayout />} />
        <Route path="/blog/article/:id" element={<ArticlePage />} />
        <Route path="/" element={<HomeLayout />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

const BlogPageLayout = () => (
  <>
    <BlogPage />
  </>
);

const HomeLayout = () => (
  <>
    <Header />
    <Trading />
    <Brand />
    <Features />
    <Cta />
    <Blog />
  </>
);

export default App;
