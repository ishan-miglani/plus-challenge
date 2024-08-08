// src/components/About.js
import React from 'react';
import ReusableFilter from './ReusableFilter';
import { Text } from '@primer/react';
import interestsOptions from '../data/interestsSampleData.json';

/**
 * Interests component
 * This component renders the "Interests" section with a title and a reusable filter component.
 */
const Interests = () => {
  return (
    <section id="interests-section" className="interests-section" >
      <Text className="tab-title">Interests</Text>
      <ReusableFilter providedOptions={interestsOptions}/>
    </section>
  );
};

export default Interests;
