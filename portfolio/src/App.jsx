import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ui/ThemeToggle";

import Home from "./pages/Home";

function App() {
  return (
    <div
      className="
        relative
        min-h-screen

        bg-[#f7f8fc]
        text-gray-900

        transition-colors
        duration-500

        dark:bg-[#05070a]
        dark:text-white
      "
    >
      {/* ==========================================
          GLOBAL BACKGROUND
          ========================================== */}

      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Blue Glow */}
        <div
          className="
            absolute
            left-[-10%]
            top-[10%]

            h-125
            w-125

            rounded-full

            bg-blue-400/20
            blur-[140px]

            dark:bg-blue-500/10
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            right-[-10%]
            top-[35%]

            h-125
            w-125

            rounded-full

            bg-purple-400/20
            blur-[140px]

            dark:bg-purple-500/10
          "
        />

        {/* Bottom Blue Glow */}
        <div
          className="
            absolute
            bottom-[-15%]
            left-[35%]

            h-112.5
            w-112.5

            rounded-full

            bg-cyan-300/15
            blur-[140px]

            dark:bg-cyan-500/5
          "
        />
      </div>

      {/* ==========================================
          WEBSITE CONTENT
          ========================================== */}

      <div className="relative z-10">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />

        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
