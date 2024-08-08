import React from 'react';
import { TabNav } from '@primer/react';

function Navbar({ onSelectTab, selectedTab }) {
  return (
    <TabNav aria-label="Main">
      <TabNav.Link href="#about" selected={selectedTab === 'about'} className="ml-1" onClick={() => onSelectTab('about')}>
        About Me
      </TabNav.Link>
      <TabNav.Link href="#skills" selected={selectedTab === 'skills'} onClick={() => onSelectTab('skills')}>
        Skills
      </TabNav.Link>
      <TabNav.Link href="#interests" selected={selectedTab === 'interests'} onClick={() => onSelectTab('interests')}>
        Interests
      </TabNav.Link>
      <TabNav.Link href="#contact" selected={selectedTab === 'contact'} onClick={() => onSelectTab('contact')}>
        Contact
      </TabNav.Link>
    </TabNav>
  );
}

export default Navbar;