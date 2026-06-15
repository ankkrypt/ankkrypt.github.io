"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["About", "Skills", "Projects", "Stats", "Contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo with Profile Picture */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img
            src="https://github.com/ankkrypt.png"
            alt="Ankit Dhotre"
            width={40}
            height={40}
            className="rounded-full border-2 border-[#22d3ee] w-10 h-10"
          />
          <span className="text-lg sm:text-xl font-bold text-[#22d3ee]">Ankit Dhotre</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-300 hover:text-[#22d3ee] transition-colors duration-200 text-sm"
            >
              {item}
            </Link>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1_1N0GchPe1oANTVxYEiM31L7baZ4WNRx"
            className="px-4 py-2 bg-[#22d3ee] text-[#020617] rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors duration-200 text-sm"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#22d3ee] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-[#1e293b] py-4">
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-300 hover:text-[#22d3ee] transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
            <a
              href="https://drive.google.com/uc?export=download&id=1_1N0GchPe1oANTVxYEiM31L7baZ4WNRx"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 bg-[#22d3ee] text-[#020617] rounded-lg font-semibold hover:bg-[#06b6d4] transition-colors duration-200 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
