// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'Git', 'WebGL'];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="my-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 py-2 px-4 rounded-full shadow">
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
