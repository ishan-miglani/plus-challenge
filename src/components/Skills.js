// src/components/About.js
import React from 'react';
import ReusableFilter from './ReusableFilter';
import { Text } from '@primer/react';
import skillsOptions from '../data/skillsSampleData.json';

const Skills = () => {
  return (
    <section id="skills-section" className="skills-section">
      <Text className="tab-title">Skills</Text>
      <ReusableFilter providedOptions={skillsOptions} />
    </section>
  );
};

export default Skills;
