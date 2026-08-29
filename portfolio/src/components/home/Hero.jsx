import React, { useState } from "react";
import { Link } from "react-router-dom";

const name = "CHIRANTH";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden

        bg-transparent
      "
    >
      {/* Welcome */}
      <div
        className="
          hero-welcome
          mb-8
          text-center
          text-sm
          font-medium
          uppercase
          tracking-[0.35em]
          text-gray-500
          cursor-default

          dark:text-gray-400
        "
      >
        Welcome to my portfolio
      </div>

      {/* Your existing name animation */}
      <div
        className="
          flex
          items-center
          justify-center
          gap-[clamp(0.5rem,2vw,2rem)]
        "
      >
        {name.split("").map((letter, index) => {
          const distance =
            hoveredIndex !== null ? Math.abs(index - hoveredIndex) : null;

          const isHovered = hoveredIndex === index;

          // How much the surrounding letters move outward
          let translateX = 0;

          if (hoveredIndex !== null && !isHovered) {
            if (distance === 1) {
              translateX = index < hoveredIndex ? -10 : 10;
            } else if (distance === 2) {
              translateX = index < hoveredIndex ? -5 : 5;
            }
          }

          return (
            <span
              key={index}
              className="hero-letter"
              style={{
                "--delay": `${index * 70}ms`,
              }}
            >
              <span
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: `
          translateX(${translateX}px)
          ${isHovered ? "translateY(-18px) scale(1.45)" : ""}
        `,
                }}
                className={`
        relative
        inline-block
        cursor-default
        select-none

        text-6xl
        sm:text-8xl
        lg:text-9xl

        font-bold
        tracking-tight

        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          isHovered
            ? `
              bg-linear-to-b
              from-white
              via-blue-400
              to-purple-500
              bg-clip-text
              text-transparent

              drop-shadow-[0_0_30px_rgba(59,130,246,0.7)]
            `
            : `
              text-gray-900
              dark:text-white
            `
        }

        ${
          hoveredIndex !== null && !isHovered && distance === 1
            ? `
              drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]
            `
            : ""
        }

        ${
          hoveredIndex !== null && !isHovered && distance === 2
            ? `
              drop-shadow-[0_0_10px_rgba(139,92,246,0.18)]
            `
            : ""
        }
      `}
              >
                {/* Halo */}
                <span
                  className={`
          pointer-events-none
          absolute
          inset-0
          -z-10
          rounded-full
          blur-2xl
          transition-all
          duration-500

          ${
            isHovered
              ? "scale-[1.8] opacity-70 bg-blue-500/20"
              : distance === 1
                ? "scale-[1.4] opacity-30 bg-blue-500/10"
                : distance === 2
                  ? "scale-[1.2] opacity-15 bg-purple-500/10"
                  : "opacity-0"
          }
        `}
                />

                {letter}
              </span>
            </span>
          );
        })}
      </div>

      {/* Software Engineer Description */}
      <div className="mt-8 max-w-2xl px-6 text-center">
        <h2
          className="
            hero-role
            text-xl
            font-medium
            italic
            uppercase
            tracking-[0.25em]
            text-gray-900

            sm:text-2xl

            dark:text-white
            cursor-default
          "
        >
          SOFTWARE ENGINEER
        </h2>

        <p
          className="
            hero-description
            mt-4
            text-base
            leading-7
            text-gray-500

            sm:text-lg
            sm:leading-8

            dark:text-gray-400
            cursor-default
          "
        >
          I build reliable, scalable, and user-focused software experiences with
          a passion for turning ideas into meaningful digital products.
        </p>

        {/* Navigation Buttons */}
        <div
          className="
            hero-buttons
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-4

            sm:flex-row
          "
        >
          {/* Tech Stack */}
          <Link
            to="/tech-stack"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-full
              border
              border-gray-300
              bg-gray-900
              px-6
              py-3

              text-sm
              font-medium
              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-gray-900
              hover:shadow-lg
              hover:shadow-gray-900/20

              dark:border-white/10
              dark:bg-white
              dark:text-gray-900

              dark:hover:border-white
              dark:hover:shadow-white/10
            "
          >
            Tech Stack
            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>

          {/* Projects */}
          <Link
            to="/projects"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-full
              border
              border-gray-300
              bg-transparent
              px-6
              py-3

              text-sm
              font-medium
              text-gray-900

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-gray-100
              hover:shadow-lg
              hover:shadow-gray-900/10

              dark:border-white/15
              dark:text-white

              dark:hover:bg-white/10
            "
          >
            View Projects
            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
      {/* Minimal Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-mouse">
          <span className="hero-mouse-wheel" />
        </div>

        <div className="hero-scroll-chevrons">
          <span />
          <span />
        </div>
      </div>
    </section>
  );
};

export default Hero;
