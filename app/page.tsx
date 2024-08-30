/* eslint-disable react/no-unescaped-entities */
"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";
import Image from "next/image";
import { useEffect, useState } from "react";

// Open URL in a new tab
const openUrl = (url: string | URL | undefined) => {
  window.open(url, "_blank");
};

// Open email client
const openMail = () => {
  window.location.href = "mailto:vs423502@gmail.com";
};

const applyTheme = (theme: string) => {
  const isDark = theme === "dark";

  document.querySelector(".main-container")!.style.background = isDark
    ? "#232323"
    : "#ffffff";
  document.querySelector(".profile")!.style.background = isDark
    ? "#1E1E1E"
    : "#EBEBFA";
  document.querySelector(".bio")!.style.background = isDark
    ? "#323232"
    : "#F7F7FF";
  document.querySelectorAll(".white-text").forEach((element) => {
    element.style.color = isDark ? "black" : "white";
  });
  document.querySelectorAll(".black-text").forEach((element) => {
    element.style.color = isDark ? "white" : "black";
  });
  document.querySelector(".dark-mode-container")!.style.justifyContent = isDark
    ? "right"
    : "left";
};

const Home = () => {
  const [theme, setTheme] = useState("light");
  // Apply theme styles based on the theme

  useEffect(() => {
    // Apply theme on mount
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme as "light" | "dark");
    applyTheme(savedTheme);

    // Add event listener for dark mode toggle
    const handleDarkModeToggle = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    };

    document
      .querySelector(".dark-mode-container")
      ?.addEventListener("click", handleDarkModeToggle);

    // Cleanup event listener on unmount
    return () => {
      document
        .querySelector(".dark-mode-container")
        ?.removeEventListener("click", handleDarkModeToggle);
    };
  }, [theme]);

  useEffect(() => {
    // Initialize AOS

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);

    // Toggle theme on dark mode button click
    document
      .querySelector(".dark-mode-container")
      ?.addEventListener("click", () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
      });
  }, [theme]);

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
            <br />
            My name is Vikram Vishwakarma and I am from Maharashtra, India. It's
            nice to meet you. So happy that you visited my portfolio website. I
            am a <s>Genius, billionaire, playboy, philanthropist</s> normal guy
            learning new things and exploring everything little by little. I've
            completed my graduation in the field of computer science. If you
            want to know more about me, you can contact me.
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
      </div>
    </>
  );
};

export default Home;
