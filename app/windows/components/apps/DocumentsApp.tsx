"use client";

import { useState } from "react";
import {
	Folder,
	Description,
	PictureAsPdf,
	InsertDriveFile,
	CreateNewFolder,
	CloudUpload,
} from "@mui/icons-material";

interface DocumentItem {
	id: string;
	name: string;
	type: string;
	modified: string;
	size: string;
	icon: React.ReactNode;
}

export function DocumentsApp({ windowId }: { windowId: string }) {
	const [items, setItems] = useState<DocumentItem[]>([
		{
			id: "1",
			name: "Projects",
			type: "File folder",
			modified: "2024-01-15",
			size: "—",
			icon: <Folder sx={{ color: "#0078D4" }} />,
		},
		{
			id: "2",
			name: "Resume.pdf",
			type: "PDF Document",
			modified: "2024-01-14",
			size: "245 KB",
			icon: <PictureAsPdf sx={{ color: "#D83B01" }} />,
		},
		{
			id: "3",
			name: "Notes.txt",
			type: "Text Document",
			modified: "2024-01-13",
			size: "15 KB",
			icon: <Description sx={{ color: "#107C10" }} />,
		},
		{
			id: "4",
			name: "Budget.xlsx",
			type: "Excel Worksheet",
			modified: "2024-01-12",
			size: "89 KB",
			icon: <InsertDriveFile sx={{ color: "#107C10" }} />,
		},
		{
			id: "5",
			name: "Presentation.pptx",
			type: "PowerPoint Presentation",
			modified: "2024-01-11",
			size: "2.1 MB",
			icon: <InsertDriveFile sx={{ color: "#D83B01" }} />,
		},
	]);

	const [viewMode, setViewMode] = useState<"grid" | "list">("list");

	return (
		<div className="h-full bg-white flex flex-col">
			{/* Header */}
			<div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Folder sx={{ fontSize: 24, color: "#0078D4" }} />
						<div>
							<h1 className="text-lg font-semibold text-gray-900">
								Documents
							</h1>
							<p className="text-sm text-gray-600">
								This PC → Documents
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
							<CreateNewFolder sx={{ fontSize: 18 }} />
							New folder
						</button>
						<button className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded">
							<CloudUpload sx={{ fontSize: 18 }} />
							Upload
						</button>
					</div>
				</div>
			</div>

			{/* Toolbar */}
			<div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between">
				<div className="flex items-center gap-4">
					<button
						onClick={() => setViewMode("list")}
						className={`px-3 py-1 text-sm rounded ${
							viewMode === "list"
								? "bg-blue-100 text-blue-700"
								: "text-gray-700 hover:bg-gray-100"
						}`}
					>
						List view
					</button>
					<button
						onClick={() => setViewMode("grid")}
						className={`px-3 py-1 text-sm rounded ${
							viewMode === "grid"
								? "bg-blue-100 text-blue-700"
								: "text-gray-700 hover:bg-gray-100"
						}`}
					>
						Grid view
					</button>
				</div>
				<div className="text-sm text-gray-600">
					{items.length} item{items.length !== 1 ? "s" : ""}
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 overflow-auto p-6">
				{viewMode === "list" ? (
					// List View
					<div className="space-y-1">
						{items.map((item) => (
							<div
								key={item.id}
								className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
							>
								{item.icon}
								<div className="flex-1 min-w-0">
									<div className="font-medium text-gray-900">
										{item.name}
									</div>
								</div>
								<div className="text-sm text-gray-600 w-32">
									{item.type}
								</div>
								<div className="text-sm text-gray-600 w-24">
									{item.modified}
								</div>
								<div className="text-sm text-gray-600 w-20 text-right">
									{item.size}
								</div>
							</div>
						))}
					</div>
				) : (
					// Grid View
					<div className="grid grid-cols-4 gap-4">
						{items.map((item) => (
							<div
								key={item.id}
								className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer text-center"
							>
								{item.icon}
								<div className="mt-2 text-sm font-medium text-gray-900 truncate w-full">
									{item.name}
								</div>
								<div className="text-xs text-gray-600">
									{item.type}
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Status Bar */}
			<div className="bg-gray-50 border-t border-gray-200 px-6 py-2 text-sm text-gray-600">
				{items.length} item{items.length !== 1 ? "s" : ""}
			</div>
		</div>
	);
}
