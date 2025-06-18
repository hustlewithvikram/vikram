import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import SocialButton from "../ui/SocialButton";
import { openUrl } from "../../utils/utils";
const github_url = "https://github.com/vikramisdev/";
const email_url = "vs423502@gmail.com";
const mobile_number = "+918805469136";

const Footer = () => {
	return (
		<footer
			id="contact"
			className="md:px-24 md:py-32 px-6 py-12 bg-black text-white"
		>
			<h2 className="text-2xl font-semibold">Contact Me</h2>
			<div className="mt-10">
				<p>
					<strong>Mobile:</strong> {mobile_number}
				</p>
				<p>
					<strong>Email:</strong> {email_url}
				</p>
			</div>
			<div className="flex md:gap-x-5 mt-5">
				<SocialButton
					onClick={() => openUrl("https://instagram.com/vikramisdev")}
					text="Instagram"
					icon={<FaInstagram className="text-white text-3xl" />}
				/>
				<SocialButton
					onClick={() => openUrl("https://facebook.com/vikramisdev")}
					text="Facebook"
					icon={<FaFacebook className="text-white text-3xl" />}
				/>
				<SocialButton
					onClick={() => openUrl("https://x.com/vikramisdev")}
					text="Twitter"
					icon={<FaTwitter className="text-white text-3xl" />}
				/>
				<SocialButton
					onClick={() => openUrl(github_url)}
					text="Github"
					icon={<FaGithub className="text-white text-3xl" />}
				/>
			</div>
		</footer>
	);
};

export default Footer;
