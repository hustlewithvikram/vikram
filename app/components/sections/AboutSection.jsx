import React, { useEffect, useRef, useState } from "react";
import HyperText from "@/components/ui/hyper-text";
import { Lens } from "../../../components/ui/lens";

const AboutSection = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      data-scroll
      className="dark:bg-[#111] bg-[#f8f8f8] py-12 md:px-32 px-12 h-screen duration-1000 text-gray-300 flex md:flex-row md:items-center md:gap-x-12 flex-col gap-y-12 items-center relative"
    >
      <img
        src="/images/profile.png"
        alt="line"
        data-scroll
        data-scroll-class="line"
        width={500}
        height={500}
        className="rounded-full"
      />
      <section className="flex-1">
        <HyperText
          text="Myself"
          className="text-4xl text-black dark:text-inherit"
        />
        <p className="text-xl text-justify md:text-2xl text-black dark:text-inherit">
          Hi There, My name is Vikram Vishwakarma and I belong from Maharashtra,
          India. I have recently completed my degree in the field of computer
          science, I like to design and build websites that are responsive and
          beautiful. I use softwares like figma & adobe illustrator to design &
          for the building part I use various web frameworks to build my
          website. I always try to make the websites clean, minimal, responsive
          & user friendly with smooth animations and transitions.
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
