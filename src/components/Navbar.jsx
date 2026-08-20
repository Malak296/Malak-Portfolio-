import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-white/70 backdrop-blur-md border border-pink-100/80 rounded-2xl shadow-sm px-6 py-3 flex items-center justify-between transition-all duration-300">
      {/* Logo */}
      <a href="#" className="text-lg font-extrabold text-slate-800 tracking-tight flex items-center gap-1.5 hover:opacity-80 transition-opacity">
        <span className="text-rose-400">🎀</span>
        <span>{personalInfo?.name || 'Malak'}</span>
      </a>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 px-3 py-1.5 rounded-xl transition-all duration-200"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="text-xs font-bold text-slate-700 bg-rose-200 hover:bg-rose-300 px-4 py-2 rounded-xl shadow-xs transition-all duration-200 hover:-translate-y-0.5"
        >
          Let's Talk ✨
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-slate-700 focus:outline-none text-xl"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg border border-pink-100 rounded-2xl p-4 shadow-lg flex flex-col gap-3 text-center md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold text-slate-600 hover:text-sky-600 py-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;