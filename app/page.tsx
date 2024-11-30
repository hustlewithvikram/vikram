/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect, useRef } from "react";
import Project from "./components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialButton from "./components/SocialButton";
import HoverButton from "./components/HoverButton";
import IntroAnimation from "./components/IntroAnimation";
import LocomotiveScroll from "locomotive-scroll";
import Skill from "./components/Skill";

export default function Home() {
  const [isIntroFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const mainContainer = document.querySelector(
      ".main-container"
    ) as HTMLElement;

    const visited = localStorage.getItem("visited");
    if (visited !== null) {
      setIntroFinished(true);
    }

    if (mainContainer) {
      if (window.scrollX !== 0) {
        window.scrollTo(0, 0);
      }
      setTimeout(() => {
        mainContainer.style.transform = "scale(1)";
      }, 600);
    }

    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });
  }, [isIntroFinished]);

  const github_url = "https://github.com/vikramisdev/";
  const email_url = "vs423502@gmail.com";
  const mobile_number = "+918805469136";

  if (!isIntroFinished) {
    return <IntroAnimation setIntroFinished={setIntroFinished} />;
  } else {
    localStorage.setItem("visited", "true");

    return (
      <div className="bg-container main-container origin-center md:scale-[2] delay-700 transition-all md:duration-700 scroll-smooth">
        {/* introduction or hero section */}

        <div>
          <div className="flex flex-col gap-8 items-center">
            <h1 className="md:transition-all md:text-9xl w-full text-center pt-32 md:hover:pt-24 transition-all duration-500 text-6xl px-6">
              Web designer &<br /> developer from India
            </h1>
            <div className="flex md:gap-x-6 md:justify-center md:items-center md:py-12 flex-col gap-y-12 items-center">
              <h1 className="md:text-2xl text-2xl">
                The best designer is nature.
              </h1>
              <HoverButton
                onClick={() => openUrl("mailto:" + email_url)}
                text="Get in touch"
                iconName="bi bi-arrow-right"
              />
            </div>
          </div>

          <div
            data-scroll
            data-scroll-offset="20%, 10%"
            data-scroll-speed="1.5"
            className="md:h-screen md:m-12 flex md:flex-row md:px-40 md:items-center md:gap-x-12 bg-orange-400 md:rounded-full md:border-[2rem] px-8 pt-12 pb-32 flex-col gap-y-12 items-center m-5 rounded-full min-h-full mt-20"
          >
            <Image
              className="md:rounded-full md:cursor-pointer rounded-full size-60 md:size-72"
              src={"/images/profile.png"}
              alt="vikram profile picture"
              height={800}
              width={800}
            />
            <div className="">
              <h1 className="text-xl mb-5">Myself,</h1>
              <p className="text-xl text-justify md:text-2xl">
                Hi There, My name is Vikram Vishwakarma and I belong from
                Maharashtra, India. I have recently completed my degree in the
                field of computer science, I like to design and build websites
                that are responsive and beautiful. I use softwares like figma &
                adobe illustrator to design & for the building part i use
                various web frameworks to build my website. I always try to make
                the websites clean, minimal, responsive & user friendly with
                smooth animations and transitions.
              </p>
            </div>
          </div>
        </div>

        {/* work section */}
        <div className="md:px-24 md:py-32 px-6 py-12">
          <div className="flex justify-center">
            <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
              <div className="group-hover:z-1 transition-all delay-75 flex">
                <h1 className="">My Work</h1>
                <div className="italic">- "Handcrafted By Me"</div>
              </div>
              <i
                className={`transition-all bi bi-briefcase rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
              ></i>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="grid md:grid-cols-3 md:gap-x-10 gap-y-24 mt-10"
          >
            <Project
              data-scroll
              data-scroll-speed="3"
              src="/images/project1.webp"
              title={"Deep Notes"}
              description={
                "It is a android notes taking app written in kotlin using the jetpack compose library."
              }
              buttonText={"Visit on Github"}
              buttonIcon={"bi bi-github"}
              onClick={() => openUrl(github_url + "deepnotes")}
            />
            <Project
              src="/images/project2.webp"
              title={"Doodle Search"}
              description={
                "Its a static search page, optimised for mobile and desktop sizes."
              }
              buttonText={"Visit Site"}
              onClick={() => openUrl(github_url + "doodle-search")}
            />
            <Project
              src="/images/project3.webp"
              title={"ShopNow"}
              description={
                "It is a E-Commerce website made in React Framework."
              }
              buttonText={"Visit Site"}
              onClick={() => openUrl(github_url + "shopnow")}
            />
          </div>
        </div>

        {/* Achievement section */}
        <div className="md:px-24 md:py-32 px-6 py-12">
          <div className="flex justify-center">
            <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
              <div className="group-hover:z-1 transition-all delay-75 flex">
                <h1 className="">My Achievements</h1>
                <div className="italic">- "Everything"</div>
              </div>
              <i
                className={`transition-all bi bi-trophy rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
              ></i>
            </div>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-duration="800"
            className="grid md:grid-cols-3 md:gap-x-10 gap-y-24 mt-10"
          >
            <Project
              src="/images/achievement1.jpg"
              title={"Internship Studio"}
              description={
                "I have done a one month intership at Internship Studio on Website design & Development."
              }
            />
            <Project
              src="/images/achievement2.jpg"
              title={"InternPe"}
              description={
                "I have done a one month intership at InternPe on Website design & Development."
              }
            />
            <Project
              src="/images/achievement3.jpg"
              title={"Coursera Certification"}
              description={
                "I have completed a Google IT Automation with Python course offered by Coursera."
              }
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="relative">
          <div className="flex justify-center">
            <div className="md:mx-24 md:mb-16 mx-6 mb-12 flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
              <div className="group-hover:z-1 transition-all delay-75 flex">
                <h1 className="">Skills</h1>
                <div className="italic">- "Honed With Practice"</div>
              </div>
              <i
                className={`transition-all bi bi-star rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
              ></i>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="md:p-16 md:flex md:flex-wrap md:gap-5 bg-black | p-5 mt-10 grid grid-cols-1S"
          >
            <Skill
              src="/images/reactjs.svg"
              alt="react js"
              text="70%"
              className="md:flex-grow h-44"
              imgClassName="md:w-56 w-28"
              textClassName="text-white md:text-9xl text-white"
              overlayText="REACT JS"
            />
            <Skill
              src="/images/tailwindcss.png"
              alt="tailwind css"
              text="67%"
              className="md:w-[30rem] md:h-44"
              imgClassName="md:w-32 w-28"
              textClassName="md:text-9xl text-6xl text-white"
              overlayText="TAILWIND CSS"
            />

            <Skill
              src="/images/nextjs.png"
              alt="next js"
              text="72%"
              className="md:w-full"
              imgClassName="invert md:w-96 w-36"
              textClassName="invert md:text-8xl text-3xl text-white"
              overlayText="NEXT JS"
            />

            <Skill
              src="/images/git.svg"
              alt="git"
              text="58%"
              className="md:w-[32rem] md:h-60"
              imgClassName="md:w-44 w-36"
              textClassName="md:text-9xl text-5xl text-white"
              overlayText="GIT"
            />
            <Skill
              src="/images/vscode.svg"
              alt="vscode"
              text="78%"
              className="md:flex-grow md:h-60"
              imgClassName="md:w-36 w-32"
              textClassName="md:text-9xl text-white"
              overlayText="VSCODE"
            />

            <Skill
              src="/images/figma.svg"
              alt="figma"
              text="65%"
              className="md:w-full md:h-44"
              imgClassName="md:w-36 w-28"
              textClassName="md:text-9xl text-white"
              overlayText="FIGMA"
            />

            <Skill
              src="/images/android_studio.png"
              alt="android studio"
              text="52%"
              className="md:w-[35rem] md:h-44"
              imgClassName="md:w-56 w-28"
              textClassName="md:text-8xl text-white"
              overlayText="ANDROID STUDIO"
            />
            <Skill
              src="/images/docker.svg"
              alt="docker"
              text="36%"
              className="md:flex-grow md:h-44"
              imgClassName="md:w-32 w-28"
              textClassName="md:text-9xl text-6xl text-white"
              overlayText="DOCKER"
            />
          </div>
        </div>

        {/* Contact section */}
        <div className="md:px-24 md:py-32 px-6 py-12 mt-32 bg-black flex justify-between text-white">
          <div className="">
            <h1 className="text-2xl font-semibold">Contact Me</h1>
            <div className="mt-10 gap-x-5">
              <h1 className="cursor-pointer">
                <span className="font-bold">Mobile: </span>
                {mobile_number}
              </h1>
              <h1 className="cursor-pointer">
                <span className="font-bold">Email: </span>
                {email_url}
              </h1>
            </div>
            <div className="md:flex md:gap-x-5 grid grid-cols-2 gap-5">
              <SocialButton
                onClick={() => openUrl("https://instagram.com/vikramisdev")}
                text="Instagram"
                iconName="bi bi-instagram"
              />
              <SocialButton
                onClick={() => openUrl("https://facebook.com/vikramisdev")}
                text="Facebook"
                iconName="bi bi-facebook"
              />
              <SocialButton
                onClick={() => openUrl("https://x.com/vikramisdev")}
                text="Twitter"
                iconName="bi bi-twitter"
              />
              <SocialButton
                onClick={() => openUrl(github_url)}
                text="Github"
                iconName="bi bi-github"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function openUrl(url: string, blank: Boolean = true) {
  window.open(url, blank ? "_blank" : "");
}
