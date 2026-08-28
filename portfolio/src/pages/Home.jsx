import React from "react";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import About from "../components/home/About";
import TechStack from "../components/home/TechStack";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Experience from "../components/home/Experience";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats/>
      <About/>
      <TechStack/>
      <FeaturedProjects/>
      <Experience/>
      <CTA/>
    </>
  );
};

export default Home;