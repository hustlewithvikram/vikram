export function SkillsApp({ windowId }: { windowId: string }) {
	const skills = [
		"React/Next.js",
		"TypeScript",
		"Node.js",
		"Python",
		"UI/UX Design",
		"MongoDB",
	];

	return (
		<div className="h-full bg-white">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					My Skills
				</h1>
				<div className="grid grid-cols-2 gap-3">
					{skills.map((skill, index) => (
						<div
							key={index}
							className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-800"
						>
							{skill}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
