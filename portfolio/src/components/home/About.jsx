import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-[#07090d]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Building solutions with
            <span className="text-blue-600 dark:text-blue-500">
              {" "}
              code & purpose.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-400">
            I'm a Full-Stack Developer who enjoys turning ideas and problems
            into practical, reliable web applications.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {/* Main About */}
          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-8
              lg:col-span-2

              dark:border-white/10
              dark:bg-white/2
            "
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Who I am
            </h3>

            <div className="mt-5 space-y-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
              <p>
                I work across the frontend and backend to build applications
                that are not only functional, but also maintainable and easy to
                use.
              </p>

              <p>
                My development approach focuses on understanding the problem
                first, designing a simple solution, and then building it with
                clean and scalable code.
              </p>

              <p>
                I enjoy working with modern web technologies and continuously
                improving my skills by building real-world projects.
              </p>
            </div>

            <Link
              to="/about"
              className="
                mt-7 inline-flex
                items-center
                text-sm font-medium
                text-gray-900
                transition-colors
                hover:text-blue-600

                dark:text-white
                dark:hover:text-blue-400
              "
            >
              More about me
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Focus */}
          <div
            className="
              rounded-2xl
              border border-gray-200
              bg-gray-50
              p-8

              dark:border-white/10
              dark:bg-white/2
            "
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              What I focus on
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Frontend Development
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Building responsive and intuitive interfaces.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Backend Development
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Designing APIs and application logic.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Problem Solving
                </p>

                <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  Debugging issues and finding practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
