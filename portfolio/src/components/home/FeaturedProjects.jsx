import React from "react";
import { Link } from "react-router-dom";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Trading Platform",
      description:
        "A web-based trading platform focused on client onboarding, e-KYC workflows, and trading operations.",
      category: "Web Application",
      technologies: ["React", "Python", "REST API", "SQL"],
      status: "Completed",
    },
    {
      title: "Client Onboarding System",
      description:
        "A streamlined onboarding application designed to manage customer information and digital verification workflows.",
      category: "SaaS Application",
      technologies: ["React", "JavaScript", "Python", "SQL"],
      status: "Completed",
    },
    {
      title: "Portfolio Platform",
      description:
        "A modern SaaS-inspired developer portfolio built with a component-driven frontend architecture.",
      category: "Personal Project",
      technologies: ["React", "Vite", "Tailwind CSS"],
      status: "In Progress",
    },
  ];

  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-[#07090d]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
              Featured Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Things I've
              <span className="text-blue-600 dark:text-blue-500"> built.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-400">
              A selection of projects where I applied my skills to solve
              practical problems and build useful products.
            </p>
          </div>

          <Link
            to="/projects"
            className="
              inline-flex
              items-center
              text-sm font-medium
              text-gray-900
              transition-colors
              hover:text-blue-600

              dark:text-white
              dark:hover:text-blue-400
            "
          >
            View all projects
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="
                group
                flex flex-col
                overflow-hidden
                rounded-2xl
                border border-gray-200
                bg-gray-50

                transition-all duration-300
                hover:-translate-y-1
                hover:border-gray-300
                hover:shadow-xl
                hover:shadow-gray-200/50

                dark:border-white/10
                dark:bg-white/2
                dark:hover:border-white/20
                dark:hover:bg-white/4
                dark:hover:shadow-black/20
              "
            >
              {/* Project Preview */}
              <div
                className="
                  relative
                  flex h-52
                  items-center justify-center
                  overflow-hidden
                  border-b border-gray-200
                  bg-gray-100

                  dark:border-white/10
                  dark:bg-[#0d1117]
                "
              >
                {/* Decorative Grid */}
                <div
                  className="
                    absolute inset-0
                    opacity-40
                    bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)]
                    bg-size-[32px_32px]

                    dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]
                  "
                />

                {/* Fake Dashboard */}
                <div
                  className="
                    relative
                    w-[75%]
                    rounded-xl
                    border border-gray-200
                    bg-white
                    p-4
                    shadow-xl
                    transition-transform duration-500
                    group-hover:scale-105

                    dark:border-white/10
                    dark:bg-[#11161f]
                  "
                >
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 rounded-full bg-gray-200 dark:bg-white/10" />

                    <div className="h-5 w-5 rounded-full bg-blue-500/20" />
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-12 rounded-lg bg-gray-100 dark:bg-white/5" />
                    <div className="h-12 rounded-lg bg-gray-100 dark:bg-white/5" />
                    <div className="h-12 rounded-lg bg-gray-100 dark:bg-white/5" />
                  </div>

                  <div className="mt-3 h-16 rounded-lg bg-gray-100 dark:bg-white/5" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category + Status */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === "Completed"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    />

                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-md
                        border border-gray-200
                        bg-white
                        px-2.5 py-1
                        text-xs
                        text-gray-600

                        dark:border-white/10
                        dark:bg-white/5
                        dark:text-gray-400
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-auto pt-6">
                  <Link
                    to="/projects"
                    className="
                      inline-flex
                      items-center
                      text-sm font-medium
                      text-gray-900
                      transition-colors
                      group-hover:text-blue-600

                      dark:text-white
                      dark:group-hover:text-blue-400
                    "
                  >
                    View project
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
