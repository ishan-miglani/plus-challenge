// src/components/About.js
import React from 'react';
import { Box, Text } from '@primer/react';
import rooneyImg from '../data/rooney.jpg';

const About = () => {
  return (
    <section id="about-section" className="about-section">

        <Box>
        <Text className="tab-title">About Me</Text>
        </Box>
      
        <Box className="about-content-panel">
        
            <Box sx={{flex:1,display:'flex'}}>
              <img src={rooneyImg} alt="Your Name" style={{height:'auto', width: '100%'}} />
            </Box>

            <Box sx={{ flex: 1 }}>
                <Text className="about-section-text-headings" as="p"> City:&nbsp;
                  <Text as="span" className="about-section-text-description">
                    New York
                  </Text>
                </Text>

                <Text className="about-section-text-headings" as="p"> Hometown:&nbsp;
                  <Text as="span" className="about-section-text-description">
                    New Delhi, India
                  </Text>
                </Text>


                <Text className="about-section-text-headings" as="p"> Pets:&nbsp;
                  <Text as="span" className="about-section-text-description">
                    Zeus
                  </Text>
                </Text>

                <Text className="about-section-text-headings" as="p"> Status:&nbsp;
                  <Text as="span" className="about-section-text-description">
                    Single 
                  </Text>
                </Text>


            </Box>
        </Box>
    </section>
  );
};

export default About;
