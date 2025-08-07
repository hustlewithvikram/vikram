import HorizontalDetailCard from "../ui/HorizontalDetailCard";
import {
	Code as CodeIcon,
	Language as LanguageIcon,
	IntegrationInstructions as IntegrationInstructionsIcon,
	RocketLaunch as RocketLaunchIcon,
	Dashboard as DashboardIcon,
	Security as SecurityIcon,
	BuildCircle as BuildCircleIcon,
	Folder,
	TimelineOutlined,
} from "@mui/icons-material";

// Set icon size here
const iconSize = 280;

const sampleEvents = [
	{
		date: "Jan 2021",
		title: "Started Learning Web Development",
		description:
			"Driven by curiosity about how websites work, I began exploring HTML, CSS, and JavaScript.",
		icon: <CodeIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Jun 2021",
		title: "Built My First Website",
		description:
			"My first portfolio was rough—bad layout, awkward colors. But it marked the beginning.",
		icon: <LanguageIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Dec 2021",
		title: "Learned ReactJs & Tailwind",
		description:
			"I explored modern frontend tools like React.js and Tailwind CSS through tutorials.",
		icon: <IntegrationInstructionsIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Jul 2022",
		title: "Dived Into Next.js and Advanced UI",
		description:
			"I began mastering Next.js for SSR, routing, and integrated Figma for design systems.",
		icon: <RocketLaunchIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Nov 2023",
		title: "Built Fullstack Projects",
		description:
			"Deployed 'ShopNow' (e-commerce app) with authentication, cart, filters, admin panel.",
		icon: <DashboardIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Apr 2024",
		title: "Started Learning Auth and Security",
		description:
			"Worked on nextjs nextauth authentication as well as clerk auth as well as traditional one's.",
		icon: <SecurityIcon style={{ fontSize: iconSize }} />,
	},
	{
		date: "Jul 2025",
		title: "Building With Refined Skills",
		description:
			"Now confident across frontend & backend. Focused on UI, performance, and clean code.",
		icon: <BuildCircleIcon style={{ fontSize: iconSize }} />,
	},
];

const Timeline = () => {
	return (
		<section id="timeline" className="px-6 md:px-12">
			<div className="flex justify-start">
				<div className="flex items-center gap-3 w-fit md:mb-12 mb-6 px-6 py-3 rounded-full bg-neutral-900 text-white">
					<TimelineOutlined className="size-5" />
					<h2 className="text-xl font-semibold">Timeline</h2>
				</div>
			</div>
			{sampleEvents.map((event, index) => (
				<div key={index}>
					<HorizontalDetailCard
						title={event.title}
						description={event.description}
						icon={event.icon}
					/>
					<div
						className={`w-full ${
							index % 2 === 0 ? "flex justify-end" : ""
						}`}
					>
						<div className="h-12 w-[2px] bg-black dark:bg-white opacity-60"></div>
					</div>
				</div>
			))}
		</section>
	);
};

export default Timeline;
