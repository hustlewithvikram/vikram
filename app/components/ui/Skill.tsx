import Image from "next/image";
import "@/app/globals.css";

interface SkillProps {
  src: string;
  alt: string;
  text: String;
  className?: string;
  imgClassName?: string;
  textClassName?: string;
  overlayText?: string;
  onClick?: () => {};
}

export default function Skill(props: SkillProps) {
  return (
    <div
      className={`${props.className} group md:gap-x-10 md:p-10 md:overflow-hidden md:cursor-pointer border-2 border-slate-50 | flex items-center p-5 m-5 gap-x-5 overflow-hidden rounded-full relative`}
    >
      <Image
        className={`${props.imgClassName} md:group-hover:translate-y-96 md:group-hover:blur-md md:transition-all md:duration-500`}
        src={props.src}
        alt={props.alt}
        width={500}
        height={500}
      />
      <h1
        className={`${props.textClassName} md:group-hover:translate-y-96 text-6xl font-bold md:group-hover:blur-md md:transition-all md:duration-500`}
      >
        {props.text}
      </h1>
      {props.overlayText ? (
        <div className="absolute left-0 right-0 top-0 bottom-0 text-white md:group-hover:translate-x-0 translate-x-[1000px] md:transition-all md:duration-500 flex justify-center items-center overflow-hidden">
          <h1 className="text-5xl font-bold">{props.overlayText}</h1>
        </div>
      ) : null}
    </div>
  );
}
