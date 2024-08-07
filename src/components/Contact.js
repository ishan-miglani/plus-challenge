// // src/components/About.js
// import React from 'react';
// import { Heading } from '@primer/react';

// const Contact = () => {
//   return (
//     <section id="contact-section">
//         <Heading as="h1" className="f1-light" sx={{marginTop:'0.5em', marginBottom:'0.5em'}}>Contact</Heading>
//         <a href='https://www.linkedin.com/in/ishanmiglani/'>LinkedIn</a>
//         <p><strong>Phone Number:</strong> (fill me out)</p>
//         <p><strong>Email:</strong> (fill me out)</p>
//         <p><strong>Address:</strong> (fill me out)</p>
//     </section>
//   );
// };

// export default Contact;


import React from 'react';
import { Heading, Box, Text, Link } from '@primer/react';

const Contact = () => {
  return (
    <section id="contact-section">
      
        <Heading as="h1" className="f1-light" sx={{  marginTop: '0.5em', marginBottom: '0.5em' }}>Contact</Heading>
        <Box>
        <Link href="https://www.linkedin.com/in/ishanmiglani/" target="_blank">LinkedIn</Link>
        <Text as="p" sx={{ marginTop: '0.5em' }}><strong>Phone Number:</strong> +1-347-567-4827 </Text>
        <Text as="p" sx={{ marginTop: '0.5em' }}><strong>Email:</strong> ishanmiglani@nyu.edu </Text>
        <Text as="p" sx={{ marginTop: '0.5em' }}><strong>Address:</strong> Brooklyn, New York, USA </Text>
      </Box>
    </section>
  );
};

export default Contact;