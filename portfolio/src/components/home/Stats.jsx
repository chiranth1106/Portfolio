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
    Responsive card positions.

    The cards remain in the same symmetrical arch,
    but their horizontal positions are based on the
    container width instead of fixed pixel values.
  */

  const positions = [
    {
      left: "10%",
      y: "7%",
      rotate: "-13deg",
    },
    {
      left: "36.5%",
      y: "0%",
      rotate: "-4deg",
    },
    {
      left: "63.5%",
      y: "0%",
      rotate: "4deg",
    },
    {
      left: "90%",
      y: "7%",
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
          w-full
          overflow-hidden
          py-(--section-padding)
        "
      >
        <div
          className="
            page-container
          "
        >
          {/* ========================================
              HEADING
          ======================================== */}

          <div
            className="
              mb-[clamp(2.5rem,6vw,4rem)]
              text-center
            "
          >
            <p
              className="
                cursor-default
                text-[clamp(0.625rem,1.2vw,0.75rem)]
                font-medium
                uppercase
                tracking-[0.3em]
                text-gray-500

                dark:text-gray-400
              "
            >
              The Numbers
            </p>

            <h2
              className="
                mt-3
                cursor-default
                text-[clamp(1.5rem,4vw,2.25rem)]
                font-semibold
                tracking-tight
                text-gray-900

                dark:text-white
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
              h-[clamp(260px,58vw,460px)]
              w-full
              max-w-225
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
                    top-1/2

                    h-[clamp(190px,42vw,400px)]
                    w-[clamp(135px,28vw,285px)]

                    cursor-pointer

                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                  "
                  style={{
                    left: position.left,

                    zIndex: isHovered ? 100 : stats.length - index,

                    transform: `
                      translate(-50%, -50%)
                      translateY(${position.y})
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
                      -inset-[clamp(12px,2vw,20px)]
                      rounded-[clamp(18px,3vw,28px)]
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

                      rounded-[clamp(18px,2.5vw,20px)]

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
                        inset-[clamp(8px,1vw,12px)]

                        rounded-[clamp(12px,2vw,15px)]

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
                        left-[clamp(12px,1.5vw,24px)]
                        top-[clamp(10px,1.5vw,20px)]

                        flex
                        flex-col
                        items-center

                        font-serif

                        ${stat.color}
                      `}
                    >
                      <span
                        className="
                          text-[clamp(1rem,2.2vw,1.5rem)]
                          font-bold
                        "
                      >
                        {stat.value}
                      </span>

                      <span
                        className="
                          text-[clamp(0.9rem,1.8vw,1.25rem)]
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
                          text-[clamp(2.2rem,7vw,4.5rem)]
                          font-bold
                          tracking-tight
                        "
                      >
                        {stat.value}
                      </span>

                      <span
                        className="
                          mt-[clamp(0.4rem,1vw,1rem)]
                          text-[clamp(1.1rem,2.5vw,1.875rem)]
                        "
                      >
                        {stat.suit}
                      </span>

                      <span
                        className="
                          mt-[clamp(0.75rem,1.5vw,1.5rem)]
                          max-w-[75%]
                          text-center
                          text-[clamp(0.45rem,0.8vw,0.625rem)]
                          font-semibold
                          tracking-[0.14em]

                          text-gray-500

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
                        bottom-[clamp(10px,1.5vw,20px)]
                        right-[clamp(12px,1.5vw,24px)]

                        flex
                        rotate-180
                        flex-col
                        items-center

                        font-serif

                        ${stat.color}
                      `}
                    >
                      <span
                        className="
                          text-[clamp(1rem,2.2vw,1.5rem)]
                          font-bold
                        "
                      >
                        {stat.value}
                      </span>

                      <span
                        className="
                          text-[clamp(0.9rem,1.8vw,1.25rem)]
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
