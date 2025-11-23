"use client";

import { useState } from "react";
import {
	Image as ImageIcon,
	Folder,
	Collections,
	CloudUpload,
} from "@mui/icons-material";

interface PictureItem {
	id: string;
	name: string;
	type: string;
	dimensions: string;
	size: string;
	date: string;
}

export function PicturesApp({ windowId }: { windowId: string }) {
	const [items, setItems] = useState<PictureItem[]>([
		{
			id: "1",
			name: "vacation-2024.jpg",
			type: "JPEG Image",
			dimensions: "4000×3000",
			size: "4.2 MB",
			date: "2024-01-15",
		},
		{
			id: "2",
			name: "screenshot.png",
			type: "PNG Image",
			dimensions: "1920×1080",
			size: "1.8 MB",
			date: "2024-01-14",
		},
		{
			id: "3",
			name: "design.ai",
			type: "Illustrator File",
			dimensions: "—",
			size: "15.6 MB",
			date: "2024-01-13",
		},
		{
			id: "4",
			name: "wallpaper.jpg",
			type: "JPEG Image",
			dimensions: "3840×2160",
			size: "8.9 MB",
			date: "2024-01-12",
		},
		{
			id: "5",
			name: "logo.svg",
			type: "SVG Image",
			dimensions: "512×512",
			size: "45 KB",
			date: "2024-01-11",
		},
	]);

	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className="h-full bg-white flex flex-col">
			{/* Header */}
			<div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<ImageIcon sx={{ fontSize: 24, color: "#0078D4" }} />
						<div>
							<h1 className="text-lg font-semibold text-gray-900">
								Pictures
							</h1>
							<p className="text-sm text-gray-600">
								This PC → Pictures
							</p>
						</div>
					</div>
					<button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
						<CloudUpload sx={{ fontSize: 18 }} />
						Import photos
					</button>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 overflow-auto p-6">
				<div className="grid grid-cols-5 gap-4">
					{items.map((item) => (
						<div
							key={item.id}
							className="flex flex-col items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer group"
							onClick={() => setSelectedImage(item.id)}
						>
							<div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-2">
								<ImageIcon
									sx={{ fontSize: 32, color: "#6B7280" }}
								/>
							</div>
							<div className="text-sm font-medium text-gray-900 text-center truncate w-full">
								{item.name}
							</div>
							<div className="text-xs text-gray-600 text-center">
								{item.dimensions}
							</div>
							<div className="text-xs text-gray-500">
								{item.size}
							</div>
						</div>
					))}
				</div>

				{/* Folders Section */}
				<div className="mt-8">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">
						Folders
					</h3>
					<div className="grid grid-cols-4 gap-4">
						<div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
							<Folder sx={{ fontSize: 48, color: "#0078D4" }} />
							<div className="mt-2 text-sm font-medium text-gray-900">
								Vacation 2024
							</div>
							<div className="text-xs text-gray-600">
								15 items
							</div>
						</div>
						<div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
							<Collections
								sx={{ fontSize: 48, color: "#0078D4" }}
							/>
							<div className="mt-2 text-sm font-medium text-gray-900">
								Screenshots
							</div>
							<div className="text-xs text-gray-600">8 items</div>
						</div>
					</div>
				</div>
			</div>

			{/* Status Bar */}
			<div className="bg-gray-50 border-t border-gray-200 px-6 py-2 text-sm text-gray-600">
				{items.length} item{items.length !== 1 ? "s" : ""}
			</div>
		</div>
	);
}
