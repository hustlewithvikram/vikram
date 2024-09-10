/* eslint-disable react/no-unescaped-entities */
"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import VisitorCount from "./VisitorCount";

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
        "https://gist.github.com/vikramisdev/b681778f4970732a20d4298fa8bd4e7e/raw/ab7308b588db609bf68f26bac3a4740141d71d54/vikram%2520resume.pdf";
      window.open(url, "_blank");
    });
  }, []);

  return (
    <>
      <p className="header-notification">
        This website is in continuous development, some features might not work!
      </p>
      <div className="page-wrapper">
        <div className="profile-section">
          <div className="theme-toggle-container">
            <i
              className={`bi ${
                theme === "light" ? "bi-sun-fill" : "bi-moon-fill"
              }`}
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

        <div className="bio-section">
          <p data-aos="fade-up" className="text-dark bio-description">
            <b>Hey There,</b>
            <br></br>
            <br></br>
            So my name is <i>Vikram Vishwakarma,</i> and I belong from
            Maharashtra, India. First of all it’s great to meet you, and happy
            that you’ve visited my portfolio website. I’m an avid learner who
            enjoys exploring new places and discovering new things. I’m just a
            passionate individual who is trying to be a{" "}
            <s>"genius, billionaire, playboy, philanthropist,"</s> person who
            enjoys life without any expectations. I’ve completed my B.Sc. in
            Computer Science and am continually growing and refining my skills
            in this field.
            <br></br>
            <br></br>
            If you’d like to know more about me, feel free to reach me out.
            <button className="resume-download-btn">Download Resume</button>
          </p>
        </div>

        <div className="projects-section">
          <h2 className="projects-title text-dark">My Work</h2>
          <p className="projects-description text-dark">
            Some of my handcrafted projects
          </p>
          <div className="projects-list">
            <div data-aos="fade-up" className="project project-1">
              <div className="project-image-container">
                <Image
                  className="project-image"
                  width={1000}
                  height={1000}
                  src={"/images/project1.jpg"}
                  alt={""}
                ></Image>
                <div className="project-image-overlay">
                  <div>
                    <h3 className="project-image-title">Swamp</h3>
                    <p className="project-image-desc">
                      A Android calculator written in Java.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <p className="text-dark project-description">
                  This is an Android Calculator built using Java & Android API.
                  It's the first android app that was made by me!
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="project project-2">
              <div className="project-image-container">
                <Image
                  className="project-image"
                  width={1000}
                  height={1000}
                  src={"/images/project2.jpg"}
                  alt={""}
                ></Image>
                <div className="project-image-overlay">
                  <div>
                    <h3 className="project-image-title">Doodle Search</h3>
                    <p className="project-image-desc">
                      A static chrome like search page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <p className="text-dark project-description">
                  It's a static website that can be used as the default homepage
                  in your browser.
                </p>
                <button
                  onClick={() =>
                    openUrl("https://vikramisdev.github.io/dynamic-homepage")
                  }
                  className="project-visit-btn project-btn"
                >
                  Visit Website &nbsp;
                  <i className="bi bi-link-45deg"></i>
                </button>
              </div>
            </div>

            <div data-aos="fade-up" className="project project-3">
              <div className="project-image-container">
                <Image
                  className="project-image"
                  width={1000}
                  height={1000}
                  src={"/images/project3.png"}
                  alt={""}
                ></Image>
                <div className="project-image-overlay">
                  <div>
                    <h3 className="project-image-title">Web draw</h3>
                    <p className="project-image-desc">
                      A site for drawing on canvas
                    </p>
                  </div>
                </div>
              </div>
              <div className="project-details">
                <p className="text-dark project-description">
                  It's a website that lets you enjoy drawing on a canvas,
                  responsive to all devices.
                </p>
                <button
                  onClick={() =>
                    openUrl("https://vikramisdev.github.io/web-draw")
                  }
                  className="project-visit-btn project-btn"
                >
                  Visit Website &nbsp;
                  <i className="bi bi-link-45deg"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="contact-section">
          <h3 className="contact-title">CONTACT ME</h3>
          <div className="contact-button-container">
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
          <button className="contact-email-button" onClick={openMail}>
            Email Me
          </button>
        </footer>
      </div>
    </>
  );
};

export default Home;
