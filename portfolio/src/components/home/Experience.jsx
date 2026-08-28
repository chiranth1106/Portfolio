import React from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      role: "Technical Support / Client Support",
      company: "Your Company",
      period: "2024 — Present",
      type: "Full-time",
      description:
        "Supporting domestic and international clients across trading platforms, customer onboarding, and e-KYC processes.",
      responsibilities: [
        "Troubleshoot technical and application-related issues.",
        "Analyze application logs and database information to identify recurring issues and data discrepancies.",
        "Coordinate with internal teams to resolve incidents and client-impacting problems.",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-24 transition-colors duration-300 dark:bg-[#0a0d12]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-500">
              Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Where I've
              <span className="text-blue-600 dark:text-blue-500"> worked.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500 dark:text-gray-400">
              My professional experience and the work I've done across technical
              support, client operations, and software development.
            </p>
          </div>

          <Link
            to="/experience"
            className="
              inline-flex items-center
              text-sm font-medium
              text-gray-900
              transition-colors
              hover:text-blue-600

              dark:text-white
              dark:hover:text-blue-400
            "
          >
            View full experience
            <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Experience */}
        <div className="relative mt-14">
          {/* Timeline */}
          <div
            className="
              absolute left-2.75 top-2 bottom-2
              w-px
              bg-gray-200

              dark:bg-white/10
            "
          />

          <div className="space-y-10">
            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="relative pl-10"
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute left-0 top-7
                    flex h-6 w-6
                    items-center justify-center
                    rounded-full
                    border-4
                    border-gray-50
                    bg-blue-600

                    dark:border-[#0a0d12]
                    dark:bg-blue-500
                  "
                />

                {/* Card */}
                <div
                  className="
                    rounded-2xl
                    border border-gray-200
                    bg-white
                    p-7

                    transition-all duration-300
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
                  {/* Header */}
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                        {experience.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className="
                          rounded-full
                          bg-gray-100
                          px-3 py-1
                          text-xs
                          text-gray-500

                          dark:bg-white/5
                          dark:text-gray-400
                        "
                      >
                        {experience.type}
                      </span>

                      <span
                        className="
                          rounded-full
                          border border-gray-200
                          px-3 py-1
                          text-xs
                          text-gray-500

                          dark:border-white/10
                          dark:text-gray-400
                        "
                      >
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 dark:text-gray-400">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {experience.responsibilities.map((item) => (
                      <div
                        key={item}
                        className="
                          rounded-xl
                          border border-gray-100
                          bg-gray-50
                          p-4

                          dark:border-white/5
                          dark:bg-white/2
                        "
                      >
                        <div className="mb-3 h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />

                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
