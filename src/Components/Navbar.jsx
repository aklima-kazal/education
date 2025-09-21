"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl">
          <Link href="/">MyLogo</Link>
        </div>
        <div className="hidden md:flex space-x-6 text-black">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 mt-2 gap-y-4">
          <Link href="/" className="block py-2 px-4">
            Home
          </Link>
          <Link href="/about" className="block py-2 px-4">
            About
          </Link>
          <Link href="/services" className="block py-2 px-4">
            Services
          </Link>
          <Link href="/contact" className="block py-2 px-4">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
