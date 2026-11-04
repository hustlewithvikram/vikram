"use client";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Footer from "@/app/components/sections/Footer";
import DarkMode from "./components/ui/DarkMode";
import ScrollToTop from "./components/ui/ScrollToTop";
import FloatNavBar from "./components/ui/FloatNavBar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-zinc-950 transition-colors duration-300 dark:bg-[#0b0b0d] dark:text-white">
      <DarkMode />
      <FloatNavBar />
      <ScrollToTop />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Footer />
    </main>
  );
}
