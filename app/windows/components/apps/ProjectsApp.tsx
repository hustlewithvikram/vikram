export function ProjectsApp({ windowId }: { windowId: string }) {
	const projects = [
		{ name: "E-commerce Platform", tech: "Next.js, Stripe, PostgreSQL" },
		{ name: "AI Chat Application", tech: "React, Node.js, OpenAI" },
		{ name: "Mobile Fitness App", tech: "React Native, Firebase" },
	];

	return (
		<div className="h-full bg-white">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					My Projects
				</h1>
				<div className="space-y-4">
					{projects.map((project, index) => (
						<div
							key={index}
							className="p-4 border border-gray-200 rounded-lg"
						>
							<h3 className="font-semibold text-gray-800">
								{project.name}
							</h3>
							<p className="text-sm text-gray-600">
								{project.tech}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
