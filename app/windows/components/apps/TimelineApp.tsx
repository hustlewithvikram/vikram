export function TimelineApp({ windowId }: { windowId: string }) {
	return (
		<div className="h-full bg-white">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					My Timeline
				</h1>
				<div className="space-y-4">
					<div className="border-l-4 border-purple-500 pl-4">
						<h3 className="font-semibold text-gray-500">
							2025 - Present
						</h3>
						<p className="text-gray-800">
							FullStack React & React Native Developer
						</p>
					</div>
					<div className="border-l-4 border-blue-500 pl-4">
						<h3 className="font-semibold text-gray-500">
							2024 - 2025
						</h3>
						<p className="text-gray-800">Frontend Developer</p>
					</div>
				</div>
			</div>
		</div>
	);
}
