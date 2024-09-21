// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="my-16 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-blue-800 mb-6">Contact Me</h3>
      <p className="text-lg text-gray-700">
        Feel free to reach out via{' '}
        <a href="mailto:IuliiaObukhovaa@gmail.com" className="text-blue-500 hover:underline">
          email
        </a>{' '}
        or connect with me on{' '}
        <a href="https://www.linkedin.com/in/iuliiaobukhova" className="text-blue-500 hover:underline">
          LinkedIn
        </a>.
      </p>
    </motion.section>
  );
}

export default Contact;
