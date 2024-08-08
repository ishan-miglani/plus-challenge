import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Contact from './components/Contact';
import { BaseStyles, Box,ThemeProvider } from '@primer/react';
import '@primer/css/dist/primer.css';

/**
 * App component
 * The main component of the application which includes Navbar and renders all the tabs
 */
function App() {

  // State to manage the currently selected tab
  const [selectedTab, setSelectedTab] = useState('about');

  // State to manage the previously selected tab for animation purposes
  const [prevTab, setPrevTab] = useState(null);
  // State to manage the fading animation
  const [isFading, setIsFading] = useState(false);


  // This function sets the previous tab and triggers the fade-out animation before changing the selected tab.
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
  // Render the previously selected section for animation purposes
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

  // Render the currently selected section
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
          {/* Section content with fade-in and fade-out animations */}
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
