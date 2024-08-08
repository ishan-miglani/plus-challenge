import React from 'react';
import { Box, Text, Link } from '@primer/react';
import '../App.css';

const Contact = () => {
  return (
    <section id="contact-section" className="contact-section">
      
        <Text className="tab-title">Contact</Text>
        <Box>
        
        
        <Text className="contact-section-text-headings" as="p">
        <Link as="a" href="https://www.linkedin.com/in/ishanmiglani/" target="_blank">LinkedIn</Link>
        </Text>


        <Text className="contact-section-text-headings" as="p"> Phone Number:&nbsp;
          <Text as="span" className="contact-section-text-description">
            +1-347-567-4827 
          </Text>
        </Text>


        <Text className="contact-section-text-headings" as="p"> Email:&nbsp;  
          <Text as="span" className="contact-section-text-description">
            ishanmiglani@nyu.edu 
          </Text>
        </Text>


        <Text className="contact-section-text-headings" as="p"> Address:&nbsp;
          <Text as="span" className="contact-section-text-description">
            Brooklyn, New York, USA 
          </Text>
        </Text>

      </Box>
    </section>
  );
};

export default Contact;