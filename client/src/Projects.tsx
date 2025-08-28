import React from 'react';
import data from './data/portfolio.json';

const Projects = () => (
  <section className="py-12" id="projects">
    <h2 className="text-3xl font-bold mb-4 text-primary">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {data.projects.map((project: any) => (
        <div key={project.title} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-primary/10">
          <img src={project.image} alt={project.title} className="w-24 h-24 mb-4 rounded-full border-4 border-primary" />
          <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
          <p className="mb-4">{project.description}</p>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;