import React from 'react';
import { Article, Brand, CTA, Featrue, Navbar } from './components';
import { Blog, Feature, Footer, Header, Posibility, WhatGPT3 } from './containers';
import './App.css';

function App() {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Featrue />
        <Posibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;