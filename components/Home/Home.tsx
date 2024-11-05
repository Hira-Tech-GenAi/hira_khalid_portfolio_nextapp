"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Reviews from "./reviews/Reviews";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
