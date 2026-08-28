import React from "react";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      category: "Frontend",
      description: "Building modern user interfaces",
    },
    {
      name: "JavaScript",
      category: "Language",
      description: "Core web development",
    },
    {
      name: "Python",
      category: "Backend",
      description: "APIs and application logic",
    },
    {
      name: "SQL",
      category: "Database",
      description: "Data management and queries",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      description: "Responsive UI development",
    },
    {
      name: "Git",
      category: "Tools",
      description: "Version control and collaboration",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-[#0a0d12]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
            Tech Stack
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Tools I use to build
            <span className="text-blue-600 dark:text-blue-500">
              {" "}
              digital products.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-400">
            A collection of technologies I use across frontend, backend,
            databases, and development workflows.
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="
                group
                rounded-2xl
                border border-gray-200
                bg-white
                p-6
                transition-all duration-300

                hover:-translate-y-1
                hover:border-gray-300
                hover:shadow-lg
                hover:shadow-gray-200/40

                dark:border-white/10
                dark:bg-white/2
                dark:hover:border-white/20
                dark:hover:bg-white/4
                dark:hover:shadow-black/20
              "
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-lg
                    bg-gray-100
                    text-sm font-semibold
                    text-gray-700

                    dark:bg-white/10
                    dark:text-gray-200
                  "
                >
                  {technology.name.charAt(0)}
                </div>

                <span
                  className="
                    rounded-full
                    bg-gray-100
                    px-2.5 py-1
                    text-xs
                    text-gray-500

                    dark:bg-white/5
                    dark:text-gray-400
                  "
                >
                  {technology.category}
                </span>
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {technology.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {technology.description}
                </p>
              </div>

              {/* Bottom */}
              <div
                className="
                  mt-6
                  h-px
                  w-full
                  bg-gray-100

                  dark:bg-white/10
                "
              />

              <div className="mt-4 flex items-center text-xs text-gray-400">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                Currently using
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
