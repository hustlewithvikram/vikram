"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconLoader3 } from "@tabler/icons-react";

const messages = [
  "Initializing",
  "Fetching data",
  "Optimizing experience",
  "Almost there",
];

export default function LoadingStartup() {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index === messages.length - 1) {
      // Hide after last message is shown
      setTimeout(() => {
        setFinished(true);
        localStorage.setItem("firstVisit", "true");
      }, 2000);
    }

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    !finished && ( // Hide after last message
      <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none h-screen w-screen z-[1000] bg-black text-white">
        {/* Loader Icon */}
        <IconLoader3 className="w-12 h-12 animate-spin text-gray-300" />

        {/* Animated Text (Fully Centered, No Wrapping) */}
        <div className="h-10 flex justify-center items-center w-full mt-4">
          <AnimatePresence mode="wait">
            <motion.span
              key={messages[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-base font-normal text-gray-300 text-center w-max inline-block whitespace-nowrap"
            >
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    )
  );
}
