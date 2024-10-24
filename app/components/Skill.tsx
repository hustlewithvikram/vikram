import Image from "next/image";
import "../globals.css";

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
    <div className={`${props.className} group md:rounded-2xl md:gap-x-10 md:p-10 md:overflow-hidden md:cursor-pointer md:border-2 md:border-slate-50 | flex items-center p-5 m-5 gap-x-5 overflow-hidden rounded-xl relative`}>
      <Image
        className={`${props.imgClassName} md:group-hover:translate-y-14 md:group-hover:blur-md md:transition-all md:duration-500`}
        src={props.src}
        alt={props.alt}
        width={500}
        height={500}
      />
      <h1 className={`${props.textClassName} text-6xl font-bold md:group-hover:blur-md md:transition-all md:duration-500`}>
        {props.text}
      </h1>
      {props.overlayText? <div className="absolute left-0 right-0 top-0 bottom-0 md:bg-white md:group-hover:opacity-85 md:transition-all md:duration-500 opacity-0 flex justify-center items-center overflow-hidden">
        <h1 className="text-6xl font-bold">{props.overlayText}</h1>
      </div> : null}
    </div>
  );
}
