interface HoverButtonInterface {
  text: String;
  iconName: String;
  onClick?: () => any;
}

export default function HoverButton(props: HoverButtonInterface) {
  return (
    <button
      onClick={props.onClick}
      className="flex group items-center px-4 py-2 hover:border-white border border-gray-600 rounded-full relative pr-12 overflow-hidden w-fit"
    >
      <h1 className="group-hover:z-10 group-hover:text-black transition-all delay-75 font-sans">
        {props.text}
      </h1>
      <i
        className={`absolute transition-all group-hover:justify-end group-hover:pr-3 group-hover:right-0 group-hover:size-full duration-300 ${props.iconName} ml-2 rounded-full bg-white text-black size-8 flex justify-center items-center right-1`}
      ></i>
    </button>
  );
}
