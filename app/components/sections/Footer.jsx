import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { openUrl } from "../../utils/utils";

const githubUrl = "https://github.com/vikramisdev";
const instagramUrl = "https://instagram.com/vikramisdev";
const facebookUrl = "https://facebook.com/vikramisdev";
const twitterUrl = "https://x.com/vikramisdev";
const email = "vs423502@gmail.com";
const phone = "+918805469136";

const Footer = () => {
	return (
		<footer
			id="contact"
			className="bg-black text-white px-6 md:px-24 py-12 md:py-24 rounded-3xl m-4"
		>
			{/* Heading */}
			<h2 className="text-2xl font-bold mb-6 border-b border-gray-700 w-fit pb-2">
				Contact Me
			</h2>

			{/* Contact Info */}
			<div className="space-y-2 text-sm md:text-base">
				<p>
					<strong>Phone:</strong>{" "}
					<a
						href={`tel:${phone}`}
						className="hover:underline text-gray-300"
					>
						{phone}
					</a>
				</p>
				<p>
					<strong>Email:</strong>{" "}
					<a
						href={`mailto:${email}`}
						className="hover:underline text-gray-300"
					>
						{email}
					</a>
				</p>
			</div>

			{/* Social Links */}
			<div className="flex flex-wrap gap-4 mt-6">
				<SocialIcon
					url={instagramUrl}
					label="Instagram"
					icon={<FaInstagram />}
				/>
				<SocialIcon
					url={facebookUrl}
					label="Facebook"
					icon={<FaFacebook />}
				/>
				<SocialIcon
					url={twitterUrl}
					label="Twitter"
					icon={<FaTwitter />}
				/>
				<SocialIcon
					url={githubUrl}
					label="GitHub"
					icon={<FaGithub />}
				/>
			</div>
		</footer>
	);
};

export default Footer;

function SocialIcon({ url, label, icon }) {
	return (
		<button
			onClick={() => openUrl(url)}
			aria-label={label}
			className="group flex items-center gap-2 text-white bg-zinc-800 hover:bg-white hover:text-black px-2 py-2 rounded-full transition-all duration-200"
		>
			<span className="text-xl">{icon}</span>
			<span className="hidden sm:inline text-sm font-medium">
				{label}
			</span>
		</button>
	);
}
