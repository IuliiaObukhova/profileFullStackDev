// src/components/IntroAnimation.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const introVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 1 } },
};

function IntroAnimation({ onEnd }) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      onEnd(); // Callback to remove the intro animation
    }, 3000); // Duration of the intro animation
    return () => clearTimeout(timer);
  }, [onEnd]);

  if (isComplete) return null; // Remove the component after the animation ends

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-blue-600 z-50"
      variants={introVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-white text-4xl font-bold">Welcome to Iuliia's Portfolio</h1>
    </motion.div>
  );
}

export default IntroAnimation;
