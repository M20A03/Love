import React from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Proposal from './components/Proposal';
import BackgroundEffects from './components/BackgroundEffects';
import './index.css';

function App() {
  return (
    <>
      <BackgroundEffects />
      <Hero />
      <Story />
      <Gallery />
      <Proposal />
    </>
  );
}

export default App;
