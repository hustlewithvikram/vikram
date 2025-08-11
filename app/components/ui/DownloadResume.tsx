"use client";

import React from "react";

const resumeUrl = "/documents/Vikram_Vishwakarma_Back-End_Developer_Resume.pdf";
const fileName = "Vikram Vishwakarma - Backend Developer.pdf";

export default function DownloadResume(): JSX.Element {
	return (
		<a
			href={resumeUrl}
			download={fileName}
			className="flex justify-center w-fit items-center px-4 py-2 bg-gray-50 dark:bg-zinc-900 dark:text-white rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
			aria-label="Download Resume PDF"
		>
			Download Resume
		</a>
	);
}
