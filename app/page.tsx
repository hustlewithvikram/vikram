/* eslint-disable react/no-unescaped-entities */
"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import VisitorCount from "./VisitorCount";
import Project from "./components/Project";

// Open URL in a new tab
const openUrl = (url: string | URL | undefined) => {
  window.open(url, "_blank");
};

// Open email client
const openMail = () => {
  window.location.href = "mailto:vs423502@gmail.com";
};

// Apply theme styles based on the theme
const applyTheme = (theme: string) => {
  const isDark = theme === "dark";

  const mainContainer = document.querySelector(".page-wrapper") as HTMLElement;
  const profileSection = document.querySelector(
    ".profile-section"
  ) as HTMLElement;
  const bioSection = document.querySelector(".bio-section") as HTMLElement;
  const themeToggleContainer = document.querySelector(
    ".theme-toggle-container"
  ) as HTMLElement;

  if (mainContainer) {
    mainContainer.style.background = isDark ? "#232323" : "#ffffff";
  }

  if (profileSection) {
    profileSection.style.background = isDark ? "#1E1E1E" : "#EBEBFA";
  }

  if (bioSection) {
    bioSection.style.background = isDark ? "#323232" : "#F7F7FF";
  }

  document.querySelectorAll(".text-light").forEach((element) => {
    (element as HTMLElement).style.color = isDark ? "black" : "white";
  });

  document.querySelectorAll(".text-dark").forEach((element) => {
    (element as HTMLElement).style.color = isDark ? "white" : "black";
  });

  if (themeToggleContainer) {
    themeToggleContainer.style.justifyContent = isDark ? "right" : "left";
  }
};

const Home = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    applyTheme(savedTheme);

    // Event listener function for dark mode toggle
    const handleDarkModeToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    };

    // Add event listener for dark mode toggle
    const themeToggleContainer = document.querySelector(
      ".theme-toggle-container"
    );
    themeToggleContainer?.addEventListener("click", handleDarkModeToggle);

    // Cleanup event listener on unmount
    return () => {
      themeToggleContainer?.removeEventListener("click", handleDarkModeToggle);
    };
  }, [theme]); // Dependency array ensures the effect runs when `theme` changes

  useEffect(() => {
    const resumeBtn = document.querySelector(".resume-download-btn");

    resumeBtn?.addEventListener("click", function onClick() {
      var url =
        "https://gist.github.com/vikramisdev/b681778f4970732a20d4298fa8bd4e7e/raw/1bde48fc0243e803836c47a6c0e1a9d2e2422aa3/vikram%2520resume.pdf";
      window.open(url, "_blank");
    });
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="profile-section">
          <div className="theme-toggle-container">
            <i
              className={`bi ${
                theme === "light" ? "bi-sun-fill" : "bi-moon-fill"
              } theme-toggle-button`}
            ></i>
          </div>

          <Image
            data-aos="fade-up"
            className="profile-picture"
            src="/images/profile.png"
            alt="Vikram Vishwakarma profile picture"
            width={150}
            height={150}
          />
          <h2 data-aos="fade-up" className="text-dark profile-name">
            Vikram Vishwakarma
          </h2>
          <p data-aos="fade-up" className="text-dark profile-quote">
            Experience is the name everyone gives to their mistakes. ~ Oscar
            Wilde
          </p>
        </div>

        <div className="profession-section">
          <h1 data-aos="fade-up" className="text-dark profession-title">
            WEB DESIGNER & DEVELOPER BASED IN INDIA
          </h1>
          <p data-aos="fade-up" className="text-dark profession-quote">
            The best designer is nature.
          </p>
        </div>

        <div className="bio-section sm:rounded-t-6xl rounded-t-4xl">
          <p data-aos="fade-up" className="text-dark sm:p-14 px-10 pt-10 pb-24 text-justify sm:text-xl text-base sm:pb-20 h-fit">
            <b>Hey There,</b>
            <br></br>
            <br></br>
            So my name is <i>Vikram Vishwakarma,</i> and I belong from
            Maharashtra, India. I’m an avid learner who enjoys exploring new
            places and discovering new things. I’m a passionate individual who
            is chasing his Goals. I’ve completed my Bachelor's Degree in
            Computer Science and looking for Jobs. I am continuously learning
            and refining my skills in this field.
            <br></br>
            <br></br>
            If you’d like to know more about me, feel free to reach me out.
            <button className="flex float-end bg-white mt-6 text-black px-6 py-3 rounded-full">Download Resume <li className="bi bi-download ml-3"></li></button>
          </p>
        </div>

        <div className="projects-section">
          <h2 className="projects-title text-dark">My Work</h2>
          <p className="projects-description text-dark">
            Some of my handcrafted projects
          </p>

          <div className="sm:grid grid-cols-3 gap-8 justify-between">
            <Project
              src="/images/project1.jpg"
              overlaysrc="/images/android.png"
              title="Swamp"
              description="A android app in java."
              projectDescription="This is an Android Calculator built using Java & Android API.
                  It's the first android app that i made!"
              handleButton={function () {}}
              buttonText=""
            />

            <Project
              src="/images/project2.jpg"
              overlaysrc="/images/web.png"
              title="Doodle Search"
              description="A android app in java."
              projectDescription="It's a static website that can be used as the default homepage
                  in your browser."
              handleButton={function () {
                openUrl("https://vikramisdev.github.io/dynamic-homepage");
              }}
              buttonText="Visit Website"
            />

            <Project
              src="/images/project3.png"
              overlaysrc="/images/web.png"
              title="Web Draw"
              description="A site for drawing on canvas."
              projectDescription="It's a website that lets you enjoy drawing on a canvas,
                  responsive to all devices."
              handleButton={function () {
                openUrl("https://vikramisdev.github.io/web-draw");
              }}
              buttonText="Visit Website"
            />
          </div>
        </div>

        <footer className="bg-black text-center text-white rounded-t-6xl md:rounded-t-10xl pt-10 pb-20">
          <h3 className="text-center text-lg p-5">CONTACT ME</h3>
          <div className="flex justify-center p-5 md:gap-4 gap-8 mt-4">
            <i
              onClick={() => openUrl("https://instagram.com/vikramisdev")}
              className="bi bi-instagram contact-icon"
            ></i>
            <i
              onClick={() => openUrl("https://x.com/vikramisdev")}
              className="bi bi-twitter contact-icon"
            ></i>
            <i
              onClick={() => openUrl("https://www.linkedin.com/in/vikramisdev")}
              className="bi bi-linkedin contact-icon"
            ></i>
            <i
              onClick={() => openUrl("https://github.com/vikramisdev")}
              className="bi bi-github contact-icon"
            ></i>
          </div>
          <button
            className="bg-white text-black py-3 px-6 rounded-full md:hover:outline md:hover:outline-4 md:hover:outline-white md:hover:outline-offset-4 transition-none"
            onClick={openMail}
          >
            Email Me
          </button>

          <VisitorCount className="mt-8" />
        </footer>
      </div>
    </>
  );
};

export default Home;
