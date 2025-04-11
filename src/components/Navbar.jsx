import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <Link to="/" className="text-lg sm:text-xl font-bold truncate">
            Job Tracker
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/main"
              className="px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 transition duration-200"
            >
              Tracker
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;