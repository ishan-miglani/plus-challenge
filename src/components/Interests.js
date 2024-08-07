// src/components/About.js
import React from 'react';
import ReusableFilter from './ReusableFilter';
import { Heading } from '@primer/react';
import interestsOptions from '../data/interestsSampleData.json';

const Interests = () => {
  return (
    <section id="interests-section" >
      <Heading as="h1" className="f1-light" sx={{marginTop:'0.5em', marginBottom:'0.5em'}}>Interests</Heading>
      <ReusableFilter providedOptions={interestsOptions}/>
    </section>
  );
};

export default Interests;
