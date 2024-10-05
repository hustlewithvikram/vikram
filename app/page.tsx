/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import Project from "./components/Project";

export default function Home() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const about = document.querySelector(".about");
    about?.addEventListener("mousenter", (event) => {
      setCursor({ x: 100, y: 100 });
    });
  }, [cursor]);

  console.log(cursor);

  return (
    <div className="bg-container">
      {/* absolute elements */}
      <div className="cursor transition-all size-32 absolute left-0 top-0 rounded-full"></div>

      {/* introduction */}
      <div className="flex flex-row-reverse justify-between items-end gap-14 px-24 py-48">
        <Image
          className="rounded-full cursor-pointer"
          src={"/images/profile.png"}
          alt="vikram profile picture"
          height={350}
          width={350}
        />
        <div className="">
          <div className="text-7xl font-semibold relative cursor-pointer group hover:pl-10 transition-all">
            <h1 className="transition-all delay-75">
              Web designer & developer from India
            </h1>
            <div className="group-hover:text-4xl overflow-hidden group-hover:rounded-lg absolute top-0 left-0 transition-all h-full group-hover:w-5 bg-black text-white w-0"></div>
          </div>

          <h2 className="text-xl font-semibold mt-8 opacity-80">
            I am a web designer as well as a web developer provides a variety of
            satisfying, beautiful & functional websites.
          </h2>

          {HoverButton("Get in touch", "bi bi-arrow-right")}
        </div>
        </div>

      {/* About section */}
      <div className="about bg-black rounded-t-6xl px-24 py-32 text-white">
        <h1 className="text-xl mb-5">Myself,</h1>
        <p className="text-xl">
          Hey There, So my name is <i>Vikram Vishwakarma</i>, and I belong from
          Maharashtra, India. I’m an avid learner who enjoys exploring new
          places and discovering new things. I’m a passionate individual who is
          chasing his Goals. I’ve completed my Bachelor's Degree in Computer
          Science and looking for Jobs. I am continuously learning and refining
          my skills in this field.
          <br />
          <br /> If you’d like to know more about me, feel free to reach me out.
          </p>
        </div>

      {/* work section */}
      <div className="px-24 pt-32">
        <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
          <div className="group-hover:z-1 transition-all delay-75 flex">
            <h1 className="">My Work</h1>
            <div className="italic">- "Handcrafted By Me"</div>
          </div>
          <i
            className={`transition-all bi bi-briefcase rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
          ></i>
        </div>

        <div className="grid grid-cols-3 gap-x-10 mt-10">
            <Project
            src="/images/project1.jpg"
            title={"Swamp Calculator"}
            description={
              "It is a android calculator written in java using android API."
            }
            buttonText={"Visit on Github"}
            buttonIcon={"bi bi-github"}
            />
            <Project
            src="/images/project2.jpg"
            title={"Doodle Search"}
            description={
              "Its a static search page, optimised for mobile and desktop sizes."
            }
            buttonText={"Visit Site"}
            />
            <Project
              src="/images/project3.jpg"
            title={"ShopNow"}
            description={
              "It is a E-Commerce website made in React Framework."
            }
            buttonText={"Visit Site"}
            />
          </div>
        </div>

      {/* Achievement section */}
      <div className="px-24 pt-32">
        <div className="flex group w-fit items-center px-3 py-2 mt-8 border border-gray-600 rounded-full relative overflow-hidden cursor-pointer duration-700">
          <div className="group-hover:z-1 transition-all delay-75 flex">
            <h1 className="">My Achievements</h1>
            <div className="italic">- "Everything"</div>
          </div>
          <i
            className={`transition-all bi bi-trophy rounded-full bg-black text-white size-8 flex justify-center items-center ml-2`}
            ></i>
          </div>

        <div className="grid grid-cols-3 gap-x-10 mt-10">
          <Project
            src="/images/project1.jpg"
            title={"Internship Studio"}
            description={
              "I have done a one month intership at Internship Studio on Website design & Development."
            }
          />
          <Project
            src="/images/project2.jpg"
            title={"InternPe"}
            description={
              "I have done a one month intership at InternPe on Website design & Development."
            }
          />
          <Project
            src="/images/project3.jpg"
            title={"Coursera Certification"}
            description={
              "I have done completed a Google IT Automation with Python course offered by Coursera."
            }
          />
        </div>
      </div>

      {/* Contact section */}
      <div className="px-24 py-20 mt-32 bg-black flex justify-between text-white">
          <div className="">
            <h1 className="text-2xl font-semibold">Contact Me</h1>
            <div className="mt-10 gap-x-5">
              <h1 className="cursor-pointer"><span className="font-bold">Mobile: </span>+918805469136</h1>
              <h1 className="cursor-pointer"><span className="font-bold">Email: </span>vs423502@gamil.com</h1>
            </div>
            <div className="flex gap-x-5">
              {SocialButton("Instagram", "bi bi-instagram")}
              {SocialButton("Facebook", "bi bi-facebook")}
              {SocialButton("Twitter", "bi bi-twitter")}
              {SocialButton("Github", "bi bi-github")}
            </div>
          </div>
      </div>
    </div>
  );
}

// supporting function components
function HoverButton(text: String, iconName: String) {
  return (
    <button className="flex group items-center px-3 py-2 mt-8 hover:border-white border border-gray-600 rounded-full relative pr-12 overflow-hidden">
      <h1 className="group-hover:z-10 group-hover:text-white transition-all delay-75">
        {text}
      </h1>
      <i
        className={`absolute transition-all group-hover:justify-end group-hover:pr-3 group-hover:right-0 group-hover:size-full ${iconName} ml-2 rounded-full bg-black text-white size-8 flex justify-center items-center right-1`}
      ></i>
    </button>
  );
}

function SocialButton(text: String, iconName: String) {
  return (
    <button className="flex group items-center px-3 py-2 mt-8 rounded-full relative pr-12 overflow-hidden">
      <h1 className="group-hover:z-10 transition-all group-hover:text-black delay-75">
        {text}
      </h1>
      <i
        className={`absolute transition-all group-hover:justify-end group-hover:text-black group-hover:bg-white group-hover:pr-3 group-hover:right-0 group-hover:size-full ${iconName} ml-2 rounded-full bg-black text-white size-8 flex justify-center items-center right-1`}
      ></i>
    </button>
  );
}


