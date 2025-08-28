import React from 'react';
import data from './data/portfolio.json';

const Skills = () => (
  <section className="py-12" id="skills">
    <h2 className="text-3xl font-bold mb-4 text-primary">Skills</h2>
    <ul className="flex flex-wrap gap-4">
      {data.skills.map((skill: string) => (
        <li key={skill} className="bg-primary text-white px-4 py-2 rounded-full shadow font-semibold">
          {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;