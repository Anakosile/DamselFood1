import React, { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold text-blue-600">DamselFood</div>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li><a href="#" className="hover:text-blue-500 font-bold">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500 font-bold">Service</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline font-bold">About</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline font-bold">Contact</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
                    <li><a href="#" className="hover:text-blue-500 font-bold">Home</a></li>
                    <li><a href="#" className="hover:text-blue-500 font-bold">Service</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline font-bold">About</a></li>
                    <li><a href="#" className="text-blue-500 hover:underline font-bold">Contact</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;