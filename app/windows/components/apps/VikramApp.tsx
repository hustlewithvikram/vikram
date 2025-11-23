export function VikramApp({ windowId }: { windowId: string }) {
	return (
		<div className="h-full bg-white">
			<div className="p-6">
				<h1 className="text-2xl font-bold text-gray-800 mb-4">
					Vikram Vishwakarma
				</h1>
				<div className="space-y-3 text-gray-600">
					<p>Welcome to my portfolio!</p>
					<p>
						This is a sample app window demonstrating the window
						system.
					</p>
				</div>
			</div>
		</div>
	);
}
