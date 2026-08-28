import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "1+",
      label: "Years Experience",
    },
    {
      value: "6+",
      label: "Projects Built",
    },
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Commitment",
    },
  ];

  return (
    <section className="border-y border-gray-200 bg-gray-50/50 transition-colors duration-300 dark:border-white/10 dark:bg-white/2">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                px-6 py-8 text-center
                md:py-10
                ${
                  index !== stats.length - 1
                    ? "border-r border-gray-200 dark:border-white/10"
                    : ""
                }
              `}
            >
              <p className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
