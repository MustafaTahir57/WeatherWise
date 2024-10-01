import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">WeatherWise</a>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        {/* Links - Hidden on mobile, shown on medium screens and larger */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">Home</a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">About</a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu - Shown when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="space-y-2 p-4">
            <li>
              <a href="#" className="block text-gray-400 hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="block text-gray-400 hover:text-white">About</a>
            </li>
            <li>
              <a href="#" className="block text-gray-400 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
