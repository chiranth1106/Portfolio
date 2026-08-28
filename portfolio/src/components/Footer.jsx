import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="
        border-t
        border-gray-200
        bg-white
        transition-colors duration-300

        dark:border-white/10
        dark:bg-[#07090d]
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Main Footer */}
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              to="/"
              className="
                text-xl font-bold tracking-tight
                text-gray-900
                dark:text-white
              "
            >
              Chiranth
              <span className="text-blue-600 dark:text-blue-500">.</span>
            </Link>

            <p
              className="
                mt-4
                text-sm leading-6
                text-gray-500
                dark:text-gray-400
              "
            >
              Full-Stack Developer building reliable, scalable, and user-focused
              web applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="
                text-sm font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Navigation
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                className="
                  text-sm
                  text-gray-500
                  transition-colors
                  hover:text-gray-900

                  dark:text-gray-400
                  dark:hover:text-white
                "
              >
                Home
              </Link>

              <Link
                to="/about"
                className="
                  text-sm
                  text-gray-500
                  transition-colors
                  hover:text-gray-900

                  dark:text-gray-400
                  dark:hover:text-white
                "
              >
                About
              </Link>

              <Link
                to="/projects"
                className="
                  text-sm
                  text-gray-500
                  transition-colors
                  hover:text-gray-900

                  dark:text-gray-400
                  dark:hover:text-white
                "
              >
                Projects
              </Link>

              <Link
                to="/experience"
                className="
                  text-sm
                  text-gray-500
                  transition-colors
                  hover:text-gray-900

                  dark:text-gray-400
                  dark:hover:text-white
                "
              >
                Experience
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3
              className="
                text-sm font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Connect
            </h3>

            <div className="mt-4 flex gap-3">
              {/* GitHub */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-lg
                  border border-gray-200
                  px-3 py-2
                  text-sm
                  text-gray-600
                  transition-all duration-200
                  hover:border-gray-300
                  hover:bg-gray-50
                  hover:text-gray-900

                  dark:border-white/10
                  dark:text-gray-400
                  dark:hover:border-white/20
                  dark:hover:bg-white/5
                  dark:hover:text-white
                "
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-lg
                  border border-gray-200
                  px-3 py-2
                  text-sm
                  text-gray-600
                  transition-all duration-200
                  hover:border-gray-300
                  hover:bg-gray-50
                  hover:text-gray-900

                  dark:border-white/10
                  dark:text-gray-400
                  dark:hover:border-white/20
                  dark:hover:bg-white/5
                  dark:hover:text-white
                "
              >
                LinkedIn
              </a>
            </div>

            <Link
              to="/contact"
              className="
                mt-5 inline-block
                text-sm font-medium
                text-gray-900
                transition-colors
                hover:text-blue-600

                dark:text-white
                dark:hover:text-blue-400
              "
            >
              Let's work together
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-12
            flex flex-col justify-between gap-4
            border-t
            border-gray-200
            pt-6
            text-sm
            text-gray-500

            md:flex-row

            dark:border-white/10
            dark:text-gray-500
          "
        >
          <p>© {new Date().getFullYear()} Chiranth G.</p>

          <p>
            Built with{" "}
            <span className="text-gray-700 dark:text-gray-300">love</span>{" "}
            <span className="text-red-500">♡</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
