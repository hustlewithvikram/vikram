export function ReachOutApp({ windowId }: { windowId: string }) {
	return (
		<div className="h-full bg-white">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					Reach Out
				</h1>
				<div className="space-y-4">
					<div>
						<h3 className="font-semibold text-gray-700">Email</h3>
						<p className="text-gray-600">contact@vikram.com</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-700">
							LinkedIn
						</h3>
						<p className="text-gray-600">linkedin.com/in/vikram</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-700">GitHub</h3>
						<p className="text-gray-600">github.com/vikram</p>
					</div>
				</div>
			</div>
		</div>
	);
}
