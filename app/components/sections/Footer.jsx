import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Phone, Email } from "@mui/icons-material"; // MUI icons
import { openUrl } from "../../utils/utils";

const CONTACTS = {
	github: "https://github.com/vikramisdev",
	instagram: "https://instagram.com/vikramisdev",
	facebook: "https://facebook.com/vikramisdev",
	twitter: "https://x.com/vikramisdev",
	email: "vs423502@gmail.com",
	phone: "+918805469136",
};

export default function Footer() {
	return (
		<footer className="bg-black text-white px-6 md:px-24 py-12 md:py-24 rounded-3xl m-4 relative overflow-hidden">
			<h2 className="text-2xl md:text-3xl font-bold mb-8 border-b border-gray-700 w-fit pb-2">
				Contact Me
			</h2>

			{/* Contact Info */}
			<div className="space-y-3 md:space-y-2 my-6 text-sm md:text-base">
				<ContactItem
					value={CONTACTS.phone}
					href={`tel:${CONTACTS.phone}`}
					icon={<Phone />}
				/>
				<ContactItem
					value={CONTACTS.email}
					href={`mailto:${CONTACTS.email}`}
					icon={<Email />}
				/>
			</div>

			{/* Social Links */}
			<div className="flex flex-wrap gap-4">
				<SocialIcon
					url={CONTACTS.instagram}
					label="Instagram"
					icon={<FaInstagram />}
				/>
				<SocialIcon
					url={CONTACTS.facebook}
					label="Facebook"
					icon={<FaFacebook />}
				/>
				<SocialIcon
					url={CONTACTS.twitter}
					label="Twitter"
					icon={<FaTwitter />}
				/>
				<SocialIcon
					url={CONTACTS.github}
					label="GitHub"
					icon={<FaGithub />}
				/>
			</div>
		</footer>
	);
}

// Contact Item
function ContactItem({ value, href, icon }) {
	return (
		<a
			href={href}
			className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
		>
			{icon} {/* MUI icon instead of label */}
			<span>{value}</span>
		</a>
	);
}

// Social Icon
function SocialIcon({ url, label, icon }) {
	return (
		<button
			onClick={() => openUrl(url)}
			aria-label={label}
			className="group flex items-center gap-2 text-white bg-zinc-800 hover:bg-white hover:text-black px-4 py-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
		>
			<span className="text-xl">{icon}</span>
			<span className="hidden sm:inline text-sm font-medium">
				{label}
			</span>
		</button>
	);
}
