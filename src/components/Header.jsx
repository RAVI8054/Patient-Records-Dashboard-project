import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">JC</div>
                    <div>
                        <Link className="text-lg font-semibold" to="/">Jarurat Care</Link>
                        <div className="text-xs text-gray-500">Patient Records Dashboard</div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-lg font-bold">
                    <Link className="text-gray-800 hover:text-indigo-800" to="/">Home</Link>
                    <Link className="text-gray-800 hover:text-indigo-800" to="/patients">Patients</Link>
                    <Link className="text-gray-800 hover:text-indigo-800" to="/about">About</Link>
                </nav>


                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-600 hover:text-indigo-600 focus:outline-none"
                    >
                        {/* Hamburger icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2 text-lg font-bold">
                    <Link className="block text-gray-800 hover:text-indigo-600" to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link className="block text-gray-800 hover:text-indigo-600" to="/patients" onClick={() => setIsOpen(false)}>Patients</Link>
                    <Link className="block text-gray-800 hover:text-indigo-600" to="/about" onClick={() => setIsOpen(false)}>About</Link>
                </nav>
            )}
        </header>
    )
}

export default Header;
