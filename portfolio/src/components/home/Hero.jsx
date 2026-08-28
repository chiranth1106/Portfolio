import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-0
          h-125 w-125
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            {/* Availability */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full
                border border-gray-200
                bg-gray-50
                px-3 py-1.5
                text-sm text-gray-600

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Available for opportunities
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-3xl
                text-5xl font-bold
                tracking-tight
                text-gray-900
                sm:text-6xl
                lg:text-7xl

                dark:text-white
              "
            >
              Building digital
              <span className="block text-blue-600 dark:text-blue-500">
                experiences.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-lg leading-8
                text-gray-500

                dark:text-gray-400
              "
            >
              I'm a Full-Stack Developer focused on building reliable, scalable,
              and user-focused web applications.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="
                  rounded-lg
                  bg-gray-900
                  px-5 py-3
                  text-sm font-medium
                  text-white
                  transition-all duration-200
                  hover:bg-gray-800
                  hover:-translate-y-0.5

                  dark:bg-white
                  dark:text-gray-900
                  dark:hover:bg-gray-200
                "
              >
                View Projects →
              </Link>

              <Link
                to="/contact"
                className="
                  rounded-lg
                  border border-gray-200
                  bg-white
                  px-5 py-3
                  text-sm font-medium
                  text-gray-700
                  transition-all duration-200
                  hover:bg-gray-50

                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                  dark:hover:bg-white/10
                "
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Right - Dashboard */}
          <div className="relative">
            <div
              className="
                rounded-2xl
                border border-gray-200
                bg-white
                p-6
                shadow-2xl
                shadow-gray-200/50

                dark:border-white/10
                dark:bg-[#0d1117]
                dark:shadow-black/30
              "
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    System Overview
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Portfolio infrastructure
                  </p>
                </div>

                <span
                  className="
                    rounded-full
                    bg-green-500/10
                    px-2.5 py-1
                    text-xs font-medium
                    text-green-600
                    dark:text-green-400
                  "
                >
                  Operational
                </span>
              </div>

              {/* Status */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Frontend
                  </span>

                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    React
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Backend
                  </span>

                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Python
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Database
                  </span>

                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    SQL
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-200 dark:border-white/10" />

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    01+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">Years</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    06+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">Projects</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                    10+
                  </p>

                  <p className="mt-1 text-xs text-gray-500">Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
