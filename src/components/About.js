// src/components/About.js
import React from 'react';
import { Heading, Box, Text } from '@primer/react';
import rooneyImg from '../data/rooney.jpg';

const About = () => {
  return (
    <section id="about-section">
      <Heading as="h1" className="f1-light" sx={{marginTop:'0.5em', marginBottom:'0.5em'}}>About Me</Heading>
      <Box className="d-flex flex-justify-between flex-items-start mt-3" sx={{ width: '100%' }}>
        <Box className="border p-3" sx={{ flex: 1, marginRight: '16px', backgroundColor: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={rooneyImg} alt="Your Name" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Text as="p"><strong>City:</strong> New York</Text>
          <Text as="p"><strong>Hometown:</strong> New Delhi, India</Text>
          <Text as="p"><strong>Pets:</strong> Zeus the dog</Text>
          <Text as="p"><strong>Status:</strong> Single</Text>
        </Box>
      </Box>
    </section>
  );
};

export default About;
