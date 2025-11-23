"use client";

import { useState } from "react";
import {
	Delete,
	RestoreFromTrash,
	Folder,
	Description,
	Image as ImageIcon,
	MusicNote,
} from "@mui/icons-material";

interface RecycleItem {
	id: string;
	name: string;
	type: string;
	deletedDate: string;
	originalLocation: string;
	size: string;
	icon: React.ReactNode;
}

export function RecycleBinApp({ windowId }: { windowId: string }) {
	const [items, setItems] = useState<RecycleItem[]>([
		{
			id: "1",
			name: "old-project.zip",
			type: "Compressed folder",
			deletedDate: "2024-01-15",
			originalLocation: "C:\\Users\\Vikram\\Documents",
			size: "45.2 MB",
			icon: <Folder sx={{ color: "#0078D4" }} />,
		},
		{
			id: "2",
			name: "screenshot.png",
			type: "PNG Image",
			deletedDate: "2024-01-14",
			originalLocation: "C:\\Users\\Vikram\\Pictures",
			size: "2.1 MB",
			icon: <ImageIcon sx={{ color: "#107C10" }} />,
		},
		{
			id: "3",
			name: "document.txt",
			type: "Text Document",
			deletedDate: "2024-01-13",
			originalLocation: "C:\\Users\\Vikram\\Documents",
			size: "15 KB",
			icon: <Description sx={{ color: "#D83B01" }} />,
		},
		{
			id: "4",
			name: "song.mp3",
			type: "MP3 Audio",
			deletedDate: "2024-01-12",
			originalLocation: "C:\\Users\\Vikram\\Music",
			size: "8.5 MB",
			icon: <MusicNote sx={{ color: "#E81123" }} />,
		},
	]);

	const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

	const handleRestore = (id: string) => {
		setItems(items.filter((item) => item.id !== id));
		setSelectedItems((prev) => {
			const newSet = new Set(prev);
			newSet.delete(id);
			return newSet;
		});
	};

	const handleRestoreAll = () => {
		setItems([]);
		setSelectedItems(new Set());
	};

	const handleEmptyBin = () => {
		setItems([]);
		setSelectedItems(new Set());
	};

	const toggleSelectItem = (id: string) => {
		setSelectedItems((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(id)) {
				newSet.delete(id);
			} else {
				newSet.add(id);
			}
			return newSet;
		});
	};

	return (
		<div className="h-full bg-white flex flex-col">
			{/* Header */}
			<div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
				<div className="flex items-center gap-3">
					<Delete sx={{ fontSize: 24, color: "#0078D4" }} />
					<div>
						<h1 className="text-lg font-semibold text-gray-900">
							Recycle Bin
						</h1>
						<p className="text-sm text-gray-600">
							{items.length} item{items.length !== 1 ? "s" : ""}
						</p>
					</div>
				</div>
			</div>

			{/* Toolbar */}
			<div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center gap-2">
				<button
					onClick={handleRestoreAll}
					disabled={items.length === 0}
					className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<RestoreFromTrash sx={{ fontSize: 18 }} />
					Restore all
				</button>
				<button
					onClick={handleEmptyBin}
					disabled={items.length === 0}
					className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed"
				>
					<Delete sx={{ fontSize: 18 }} />
					Empty bin
				</button>
			</div>

			{/* Content */}
			<div className="flex-1 overflow-auto p-6">
				{items.length === 0 ? (
					<div className="flex flex-col items-center justify-center h-full text-gray-500">
						<Delete
							sx={{ fontSize: 64, color: "#E5E5E5", mb: 2 }}
						/>
						<p className="text-lg font-medium">
							Recycle Bin is empty
						</p>
						<p className="text-sm">
							Items you delete will appear here
						</p>
					</div>
				) : (
					<div className="space-y-2">
						{items.map((item) => (
							<div
								key={item.id}
								className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
									selectedItems.has(item.id)
										? "bg-blue-50 border-blue-200"
										: "bg-white border-gray-200 hover:bg-gray-50"
								}`}
								onClick={() => toggleSelectItem(item.id)}
							>
								<div className="flex items-center gap-3 flex-1 min-w-0">
									{item.icon}
									<div className="flex-1 min-w-0">
										<div className="font-medium text-gray-900 truncate">
											{item.name}
										</div>
										<div className="text-sm text-gray-600">
											{item.type} • {item.size} • Deleted{" "}
											{item.deletedDate}
										</div>
										<div className="text-xs text-gray-500 truncate">
											Original location:{" "}
											{item.originalLocation}
										</div>
									</div>
								</div>
								<button
									onClick={(e) => {
										e.stopPropagation();
										handleRestore(item.id);
									}}
									className="flex items-center gap-1 px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded"
								>
									<RestoreFromTrash sx={{ fontSize: 16 }} />
									Restore
								</button>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Status Bar */}
			<div className="bg-gray-50 border-t border-gray-200 px-6 py-2 text-sm text-gray-600">
				{selectedItems.size > 0
					? `${selectedItems.size} of ${items.length} item${
							items.length !== 1 ? "s" : ""
					  } selected`
					: `${items.length} item${items.length !== 1 ? "s" : ""}`}
			</div>
		</div>
	);
}
