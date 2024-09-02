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

  const mainContainer = document.querySelector(".main-container") as HTMLElement;
  const profile = document.querySelector(".profile") as HTMLElement;
  const bio = document.querySelector(".bio") as HTMLElement;
  const darkModeContainer = document.querySelector(".dark-mode-container") as HTMLElement;

  if (mainContainer) {
    mainContainer.style.background = isDark ? "#232323" : "#ffffff";
  }

  if (profile) {
    profile.style.background = isDark ? "#1E1E1E" : "#EBEBFA";
  }

  if (bio) {
    bio.style.background = isDark ? "#323232" : "#F7F7FF";
  }

  document.querySelectorAll(".white-text").forEach((element) => {
    (element as HTMLElement).style.color = isDark ? "black" : "white";
  });

  document.querySelectorAll(".black-text").forEach((element) => {
    (element as HTMLElement).style.color = isDark ? "white" : "black";
  });

  if (darkModeContainer) {
    darkModeContainer.style.justifyContent = isDark ? "right" : "left";
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
    const darkModeContainer = document.querySelector(".dark-mode-container");
    darkModeContainer?.addEventListener("click", handleDarkModeToggle);

    // Cleanup event listener on unmount
    return () => {
      darkModeContainer?.removeEventListener("click", handleDarkModeToggle);
    };
  }, [theme]); // Dependency array ensures the effect runs when `theme` changes

  return (
    <>
      <div className="main-container">
        <div className="profile">
          <div className="dark-mode-container">
            <i
              className={`bi ${
                theme === "light" ? "bi-sun-fill" : "bi-moon-fill"
              }`}
            ></i>
          </div>

          <Image
            data-aos="fade-up"
            className="profile-pic"
            src="/images/profile.png"
            alt="Vikram Vishwakarma profile picture"
            width={150}
            height={150}
          />
          <h2 data-aos="fade-up" className="black-text profile-name">
            Vikram Vishwakarma
          </h2>
          <p data-aos="fade-up" className="black-text profile-quote">
            Experience is the name everyone gives to their mistakes. ~ Oscar
            Wilde
          </p>
        </div>

        <div className="profession">
          <h1 data-aos="fade-up" className="black-text profession-title">
            WEB DESIGNER & DEVELOPER BASED IN INDIA
          </h1>
          <p data-aos="fade-up" className="black-text profession-quote">
            The best designer is nature.
          </p>
        </div>

        <div className="bio">
          <p data-aos="fade-up" className="black-text bio-description">
            <b>Hey There,</b>
            <br></br><br></br>
            So my name is <i>Vikram Vishwakarma,</i> and i belong from Maharashtra, India.
            First of all it’s great to meet you, and happy that you’ve visited my portfolio website.
            I’m an avid learner who enjoys exploring new places and discovering new things.
            I’m just a passionate individual who is trying to be a <s>"genius, billionaire, playboy, philanthropist,"</s> person who enjoys life without any expectations.
            I’ve completed my B.Sc. in Computer Science and am continually growing and refining my skills in this field.
            <br></br><br></br>
            If you’d like to know more about me, feel free to reach me out.

          </p>
        </div>

        <div className="projects">
          <div className="projects-inner">
            <div data-aos="fade-up" className="project project1">
              <Image
                className="project-img"
                src="/images/project1.jpg"
                alt="Java calculator project"
                width={300}
                height={200}
              />
              <p className="black-text project-desc">
                This is a Java calculator made for Android devices using the
                Java programming language and official Android API.
              </p>
            </div>

            <div data-aos="fade-up" className="project project2">
              <Image
                className="project-img"
                src="/images/project2.jpg"
                alt="Homepage landing website project"
                width={300}
                height={200}
              />
              <p className="black-text project-desc">
                It's a homepage landing website which can be used as the default
                homepage in your browser.
              </p>
              <button
                onClick={() =>
                  openUrl("https://vikram.is-a.dev/dynamic-homepage")
                }
                className="project2-btn"
              >
                Visit Website &nbsp;
                <i className="bi bi-link-45deg"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="contact">
          <h3 className="black-text contact-title">CONTACT ME</h3>
          <div className="contact-button-container">
            <i
              onClick={() => openUrl("https://instagram.com/vikramisdev")}
              className="bi bi-instagram contact-button"
            ></i>
            <i
              onClick={() => openUrl("https://x.com/vikramisdev")}
              className="bi bi-twitter contact-button"
            ></i>
            <i
              onClick={() => openUrl("https://www.linkedin.com/in/vikramisdev")}
              className="bi bi-linkedin contact-button"
            ></i>
            <i
              onClick={() => openUrl("https://facebook.com/vikramisdev")}
              className="bi bi-facebook contact-button"
            ></i>
          </div>
          <button
            onClick={openMail}
            className="contact-email-button"
          >
            Email Me
          </button>
        </div>

        <VisitorCount />
      </div>
    </>
  );
};

export default Home;
