import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div
        className="
          mx-auto
          flex
          h-[var(--header-height)]
          w-full
          max-w-7xl
          items-center
          justify-between
          px-[var(--page-padding)]
        "
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="
            shrink-0
            text-xl
            font-bold
            tracking-tight
            text-white
          "
        >
          Chiranth<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-8

            lg:flex
          "
        >
          <Link
            to="/"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            Home
          </Link>

          <Link
            to="/about"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            About
          </Link>

          <Link
            to="/projects"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            Projects
          </Link>

          <Link
            to="/experience"
            className="
              text-sm
              text-gray-400
              transition
              hover:text-white
            "
          >
            Experience
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="
            hidden
            shrink-0
            rounded-lg
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-white/10

            lg:block
          "
        >
          Let's Talk →
        </Link>

        {/* Mobile / Tablet Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/5
            text-lg
            text-gray-300
            transition
            hover:bg-white/10
            hover:text-white

            lg:hidden
          "
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div
          className="
            border-t
            border-white/10
            bg-black/95
            backdrop-blur-xl

            lg:hidden
          "
        >
          <nav
            className="
              mx-auto
              flex
              w-full
              max-w-7xl
              flex-col
              px-[var(--page-padding)]
              py-4
            "
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-gray-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-gray-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              About
            </Link>

            <Link
              to="/projects"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-gray-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              Projects
            </Link>

            <Link
              to="/experience"
              onClick={closeMenu}
              className="
                rounded-lg
                px-4
                py-3
                text-sm
                text-gray-400
                transition
                hover:bg-white/5
                hover:text-white
              "
            >
              Experience
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                mt-2
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-4
                py-3
                text-center
                text-sm
                font-medium
                text-white
                transition
                hover:bg-white/10
              "
            >
              Let's Talk →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
