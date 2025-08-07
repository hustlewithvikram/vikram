import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
	title: "Vikram Vishwakarma",
	description:
		"Portfolio of Vikram Vishwakarma, a Web Developer specializing in Next.js, React, and JavaScript.",
	keywords: [
		"Vikram Vishwakarma",
		"Web Developer",
		"Next.js",
		"React",
		"JavaScript",
		"Portfolio",
	],
	creator: "Vikram Vishwakarma",
	authors: { name: "Vikram Vishwakarma" },
	robots: "index, follow", // Instructs search engines to index the page and follow links
};

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/images/profile_round.ico" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Vikram Vishwakarma",
							url: "https://vikram.is-a.dev",
							sameAs: [
								"https://www.linkedin.com/in/vikramisdev",
								"https://github.com/vikramisdev",
							],
						}),
					}}
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				{/* Open Graph Tags */}
				<meta
					property="og:title"
					content="Vikram Vishwakarma - Web Developer"
				/>
				<meta
					property="og:description"
					content="Portfolio of Vikram Vishwakarma, a Web Developer specializing in Next.js, React, and JavaScript."
				/>
				<meta property="og:image" content="/images/profile_round.ico" />
				<meta property="og:url" content="https://vikram.is-a.dev" />
				<meta property="og:type" content="website" />

				{/* Twitter Meta Tags */}
				<meta name="twitter:creator" content="@vikramisdev" />
				<meta
					name="twitter:title"
					content="Vikram Vishwakarma - Web Developer"
				/>
				<meta
					name="twitter:description"
					content="Portfolio of Vikram Vishwakarma, a Web Developer specializing in Next.js, React, and JavaScript."
				/>
				<meta
					name="twitter:image"
					content="/images/profile_round.ico"
				/>
			</head>
			<body className="bg-background dark:bg-[#111] transition-all md:duration-700">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
