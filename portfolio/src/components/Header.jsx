import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white"
        >
          Chiranth<span className="text-blue-500">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            About
          </Link>

          <Link
            to="/projects"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Projects
          </Link>

          <Link
            to="/experience"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            Experience
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 md:block"
        >
          Let's Talk →
        </Link>

        {/* Mobile Menu */}
        <button className="text-gray-300 md:hidden">
          ☰
        </button>

      </div>
    </header>
  );
};

export default Header;