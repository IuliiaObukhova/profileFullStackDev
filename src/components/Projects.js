// src/components/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Virtual Piano',
    description: 'A web-based piano application built with JavaScript and Web Audio API.',
    githubLink: 'https://github.com/yourusername/virtual-piano',
  },
  {
    title: 'Peer Tutor System',
    description: 'An application connecting students and tutors, developed with React and Node.js.',
    githubLink: 'https://github.com/yourusername/peer-tutor',
  },
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="my-16"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h4 className="text-xl font-semibold">{project.title}</h4>
            <p className="text-gray-600 mb-2">{project.description}</p>
            <a 
              href={project.githubLink} 
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
