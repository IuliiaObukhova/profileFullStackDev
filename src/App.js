// src/App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import IntroAnimation from './components/IntroAnimation'; // Import the Intro Animation

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

function App() {
  const [showIntro, setShowIntro] = useState(true); // State to control intro visibility

  return (
    <AnimatePresence>
      {showIntro && <IntroAnimation onEnd={() => setShowIntro(false)} />} {/* Show intro animation */}

      {!showIntro && ( // Show main content after intro ends
        <motion.div
          className="App font-sans bg-gradient-to-b from-blue-50 to-white min-h-screen"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Header />
          <main className="container mx-auto p-4 space-y-16">
            <Profile />
            <Projects />
            <Skills />
            <Contact />
          </main>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
