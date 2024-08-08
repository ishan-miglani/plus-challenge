// src/App.js
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import { BaseStyles, Box,ThemeProvider } from '@primer/react';
import '@primer/css/dist/primer.css';

function App() {
  const [selectedTab, setSelectedTab] = useState('about');

  const [prevTab, setPrevTab] = useState(null);
  const [isFading, setIsFading] = useState(false);

  // const handleTabSelect = (tab) => {
  //   setSelectedTab(tab);
  // };

    const handleTabSelect = (tab) => {
      if (tab !== selectedTab) {
        setIsFading(true);
        setPrevTab(selectedTab);
        setTimeout(() => {
          setSelectedTab(tab);
          setIsFading(false);
        }, 250);
      } // Duration of fade-out animation
    };

    const renderPrevSection = () => {
      switch (prevTab) {
        case 'about':
          return <About />;
        case 'skills':
          return <Skills />;
        case 'interests':
          return <Interests />;
        case 'contact':
          return <Contact />;
        default:
          return null;
      }
    };

  const renderSection = () => {
    switch (selectedTab) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'interests':
        return <Interests />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <ThemeProvider>
      <BaseStyles>
      <Box className="padding-main-container">
        <Box className="padding-large">
          <Navbar className="padding-large" onSelectTab={handleTabSelect} selectedTab={selectedTab} />
          </Box>
          <Box>
          <div className={isFading ? 'anim-fade-out custom-fade' : 'anim-fade-in custom-fade'}>
              {isFading ? renderPrevSection() : renderSection()}
          </div>
        </Box>
      </Box>
       
      </BaseStyles>
    </ThemeProvider>
  );
}

export default App;
