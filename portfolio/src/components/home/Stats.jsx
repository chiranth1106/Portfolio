import React, { useEffect, useRef, useState } from "react";

const Stats = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [shuffleKey, setShuffleKey] = useState(0);

  const sectionRef = useRef(null);
  const hasEntered = useRef(false);

  const stats = [
    {
      value: "1+",
      label: "YEARS EXPERIENCE",
      suit: "♠",
      color: "text-blue-600 dark:text-blue-400",
      glow: "bg-blue-500/20",
    },
    {
      value: "6+",
      label: "PROJECTS BUILT",
      suit: "♥",
      color: "text-purple-600 dark:text-purple-400",
      glow: "bg-purple-500/20",
    },
    {
      value: "10+",
      label: "TECHNOLOGIES",
      suit: "♦",
      color: "text-cyan-600 dark:text-cyan-400",
      glow: "bg-cyan-500/20",
    },
    {
      value: "100%",
      label: "COMMITMENT",
      suit: "♣",
      color: "text-pink-600 dark:text-pink-400",
      glow: "bg-pink-500/20",
    },
  ];

  /*
    Card positions.

    Creates a symmetrical arch:

              6+        10+
           ╱                ╲
        1+                    100%
    */
  const positions = [
    {
      x: "-195px",
      y: "35px",
      rotate: "-13deg",
    },
    {
      x: "-65px",
      y: "5px",
      rotate: "-4deg",
    },
    {
      x: "65px",
      y: "5px",
      rotate: "4deg",
    },
    {
      x: "195px",
      y: "35px",
      rotate: "13deg",
    },
  ];

  /*
    ========================================
    SHUFFLE WHEN SECTION ENTERS VIEWPORT
    ========================================
  */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasEntered.current) {
          hasEntered.current = true;

          setTimeout(() => {
            setShuffleKey((previous) => previous + 1);
          }, 150);
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  /*
    ========================================
    SHUFFLE WHEN THEME CHANGES
    ========================================
  */

  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          setHoveredIndex(null);

          setTimeout(() => {
            setShuffleKey((previous) => previous + 1);
          }, 50);
        }
      });
    });

    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========================================
          SHUFFLE ANIMATION
      ======================================== */}

      <style>
        {`
          @keyframes statsCardShuffle {
            0% {
              transform:
                translateX(0)
                translateY(0)
                rotate(0deg)
                scale(0.96);
            }

            20% {
              transform:
                translateX(-24px)
                translateY(-18px)
                rotate(-8deg)
                scale(1.02);
            }

            40% {
              transform:
                translateX(26px)
                translateY(-10px)
                rotate(8deg)
                scale(1.02);
            }

            60% {
              transform:
                translateX(-15px)
                translateY(8px)
                rotate(-5deg)
                scale(1);
            }

            80% {
              transform:
                translateX(8px)
                translateY(-4px)
                rotate(3deg)
                scale(1);
            }

            100% {
              transform:
                translateX(0)
                translateY(0)
                rotate(0deg)
                scale(1);
            }
          }

          @keyframes statsCardGlow {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }

            35% {
              opacity: 0.8;
              transform: scale(1.15);
            }

            100% {
              opacity: 0;
              transform: scale(1.3);
            }
          }

          .stats-shuffle-card {
            animation-name: statsCardShuffle;
            animation-duration: 850ms;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
            animation-fill-mode: both;
          }

          .stats-shuffle-glow {
            animation-name: statsCardGlow;
            animation-duration: 850ms;
            animation-timing-function: ease-out;
            animation-fill-mode: both;
          }
        `}
      </style>

      <section
        ref={sectionRef}
        className="
          relative
          py-24
          sm:py-32
        "
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* ========================================
              HEADING
          ======================================== */}

          <div className="mb-14 text-center">
            <p
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.35em]
                text-gray-500
                dark:text-gray-400
                cursor-default
              "
            >
              The Numbers
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-semibold
                tracking-tight
                text-gray-900
                sm:text-4xl
                dark:text-white
                cursor-default
              "
            >
              A little about my journey
            </h2>
          </div>

          {/* ========================================
              CARD AREA
          ======================================== */}

          <div
            className="
              relative
              mx-auto

              h-90
              w-full
              max-w-225

              sm:h-105
            "
          >
            {stats.map((stat, index) => {
              const isHovered = hoveredIndex === index;
              const position = positions[index];

              return (
                <div
                  key={`${stat.label}-${shuffleKey}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    h-70
                    w-50

                    sm:h-87.5
                    sm:w-62.5

                    cursor-pointer

                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                  "
                  style={{
                    /*
                      Normal stacking:

                      1+   = 4
                      6+   = 3
                      10+  = 2
                      100% = 1

                      So 1+ is naturally
                      the front card.
                    */
                    zIndex: isHovered ? 100 : stats.length - index,

                    transform: `
                      translate(-50%, -50%)
                      translate(${position.x}, ${position.y})
                      rotate(${isHovered ? "0deg" : position.rotate})
                      scale(${isHovered ? 1.08 : 1})
                    `,

                    transformOrigin: "50% 100%",
                  }}
                >
                  {/* ========================================
                      SHUFFLE GLOW
                  ======================================== */}

                  <div
                    key={`glow-${shuffleKey}`}
                    className={`
                      pointer-events-none
                      absolute
                      -inset-6
                      rounded-[30px]
                      blur-2xl

                      ${stat.glow}

                      stats-shuffle-glow

                      ${isHovered ? "opacity-70" : "opacity-0"}
                    `}
                    style={{
                      animationDelay: `${index * 80}ms`,
                    }}
                  />

                  {/* ========================================
                      CARD
                  ======================================== */}

                  <div
                    className="
                      relative
                      h-full
                      w-full
                      overflow-hidden
                      cursor-default

                      rounded-[20px]

                      border
                      border-gray-300/80

                      bg-[#fffefa]

                      shadow-[0_15px_40px_rgba(15,23,42,0.16)]

                      transition-all
                      duration-500

                      dark:border-white/15
                      dark:bg-[#11151c]
                      dark:shadow-[0_18px_45px_rgba(0,0,0,0.45)]
                    "
                    style={{
                      /*
                        Each card gets a slightly
                        different shuffle timing.
                      */
                      animationDelay: `${index * 90}ms`,
                    }}
                  >
                    {/* ========================================
                        INNER BORDER
                    ======================================== */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-3

                        rounded-[15px]

                        border
                        border-gray-200

                        dark:border-white/10
                      "
                    />

                    {/* ========================================
                        TOP LEFT
                    ======================================== */}

                    <div
                      className={`
                        absolute
                        left-5
                        top-4

                        flex
                        flex-col
                        items-center

                        font-serif

                        sm:left-6
                        sm:top-5

                        ${stat.color}
                      `}
                    >
                      <span
                        className="
                          text-xl
                          font-bold

                          sm:text-2xl
                        "
                      >
                        {stat.value}
                      </span>

                      <span
                        className="
                          text-lg

                          sm:text-xl
                        "
                      >
                        {stat.suit}
                      </span>
                    </div>

                    {/* ========================================
                        CENTER CONTENT
                    ======================================== */}

                    <div
                      className={`
                        absolute
                        inset-0

                        flex
                        flex-col
                        items-center
                        justify-center

                        ${stat.color}
                      `}
                    >
                      <span
                        className="
                          font-serif
                          text-6xl
                          font-bold
                          tracking-tight

                          sm:text-7xl
                        "
                      >
                        {stat.value}
                      </span>

                      <span
                        className="
                          mt-2
                          text-2xl

                          sm:mt-4
                          sm:text-3xl
                        "
                      >
                        {stat.suit}
                      </span>

                      <span
                        className="
                          mt-4
                          max-w-36.25

                          text-center
                          text-[9px]
                          font-semibold
                          tracking-[0.18em]

                          text-gray-500

                          sm:mt-6
                          sm:text-[10px]

                          dark:text-gray-400
                        "
                      >
                        {stat.label}
                      </span>
                    </div>

                    {/* ========================================
                        BOTTOM RIGHT
                    ======================================== */}

                    <div
                      className={`
                        absolute
                        bottom-4
                        right-5

                        flex
                        rotate-180
                        flex-col
                        items-center

                        font-serif

                        sm:bottom-5
                        sm:right-6

                        ${stat.color}
                      `}
                    >
                      <span
                        className="
                          text-xl
                          font-bold

                          sm:text-2xl
                        "
                      >
                        {stat.value}
                      </span>

                      <span
                        className="
                          text-lg

                          sm:text-xl
                        "
                      >
                        {stat.suit}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
