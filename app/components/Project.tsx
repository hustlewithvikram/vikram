import Image from "next/image";

interface ProjectProps {
    src: string,
    overlaysrc: string,
    title: string,
    description: string,
    projectDescription: string,
    handleButton(): void,
    buttonText: string
}

export default function Project(props: ProjectProps) {
  return (
    <div className="flex flex-col justify-center m-5 md:m-10 h-fit">
      <div className="relative h-72 w-full rounded-3xl overflow-hidden">
        <Image className="h-full w-full" alt="project" height={100} width={300} src={props.src} />
        <div className="overlay h-full w-full absolute flex items-center top-0 left-0 right-0 bottom-0 gap-4 justify-center sm:hover:opacity-0 bg-white cursor-pointer opacity-0 lg:opacity-100">
          <Image
            className="h-10 w-10"
            alt="project cover"
            height={500}
            width={500}
            src={props.overlaysrc}
          />
          <div>
            <h1 className="font-bold font-sans">{props.title}</h1>
            <p className="opacity-80">{props.description}</p>
          </div>
        </div>
      </div>
      <p className="mt-5 text-dark">{props.projectDescription}</p>
      {props.buttonText.length != 0? <button className="w-fit bg-slate-100 px-4 py-2 mt-5 rounded-full" onClick={props.handleButton}>{props.buttonText}</button> : ''}
    </div>
  );
}
