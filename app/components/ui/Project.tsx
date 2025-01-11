import {
  IconArrowBarRight,
  IconArrowCurveRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Image from "next/image";

interface ProjectProps {
  src: string;
  title: string;
  className?: string;
  number: number;
}

export default function Project(props: ProjectProps) {
  return (
    <div
      className={`group cursor-pointer relative min-w-360 w-full h-[calc(100vh-4rem)] text-white ${props.className}`}
    >
      <img
        src={props.src}
        alt={props.title}
        className={`w-full h-full`}
        style={{ objectFit: "fill" }}
      />
      <div className="bg-[#111] h-full w-full transition-all duration-500  group-hover:bg-opacity-35 group-hover:bg-gray-700 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center">
        <div className="flex justify-center items-center flex-1 text-9xl font-normal group-hover:text-white">
          <h1>{props.number}</h1>
        </div>
        <div className="flex justify-between items-center w-full px-8 py-8 h-fit group-hover:text-white">
          <div>
            <h1 className="text-2xl font-semibold">Project Title</h1>
            <p>Description</p>
          </div>
          <IconArrowUpRight className="size-14" />
        </div>
      </div>
    </div>
  );
}
