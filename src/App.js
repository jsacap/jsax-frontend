import React from 'react';

import { Footer, Blog, Features, Trading, Header } from './containers';
import { Cta, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Trading />
    <Brand />
    <Features />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;