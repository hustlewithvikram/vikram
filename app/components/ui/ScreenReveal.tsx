import React, { useEffect, useRef } from "react";
import "@/app/globals.css";
import { IconSkull } from "@tabler/icons-react";

// Props Type Definition
interface ScreenRevealProps {
  animationEnded: boolean;
  setAnimationEnded: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ScreenReveal({
  animationEnded,
  setAnimationEnded,
}: ScreenRevealProps) {
  const upperDivRef = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);
  const lowerDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (upperDivRef.current && lowerDivRef.current && middleRef.current) {
      // Safely access and modify style properties
      setTimeout(() => {
        middleRef.current?.style.setProperty("width", "55px");
        upperDivRef.current?.style.setProperty("height", "0");
        lowerDivRef.current?.style.setProperty("height", "0");

        setTimeout(() => {
          middleRef.current?.style.setProperty("border-radius", "400px");
        }, 600);
      }, 1000);

      setTimeout(() => {
        setAnimationEnded(true);
      }, 2200);
    }
  }, [setAnimationEnded]);

  return animationEnded ? (
    <></>
  ) : (
    <div
      onScroll={() => {}}
      className="w-full h-screen flex flex-col justify-between fixed inset-0 z-50 pointer-events-auto"
    >
      <div
        ref={upperDivRef}
        className="bg-black"
        style={{ height: "46%", transition: "height 1s ease-in-out 0.4s" }}
      />
      <div
        className={`overflow-hidden w-full flex justify-center h-[8%] ${
          animationEnded && "hidden"
        }`}
      >
        <div
          ref={middleRef}
          className="bg-red-600 z-50 py-4 overflow-hidden flex justify-center"
          style={{
            width: "100%",
            transition: "width 1s ease-in-out, border-radius 1s ease-in-out",
          }}
        >
          <IconSkull />
        </div>
      </div>
      <div
        ref={lowerDivRef}
        className="bg-black"
        style={{ height: "46%", transition: "height 1s ease-in-out 0.4s" }}
      />
    </div>
  );
}
