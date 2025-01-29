"use client";

import { useEffect, useState } from "react";
import { CiBrightnessUp } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";
import { HiOutlineSun } from "react-icons/hi";

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkMode(savedTheme === "dark");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <div
      className="fixed top-6 right-6 rounded-full border-2 flex items-center gap-x-2 px-2 border-neutral-500 z-40 p-2 cursor-pointer bg-[#111] hover:bg-neutral-700"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <HiOutlineSun className="text-white size-5" />
      ) : (
        <RiMoonClearLine className="text-white size-5" />
      )}
    </div>
  );
}

export default DarkMode;
