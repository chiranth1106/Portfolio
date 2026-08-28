import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ui/ThemeToggle";

import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#07090d] dark:text-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />

      <ThemeToggle />
    </div>
  );
}

export default App;
