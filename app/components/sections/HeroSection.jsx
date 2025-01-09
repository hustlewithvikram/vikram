"use client"; // Required for client-side rendering in Next.js
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import Image from "next/image";
import { email_url } from "@/app/constants/constants";
import openUrl from "@/app/utils/utils";
import HoverButton from "../ui/HoverButton";
import { IconLine } from "@tabler/icons-react";
import HyperText from "@/components/ui/hyper-text";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      inertia: 0.5,
    });

    // GSAP Animation
    gsap.timeline().to(".line", {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      className="bg-[#111] h-screen relative flex text-[#aaa] font-bebas"
    >
      {/* left section */}
      <section className="flex items-center pl-24 gap-x-16 absolute rotate-90 left-20 origin-top-left w-[100vh] h-20">
        <div className="bg-[#aaa] w-[1px] h-[100px] rotate-90"></div>
        <h1 className="font-roboto w-60">UI/UX Designer &</h1>
        <div className="bg-[#aaa] w-[1px] h-[330px] rotate-90"></div>
      </section>

      {/* middle section */}
      <section className="flex-1 flex flex-col justify-center px-32">
        <div className="space-y-2">
          <div
            data-scroll
            data-scroll-class="frontend-text"
            data-scroll-direction="vertical"
            data-scroll-offset="50%"
            className="bg-[#ED1D24] px-8 w-fit flex items-center"
          >
            <HyperText
              className="text-[14rem] text-[#111] h-48 flex items-center"
              text="FRONTEND"
            />
          </div>
          <div
            data-scroll
            data-scroll-class="developer-text"
            data-scroll-direction="horizontal"
            data-scroll-offset="50%"
            className="flex items-center"
          >
            <HyperText
              className="text-[14rem] h-48 flex items-center"
              text="DEVELOPER"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-2 py-4">
            <IconLine className="size-8 md:hover:rotate-45 transition-all" />
            <h1 className="font-sans text-xl font-light opacity-75">
              It&rsquo;s Vikram Vishwakarma, a design Enthusiast.
            </h1>
          </div>
          <HoverButton
            onClick={() => openUrl("mailto:" + email_url)}
            text="Get in touch"
            iconName="bi bi-arrow-right"
          />
        </div>
      </section>

      {/* right section */}
      {/* <section className="flex-1 flex justify-center items-center">
        <Image
          className="md:cursor-pointer size-[50vh] transition-all rounded-full"
          src={"/images/profile.jpg"}
          alt="vikram profile picture"
          height={2000}
          width={2000}
        />
      </section> */}
    </div>
  );
};

export default HeroSection;
