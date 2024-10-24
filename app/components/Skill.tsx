import Image from "next/image";
import "../globals.css";

interface SkillProps {
  src: string;
  alt: string;
  text: String;
  background: string,
  onClick?: () => {};
}

export default function Skill(props: SkillProps) {
  return (
    <div className={`${props.background} h-40 md:col-span-2 md:rounded-tl-xl flex items-center gap-x-5 overflow-hidden hover:scale-95 transition-all duration-500 hover:rounded-xl p-10`}>
      <Image
        className="size-28"
        src={props.src}
        alt={props.alt}
        width={100}
        height={100}
      />
      <h1 className="md:text-9xl text-6xl font-bold font-roboto mr-10 text-slate-100">
        {props.text}
      </h1>
    </div>
  );
}
