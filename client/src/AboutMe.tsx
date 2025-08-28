import React from 'react';
import data from './data/portfolio.json';

const AboutMe = () => (
  <section className="py-12 px-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
    <h2 className="text-3xl font-bold mb-4 text-primary">About Me</h2>
    <p className="text-lg">{data.bio}</p>
  </section>
);

export default AboutMe;