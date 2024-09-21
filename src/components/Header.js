// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-blue-600 text-white fixed top-0 w-full shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <nav className="space-x-4">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
