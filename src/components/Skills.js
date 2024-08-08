import React from 'react';
import ReusableFilter from './ReusableFilter';
import { Text } from '@primer/react';
import skillsOptions from '../data/skillsSampleData.json';

/**
 * Skills component
 * This component renders the "Skills" section with a title and a reusable filter component.
 */
const Skills = () => {
  return (
    <section id="skills-section" className="skills-section">
      <Text className="tab-title">Skills</Text>
      <ReusableFilter providedOptions={skillsOptions} />
    </section>
  );
};

export default Skills;
