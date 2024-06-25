// components/Navbar.js

import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 italic bg-gray-50 w-full flex justify-between items-center mx-auto px-4 h-16 z-10 backdrop-filter backdrop-blur-3xl bg-opacity-90 border-b-2 border-gray-300">
            {/* Left side: Brand name */}
            <a href="/" className="text-xl font-bold text-gray-800">JS-PORTFOLIO</a>

            {/* Right side: About Us link */}
            <a href="#contact" className="text-gray-600 hover:text-gray-800">About Us</a>
        </nav>
    );
};

export default Navbar;
