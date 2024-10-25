import Image from "next/image";

interface ProjectProps {
    src: string,
    title: String,
    description: String
    buttonText?: String,
    buttonIcon?: String,
    onClick?: () => any,
}

export default function Project(props: ProjectProps) {
  return (
    <div onClick={props.onClick} className={`cursor-pointer group shadow-sm ${!props.buttonText? "md:hover:translate-y-5" : ""} transition-all`}>
      <Image src={props.src} alt="project image" className="md:h-64" width={650} height={600} />
      <div className="p-5 bg-neutral-100 h-48">
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <p className="mt-4">{props.description}</p>
        {props.buttonText ? ProjectButton(props.buttonText, props.buttonIcon) : null}
      </div>
    </div>
  );
}

function ProjectButton(text: String, icon?: String) {
  return (
    <button className="flex group items-center px-3 py-2 mt-4 hover:border-white border border-gray-600 rounded-full relative pr-12 overflow-hidden">
      <h1 className="group-hover:z-10 group-hover:text-white transition-all delay-75">
        {text}
      </h1>
      <i
        className={`absolute transition-all group-hover:justify-end group-hover:pr-3 group-hover:right-0 group-hover:size-full ${icon? icon : "bi bi-arrow-up-right"} ml-2 rounded-full bg-black text-white size-8 flex justify-center items-center right-1`}
      ></i>
    </button>
  );
}
