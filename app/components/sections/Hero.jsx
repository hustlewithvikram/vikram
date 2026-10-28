/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { sendEmail } from "../../../lib/utils";
import { ArrowDownward, ArrowOutward, Download, Mail } from "@mui/icons-material";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" },
    }),
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/documents/Vikram Vishwakarma - React & React Native Resume.pdf";
    link.download = "Vikram Vishwakarma - React & React Native Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#fafafa] px-4 py-20 text-neutral-950 transition-colors dark:bg-[#0b0b0e] dark:text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-24 top-16 h-64 w-64 rounded-full border border-blue-200/70 dark:border-blue-400/10 sm:h-80 sm:w-80" />
        <div className="absolute -right-12 top-28 h-48 w-48 rounded-full border border-blue-200/60 dark:border-blue-400/10 sm:h-64 sm:w-64" />
        <div className="absolute bottom-10 left-[8%] h-2 w-2 rounded-full bg-blue-500/70" />
        <div className="absolute bottom-16 left-[11%] h-1 w-1 rounded-full bg-blue-400/50" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-16">
        <motion.div
          className="relative z-10 min-w-0 md:py-8"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-neutral-200 bg-white/80 px-3.5 py-2 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80 sm:mb-8"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-neutral-600 dark:text-neutral-300 sm:text-sm">
              Developer · Web & mobile experiences
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mb-2 text-sm font-semibold tracking-[0.2em] text-blue-700 dark:text-blue-400 sm:text-base"
          >
            HELLO, I&apos;M
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={2}
            className="max-w-3xl text-[clamp(3.25rem,8.5vw,6.75rem)] font-bold leading-[0.92] tracking-[-0.065em] text-neutral-950 dark:text-white"
          >
            Vikram
            <span className="mt-1 block text-neutral-400 dark:text-neutral-600">
              Vishwakarma<span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-300 sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl"
          >
            I craft modern digital products with React ecosystems, bringing together thoughtful interfaces, smooth interactions, and performance-focused engineering.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["React", "React Native", "UI/UX"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-7 flex flex-col gap-3 min-[420px]:flex-row sm:mt-8"
          >
            <button
              type="button"
              onClick={() => sendEmail("Potential Collaboration", "Hello Vikram, I'd like to discuss a project opportunity...")}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0b0b0e] sm:text-base"
            >
              <Mail fontSize="small" />
              Let&apos;s talk
              <ArrowOutward fontSize="small" />
            </button>
            <button
              type="button"
              onClick={downloadResume}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-800 transition duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:focus-visible:ring-offset-[#0b0b0e] sm:text-base"
            >
              <Download fontSize="small" />
              Download resume
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={6}
            className="mt-9 grid max-w-md grid-cols-2 border-t border-neutral-200 pt-5 dark:border-neutral-800 sm:mt-11 sm:pt-6"
          >
            <div className="pr-5">
              <p className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">20<span className="text-blue-600 dark:text-blue-400">+</span></p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">Projects completed</p>
            </div>
            <div className="border-l border-neutral-200 pl-5 dark:border-neutral-800">
              <p className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white sm:text-3xl">50<span className="text-blue-600 dark:text-blue-400">+</span></p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 sm:text-sm">Milestones achieved</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[min(78vw,390px)] md:max-w-none"
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-blue-200/80 dark:border-blue-400/20 sm:-inset-4 sm:rounded-[2.5rem]" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-100 shadow-xl shadow-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-black/30 sm:rounded-[2.25rem]">
            <div className="absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/20 to-transparent" />
            <Image
              src="/images/vikram_vishwakarma.png"
              alt="Portrait of Vikram Vishwakarma"
              width={880}
              height={1100}
              priority
              sizes="(max-width: 767px) 78vw, (max-width: 1024px) 42vw, 440px"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-5 pb-5 pt-16 sm:px-6 sm:pb-6">
              <p className="text-lg font-semibold tracking-tight text-white sm:text-xl">Vikram Vishwakarma</p>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">Developer · Always learning, always building</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-lg shadow-neutral-900/5 dark:border-neutral-800 dark:bg-neutral-900 sm:flex lg:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-400/15 dark:text-blue-300">
              <ArrowDownward fontSize="small" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-neutral-900 dark:text-white">Scroll to explore</span>
              <span className="mt-0.5 block text-[11px] text-neutral-500 dark:text-neutral-400">Projects, skills & journey</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
