"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { sendEmail } from "../../../lib/utils";

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/documents/Vikram Vishwakarma - React & React Native Resume.pdf";
    link.download = "Vikram Vishwakarma - React & React Native Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="relative isolate overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_75%_20%,rgba(234,88,12,0.10),transparent_55%)]" />
      <div className="mx-auto grid min-h-[min(760px,calc(100svh-7rem))] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: "easeOut" }} className="order-2 min-w-0 lg:order-1">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">Developer · Product thinker · Builder</p>
          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,7.6rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-zinc-950 dark:text-white">
            Building
            <br />
            <span className="text-orange-600 dark:text-orange-400">digital</span> things
            <br />
            that matter<span className="text-orange-600 dark:text-orange-400">.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
            I’m Vikram — a developer who enjoys turning thoughtful ideas into useful, polished experiences across the web and mobile.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={() => sendEmail("Potential Collaboration", "Hello Vikram, I'd like to discuss a project opportunity...")} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white shadow-lg shadow-orange-600/15 transition hover:-translate-y-0.5 hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
              <Mail size={17} /> Let’s talk <ArrowUpRight size={16} />
            </button>
            <button onClick={downloadResume} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-800 transition hover:border-orange-400 hover:text-orange-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-orange-400 dark:hover:text-orange-300">
              <Download size={16} /> Resume
            </button>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-zinc-200 pt-6 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            <span>React & React Native</span><span>UI engineering</span><span>Problem solving</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }} className="order-1 mx-auto w-full max-w-[430px] lg:order-2 lg:max-w-[500px]">
          <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-zinc-200 shadow-2xl shadow-zinc-900/10 dark:bg-zinc-800 sm:rounded-[2.5rem]">
            <Image src="/images/vikram_vishwakarma.png" alt="Portrait of Vikram Vishwakarma" fill priority sizes="(max-width: 1024px) 80vw, 500px" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/35 via-transparent to-zinc-950/75" />
            <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-3 sm:inset-x-6 sm:top-6">
              <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/90 shadow-lg backdrop-blur-xl sm:text-[10px]">Ideas into experiences</span>
              <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[9px] font-medium tracking-wide text-white/85 backdrop-blur-xl sm:text-[10px]">Available for ideas</span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 text-white sm:p-7">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/65">Based in India · Building worldwide</p>
              <div className="flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-2xl font-semibold leading-tight tracking-[-0.04em] sm:text-3xl">Vikram Vishwakarma</p>
                  <p className="mt-1.5 text-xs text-white/75 sm:text-sm">Developer · Designer · Product builder</p>
                </div>
                <a href="#about" aria-label="Explore about me" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/35 bg-white/15 shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><ArrowDown size={18} /></a>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-1 text-xs text-zinc-500 dark:text-zinc-400"><span>Curiosity into craft.</span><span>01 / 06</span></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
