"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
	Delete,
	Folder,
	Image as ImageIcon,
	MusicNote,
	Settings,
	Refresh,
	ViewModule,
	Sort,
	CreateNewFolder,
	PersonalVideo,
	Palette,
	CheckBoxOutlineBlank,
	CheckBox,
	Fullscreen,
	Close,
} from "@mui/icons-material";
import { useWindowManager } from "@/app/context/WindowContext";

interface ContextMenuPosition {
	x: number;
	y: number;
}

interface DesktopIcon {
	id: string;
	name: string;
	icon: React.ReactNode;
	position: { x: number; y: number };
}

export default function WindowsMainScreen() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const contextMenuRef = useRef<HTMLDivElement>(null);
	const { dispatch } = useWindowManager();

	// Selection state
	const [selecting, setSelecting] = useState(false);
	const [rect, setRect] = useState<{
		left: number;
		top: number;
		width: number;
		height: number;
	} | null>(null);

	// Context menu state
	const [contextMenu, setContextMenu] = useState<ContextMenuPosition | null>(
		null
	);

	// Full screen modal state
	const [showFullScreenModal, setShowFullScreenModal] = useState(false);

	// Desktop icons state
	const [desktopIcons, setDesktopIcons] = useState<DesktopIcon[]>([
		{
			id: "recycle-bin",
			name: "Recycle Bin",
			icon: <Delete sx={{ fontSize: 32, color: "#0078D4" }} />,
			position: { x: 20, y: 20 },
		},
		{
			id: "documents",
			name: "Documents",
			icon: <Folder sx={{ fontSize: 32, color: "#0078D4" }} />,
			position: { x: 20, y: 100 },
		},
		{
			id: "pictures",
			name: "Pictures",
			icon: <ImageIcon sx={{ fontSize: 32, color: "#0078D4" }} />,
			position: { x: 20, y: 180 },
		},
		{
			id: "music",
			name: "Music",
			icon: <MusicNote sx={{ fontSize: 32, color: "#0078D4" }} />,
			position: { x: 20, y: 260 },
		},
	]);

	const [showIcons, setShowIcons] = useState(true);
	const [selectedIcons, setSelectedIcons] = useState<Set<string>>(new Set());
	const startRef = useRef<{ x: number; y: number } | null>(null);

	// Check if user has seen the modal before
	useEffect(() => {
		const hasSeenModal = localStorage.getItem(
			"windows11-fullscreen-modal-seen"
		);
		if (!hasSeenModal) {
			// Show modal after a small delay for better UX
			const timer = setTimeout(() => {
				setShowFullScreenModal(true);
			}, 1000);
			return () => clearTimeout(timer);
		}
	}, []);

	// Helper: interactive elements we should ignore starting selection on
	function isInteractive(node: EventTarget | null) {
		if (!(node instanceof Element)) return false;
		const interactiveTags = [
			"BUTTON",
			"A",
			"INPUT",
			"TEXTAREA",
			"SELECT",
			"LABEL",
			"svg",
			"path",
		];
		if (interactiveTags.includes(node.tagName)) return true;
		if (node.getAttribute?.("role") === "button") return true;
		if (node.getAttribute?.("contenteditable") === "true") return true;
		if (node.closest?.("[data-no-desktop-select]")) return true;
		return false;
	}

	// Keyboard and click outside handlers
	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") {
				cancelSelection();
				closeContextMenu();
				setSelectedIcons(new Set());
			}
		}

		function handleClickOutside(e: MouseEvent) {
			if (
				contextMenuRef.current &&
				!contextMenuRef.current.contains(e.target as Node)
			) {
				closeContextMenu();
			}
		}

		window.addEventListener("keydown", onKey);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("keydown", onKey);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleFullScreen = async () => {
		try {
			if (document.documentElement.requestFullscreen) {
				await document.documentElement.requestFullscreen();
			} else if (
				(document.documentElement as any).webkitRequestFullscreen
			) {
				await (
					document.documentElement as any
				).webkitRequestFullscreen();
			} else if ((document.documentElement as any).msRequestFullscreen) {
				await (document.documentElement as any).msRequestFullscreen();
			}
		} catch (error) {
			console.log("Fullscreen error:", error);
		}

		// Mark modal as seen
		localStorage.setItem("windows11-fullscreen-modal-seen", "true");
		setShowFullScreenModal(false);
	};

	const handleSkipFullScreen = () => {
		// Mark modal as seen
		localStorage.setItem("windows11-fullscreen-modal-seen", "true");
		setShowFullScreenModal(false);
	};

	function cancelSelection() {
		setSelecting(false);
		setRect(null);
		startRef.current = null;
	}

	function closeContextMenu() {
		setContextMenu(null);
	}

	function finishSelection() {
		if (rect && containerRef.current) {
			// Select icons within the selection rectangle
			const selected = new Set<string>();
			desktopIcons.forEach((icon) => {
				const iconRect = {
					left: icon.position.x,
					top: icon.position.y,
					right: icon.position.x + 80,
					bottom: icon.position.y + 80,
				};

				const selectionRect = {
					left: rect.left,
					top: rect.top,
					right: rect.left + rect.width,
					bottom: rect.top + rect.height,
				};

				// Check if icon is within selection
				if (
					iconRect.left < selectionRect.right &&
					iconRect.right > selectionRect.left &&
					iconRect.top < selectionRect.bottom &&
					iconRect.bottom > selectionRect.top
				) {
					selected.add(icon.id);
				}
			});
			setSelectedIcons(selected);
		}

		setSelecting(false);
		setRect(null);
		startRef.current = null;
	}

	// Left click handlers for selection
	function onPointerDown(e: React.PointerEvent) {
		// Only primary button (left click)
		if (e.button && e.button !== 0) return;

		// If clicked on an interactive element, don't start selection
		if (isInteractive(e.target)) return;

		const container = containerRef.current;
		if (!container) return;

		// Close context menu if open
		closeContextMenu();

		// Clear selection if not holding Ctrl
		if (!e.ctrlKey) {
			setSelectedIcons(new Set());
		}

		e.preventDefault();
		(e.target as Element).setPointerCapture?.(e.pointerId);

		const rectBounds = container.getBoundingClientRect();
		const x = e.clientX - rectBounds.left;
		const y = e.clientY - rectBounds.top;
		startRef.current = { x, y };
		setSelecting(true);
		setRect({ left: x, top: y, width: 0, height: 0 });
	}

	function onPointerMove(e: React.PointerEvent) {
		if (!selecting || !startRef.current) return;
		const container = containerRef.current;
		if (!container) return;

		const rectBounds = container.getBoundingClientRect();
		const x = e.clientX - rectBounds.left;
		const y = e.clientY - rectBounds.top;

		const sx = startRef.current.x;
		const sy = startRef.current.y;

		const left = Math.min(sx, x);
		const top = Math.min(sy, y);
		const width = Math.abs(x - sx);
		const height = Math.abs(y - sy);

		setRect({
			left: Math.max(0, left),
			top: Math.max(0, top),
			width: Math.max(0, width),
			height: Math.max(0, height),
		});
	}

	function onPointerUp(e: React.PointerEvent) {
		if (!selecting) return;
		(e.target as Element).releasePointerCapture?.(e.pointerId);
		finishSelection();
	}

	// Right click handler for context menu
	function onContextMenu(e: React.MouseEvent) {
		e.preventDefault();

		if (isInteractive(e.target)) return;

		const container = containerRef.current;
		if (!container) return;

		const rectBounds = container.getBoundingClientRect();
		const x = e.clientX;
		const y = e.clientY;

		// Calculate menu dimensions
		const menuWidth = 240;
		const menuHeight = 380;

		// Ensure menu stays within viewport with proper margins
		const adjustedX = Math.min(x, window.innerWidth - menuWidth - 16);
		const adjustedY = Math.min(y, window.innerHeight - menuHeight - 16);

		setContextMenu({
			x: Math.max(16, adjustedX),
			y: Math.max(16, adjustedY),
		});
	}

	// Context menu actions
	const handleRefresh = () => {
		console.log("Refresh desktop");
		closeContextMenu();
	};

	const handleViewOptions = () => {
		console.log("View options");
		closeContextMenu();
	};

	const handleSortBy = () => {
		console.log("Sort by");
		closeContextMenu();
	};

	const handleDisplaySettings = () => {
		console.log("Display settings");
		closeContextMenu();
	};

	const handlePersonalize = () => {
		console.log("Personalize");
		closeContextMenu();
	};

	const handleToggleDesktopIcons = () => {
		setShowIcons(!showIcons);
		closeContextMenu();
	};

	const handleIconClick = (e: React.MouseEvent, iconId: string) => {
		e.stopPropagation();

		if (e.ctrlKey) {
			// Toggle selection with Ctrl
			const newSelected = new Set(selectedIcons);
			if (newSelected.has(iconId)) {
				newSelected.delete(iconId);
			} else {
				newSelected.add(iconId);
			}
			setSelectedIcons(newSelected);
		} else {
			// Single selection
			setSelectedIcons(new Set([iconId]));
		}
	};

	const handleIconDoubleClick = (iconId: string) => {
		const app = desktopIcons.find((icon) => icon.id === iconId);
		if (app) {
			dispatch({
				type: "OPEN_WINDOW",
				payload: {
					appId: iconId,
					title: app.name,
				},
			});
		}
	};

	return (
		<div
			ref={containerRef}
			className="w-screen h-screen relative select-none overflow-hidden bg-gray-900"
			onPointerDown={onPointerDown}
			onPointerMove={onPointerMove}
			onPointerUp={onPointerUp}
			onContextMenu={onContextMenu}
			onDragStart={(e) => e.preventDefault()}
		>
			{/* Wallpaper */}
			<Image
				src="/images/windows/windows11-wallpaper.jpg"
				alt="Windows Wallpaper"
				fill
				priority
				style={{ objectFit: "cover", objectPosition: "top" }}
				className="pointer-events-none"
			/>

			{/* Desktop Icons */}
			{showIcons && (
				<div className="absolute inset-0">
					{desktopIcons.map((icon) => (
						<motion.div
							key={icon.id}
							className={`absolute flex flex-col items-center gap-1 p-2 rounded-lg cursor-default ${
								selectedIcons.has(icon.id)
									? "bg-blue-500/20 border border-blue-400/50"
									: "hover:bg-white/10"
							} transition-all duration-150`}
							style={{
								left: icon.position.x,
								top: icon.position.y,
								width: "80px",
							}}
							onClick={(e) => handleIconClick(e, icon.id)}
							onDoubleClick={() => handleIconDoubleClick(icon.id)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="relative">{icon.icon}</div>
							<span className="text-white text-xs text-center font-medium drop-shadow-lg px-1 py-0.5">
								{icon.name}
							</span>
						</motion.div>
					))}
				</div>
			)}

			{/* Selection rectangle overlay */}
			<div className="pointer-events-none absolute inset-0">
				{rect && selecting && (
					<div
						style={{
							left: rect.left,
							top: rect.top,
							width: rect.width,
							height: rect.height,
						}}
						className="absolute"
					>
						<div
							style={{
								width: "100%",
								height: "100%",
								background: "rgba(0, 120, 212, 0.15)",
								borderRadius: "3px",
								border: "1.5px solid rgba(0, 120, 212, 0.6)",
								boxShadow: "0 2px 8px rgba(0, 120, 212, 0.2)",
							}}
						/>
					</div>
				)}
			</div>

			{/* Context Menu */}
			<AnimatePresence>
				{contextMenu && (
					<>
						<div
							className="fixed inset-0 z-40"
							onClick={closeContextMenu}
						/>

						<motion.div
							ref={contextMenuRef}
							initial={{ opacity: 0, scale: 0.95, y: -5 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: -5 }}
							transition={{
								duration: 0.15,
								ease: [0.25, 0.1, 0.25, 1],
							}}
							className="fixed bg-[#f8f8f8]/95 backdrop-blur-xl rounded-[8px] shadow-2xl border border-white/60 overflow-hidden z-50 py-1 min-w-[240px]"
							style={{
								left: contextMenu.x,
								top: contextMenu.y,
							}}
						>
							{/* View */}
							<MenuItem
								icon={<ViewModule sx={{ fontSize: 18 }} />}
								label="View"
							/>

							{/* Sort by */}
							<MenuItem
								icon={<Sort sx={{ fontSize: 18 }} />}
								label="Sort by"
							/>

							{/* Refresh */}
							<MenuItem
								icon={<Refresh sx={{ fontSize: 18 }} />}
								label="Refresh"
								onClick={handleRefresh}
							/>

							<MenuDivider />

							{/* Paste (disabled) */}
							<MenuItem label="Paste" disabled />

							{/* Paste shortcut (disabled) */}
							<MenuItem label="Paste shortcut" disabled />

							<MenuDivider />

							{/* New */}
							<MenuItem
								icon={<CreateNewFolder sx={{ fontSize: 18 }} />}
								label="New"
							/>

							{/* Display settings */}
							<MenuItem
								icon={<PersonalVideo sx={{ fontSize: 18 }} />}
								label="Display settings"
								onClick={handleDisplaySettings}
							/>

							{/* Personalize */}
							<MenuItem
								icon={<Palette sx={{ fontSize: 18 }} />}
								label="Personalize"
								onClick={handlePersonalize}
							/>

							<MenuDivider />

							{/* Show desktop icons */}
							<MenuItem
								icon={
									showIcons ? (
										<CheckBox sx={{ fontSize: 18 }} />
									) : (
										<CheckBoxOutlineBlank
											sx={{ fontSize: 18 }}
										/>
									)
								}
								label="Show desktop icons"
								onClick={handleToggleDesktopIcons}
							/>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{/* Full Screen Modal */}
			<AnimatePresence>
				{showFullScreenModal && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
						>
							{/* Modal */}
							<motion.div
								initial={{ opacity: 0, scale: 0.9, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.9, y: 20 }}
								transition={{
									type: "spring",
									damping: 25,
									stiffness: 300,
								}}
								className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
							>
								{/* Header */}
								<div className="bg-blue-400 p-5 text-white">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
												<Fullscreen
													sx={{ fontSize: 28 }}
												/>
											</div>
											<div>
												<h2 className="text-2xl font-bold">
													Enhanced Experience
												</h2>
												<p className="text-blue-100 opacity-90">
													Get the full Windows 11
													experience
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Content */}
								<div className="p-6">
									<div className="space-y-4">
										<div className="flex items-start gap-3">
											<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
												<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
											</div>
											<div>
												<h3 className="font-semibold text-gray-900">
													Full Immersion
												</h3>
												<p className="text-gray-600 text-sm">
													Experience the desktop
													environment without browser
													UI elements
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
												<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
											</div>
											<div>
												<h3 className="font-semibold text-gray-900">
													Better Performance
												</h3>
												<p className="text-gray-600 text-sm">
													Full screen mode provides
													smoother animations and
													interactions
												</p>
											</div>
										</div>

										<div className="flex items-start gap-3">
											<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
												<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
											</div>
											<div>
												<h3 className="font-semibold text-gray-900">
													Authentic Feel
												</h3>
												<p className="text-gray-600 text-sm">
													Get the true Windows 11
													desktop experience
												</p>
											</div>
										</div>
									</div>

									{/* Note */}
									<div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
										<p className="text-sm text-gray-600 text-center">
											You can always exit full screen by
											pressing{" "}
											<kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">
												F11
											</kbd>{" "}
											or{" "}
											<kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">
												Esc
											</kbd>
										</p>
									</div>
								</div>

								{/* Actions */}
								<div className="px-6 pb-6 flex gap-3">
									<button
										onClick={handleSkipFullScreen}
										className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium"
									>
										Skip for now
									</button>
									<button
										onClick={handleFullScreen}
										className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
									>
										<Fullscreen sx={{ fontSize: 20 }} />
										Switch to Full Screen
									</button>
								</div>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{/* Selection info */}
			{selectedIcons.size > 0 && (
				<div className="absolute bottom-24 right-6 bg-black/60 text-white px-3 py-2 rounded-lg text-sm backdrop-blur-sm">
					{selectedIcons.size} item{selectedIcons.size > 1 ? "s" : ""}{" "}
					selected
				</div>
			)}
		</div>
	);
}

// Menu Item Component
function MenuItem({
	icon,
	label,
	onClick,
	disabled = false,
}: {
	icon?: React.ReactNode;
	label: string;
	onClick?: () => void;
	disabled?: boolean;
}) {
	return (
		<div
			className={`flex items-center gap-3 px-4 py-2 text-[14px] transition-colors ${
				disabled
					? "text-gray-400 cursor-not-allowed"
					: "text-gray-800 hover:bg-blue-500 hover:text-white cursor-pointer"
			}`}
			onClick={disabled ? undefined : onClick}
		>
			{icon && (
				<div className="w-5 h-5 flex items-center justify-center">
					{icon}
				</div>
			)}
			<span className="flex-1">{label}</span>
		</div>
	);
}

// Menu Divider Component
function MenuDivider() {
	return <div className="h-px bg-gray-300/60 my-1" />;
}
