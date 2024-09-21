// src/components/Profile.js
import React from 'react';
import profilePic from '../assets/profile.jpg'; // Ensure the path to your image is correct

const Profile = () => {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto flex items-center space-x-12"> {/* Increased space between image and text */}
        <img
          src={profilePic}
          alt="Iuliia Obukhova"
          className="w-[300px] h-[300px] object-cover rounded-full border-4 border-blue-4 shadow-xl" // Adjusted size and added rounded-full
        />
        <div className="flex-1 text-left"> {/* Text content aligned to the left */}
          <h1 className="text-4xl font-bold mb-2">Iuliia Obukhova</h1>
          <p className="text-lg text-gray-700 mb-4">
            Full Stack Developer | Passionate about building beautiful and functional web applications
          </p>
          <a
            href="https://github.com/IuliiaObukhova" // Replace with your actual GitHub link
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
