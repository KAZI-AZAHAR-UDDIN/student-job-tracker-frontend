import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4 sm:px-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-center leading-tight">
          Welcome to Student Job Tracker
        </h1>
        <p className="text-md sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 text-center max-w-md sm:max-w-lg">
          Organize and track your job applications effortlessly!
        </p>
        <Link to="/main">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 text-base sm:text-lg font-semibold">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;