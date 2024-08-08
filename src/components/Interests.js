// src/components/About.js
import React from 'react';
import ReusableFilter from './ReusableFilter';
import { Text } from '@primer/react';
import interestsOptions from '../data/interestsSampleData.json';

const Interests = () => {
  return (
    <section id="interests-section" >
      <Text className="tab-title" sx={{marginTop:'0.5em', marginBottom:'0.5em'}}>Interests</Text>
      <ReusableFilter providedOptions={interestsOptions}/>
    </section>
  );
};

export default Interests;
