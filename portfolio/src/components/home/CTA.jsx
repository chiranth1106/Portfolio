import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-[#07090d]">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-gray-200
            bg-gray-50
            px-6 py-16
            text-center
            sm:px-12

            dark:border-white/10
            dark:bg-[#0d1117]
          "
        >
          {/* Background Glow */}
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-0
              h-64 w-64
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-500/10
              blur-3xl
            "
          />

          {/* Content */}
          <div className="relative mx-auto max-w-2xl">
            {/* Label */}
            <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
              Have a project in mind?
            </p>

            {/* Heading */}
            <h2
              className="
                mt-4
                text-3xl font-bold tracking-tight
                text-gray-900
                sm:text-4xl

                dark:text-white
              "
            >
              Let's build something
              <span className="text-blue-600 dark:text-blue-500">
                {" "}
                great together.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mx-auto mt-5
                max-w-xl
                text-base leading-7
                text-gray-500

                dark:text-gray-400
              "
            >
              I'm always open to discussing new projects, opportunities, and
              ideas. Feel free to reach out and let's start a conversation.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="
                  rounded-lg
                  bg-gray-900
                  px-5 py-3
                  text-sm font-medium
                  text-white
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:bg-gray-800

                  dark:bg-white
                  dark:text-gray-900
                  dark:hover:bg-gray-200
                "
              >
                Get in touch →
              </Link>

              <Link
                to="/projects"
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
                View my work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
