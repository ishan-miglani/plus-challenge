// src/components/About.js
import React from 'react';
import ReusableFilter from './ReusableFilter';
import { Heading } from '@primer/react';
import skillsOptions from '../data/skillsSampleData.json';

const Skills = () => {
  return (
    <section id="skills-section">
      <Heading as="h1" className="f1-light" sx={{marginTop:'0.5em', marginBottom:'0.5em'}}>Skills</Heading>
      <ReusableFilter providedOptions={skillsOptions} />
    </section>
  );
};

export default Skills;
