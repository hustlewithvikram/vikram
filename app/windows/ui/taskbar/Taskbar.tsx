"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { TaskbarStartButton } from "./TaskbarStartButton";
import { TaskbarSearch } from "./TaskbarSearch";
import { TaskbarAppIcon } from "./TaskbarAppIcon";
import { SystemTray } from "./SystemTray";
import { StartMenu } from "./StartMenu";
import { TaskbarSearchMenu } from "./TaskbarSearchMenu";
import { TaskbarContextMenu } from "./TaskbarContextMenu";
import { TaskbarEmptySpaceContextMenu } from "./TaskbarEmptySpaceContextMenu";
import { AppMeta } from "./types";
import { useWindowManager } from "../../../context/WindowContext";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import DownhillSkiingOutlinedIcon from "@mui/icons-material/DownhillSkiingOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import Image from "next/image";

interface TaskbarProps {
	pinned?: AppMeta[];
	onToggleTaskbarSettings?: () => void;
	onToggleTaskManager?: () => void;
}

export default function Taskbar({
	pinned = [
		{
			id: "vikram",
			name: "Vikram Vishwakarma",
			icon: (
				<Image
					src="/images/vikram_nonagon.png"
					height={28}
					width={28}
					alt="Vikram Vishwakarma"
				/>
			),
		},
		{
			id: "timeline",
			name: "My Timeline",
			icon: <TimelineOutlinedIcon style={{ width: 18, height: 18 }} />,
		},
		{
			id: "skills",
			name: "My Skills",
			icon: (
				<DownhillSkiingOutlinedIcon style={{ width: 18, height: 18 }} />
			),
		},
		{
			id: "projects",
			name: "My Projects",
			icon: <FolderCopyOutlinedIcon style={{ width: 18, height: 18 }} />,
		},
		{
			id: "reach-out",
			name: "Reach Out",
			icon: (
				<PhoneEnabledOutlinedIcon style={{ width: 18, height: 18 }} />
			),
		},
	],
	onToggleTaskbarSettings,
	onToggleTaskManager,
}: TaskbarProps) {
	const [startOpen, setStartOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [contextMenu, setContextMenu] = useState<{
		type: "app" | "empty";
		app?: AppMeta;
		x: number;
		y: number;
	} | null>(null);

	const { state, dispatch } = useWindowManager();

	const startMenuRef = useRef<HTMLDivElement>(null);
	const startButtonRef = useRef<HTMLDivElement>(null);
	const searchMenuRef = useRef<HTMLDivElement>(null);
	const searchButtonRef = useRef<HTMLDivElement>(null);
	const taskbarRef = useRef<HTMLDivElement>(null);
	const contextMenuRef = useRef<HTMLDivElement>(null);

	// Get running apps from window state
	const runningApps = state.windows
		.filter((window: any) => !window.isMinimized)
		.map((window: any) => ({
			id: window.appId,
			name: window.title,
			icon: pinned.find((app) => app.id === window.appId)?.icon,
		}))
		.filter((app: any): app is AppMeta => app !== undefined);

	// Get active app
	const activeApp =
		state.windows.find((window: any) => window.isFocused)?.appId || null;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				startMenuRef.current &&
				!startMenuRef.current.contains(event.target as Node) &&
				startButtonRef.current &&
				!startButtonRef.current.contains(event.target as Node)
			) {
				setStartOpen(false);
			}

			if (
				searchMenuRef.current &&
				!searchMenuRef.current.contains(event.target as Node) &&
				searchButtonRef.current &&
				!searchButtonRef.current.contains(event.target as Node)
			) {
				setSearchOpen(false);
			}

			if (
				contextMenuRef.current &&
				!contextMenuRef.current.contains(event.target as Node)
			) {
				setContextMenu(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [startOpen, searchOpen]);

	const handleAppClick = (id: string) => {
		const existingWindow = state.windows.find(
			(window: any) => window.appId === id && !window.isMinimized
		);

		if (existingWindow) {
			// Focus existing window
			dispatch({
				type: "FOCUS_WINDOW",
				payload: { id: existingWindow.id },
			});
		} else {
			// Open new window
			const app = pinned.find((p) => p.id === id);
			if (app) {
				dispatch({
					type: "OPEN_WINDOW",
					payload: {
						appId: id,
						title: app.name,
					},
				});
			}
		}
	};

	const handleStartButtonClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setStartOpen(!startOpen);
		setSearchOpen(false);
	};

	const handleSearchClick = () => {
		setSearchOpen(!searchOpen);
		setStartOpen(false);
	};

	const handleCloseApp = (id: string) => {
		const windowToClose = state.windows.find(
			(window: any) => window.appId === id
		);
		if (windowToClose) {
			dispatch({
				type: "CLOSE_WINDOW",
				payload: { id: windowToClose.id },
			});
		}
	};

	const handleAppContextMenu = (e: React.MouseEvent, app: AppMeta) => {
		e.preventDefault();
		const menuHeight = 200;
		const viewportHeight = window.innerHeight;
		const y = e.clientY;
		const adjustedY = y + menuHeight > viewportHeight ? y - menuHeight : y;

		setContextMenu({
			type: "app",
			app,
			x: e.clientX,
			y: adjustedY,
		});
	};

	const handleEmptySpaceContextMenu = (e: React.MouseEvent) => {
		e.preventDefault();
		const menuHeight = 180;
		const viewportHeight = window.innerHeight;
		const y = e.clientY;
		const adjustedY = y + menuHeight > viewportHeight ? y - menuHeight : y;

		setContextMenu({
			type: "empty",
			x: e.clientX,
			y: adjustedY,
		});
	};

	const handlePinApp = (id: string) => {
		// Implement pin logic if needed
		setContextMenu(null);
	};

	const handleUnpinApp = (id: string) => {
		// Implement unpin logic if needed
		setContextMenu(null);
	};

	const handleCloseWindow = (id: string) => {
		handleCloseApp(id);
		setContextMenu(null);
	};

	const handleOpenNewWindow = (id: string) => {
		const app = pinned.find((p) => p.id === id);
		if (app) {
			dispatch({
				type: "OPEN_WINDOW",
				payload: {
					appId: id,
					title: app.name,
				},
			});
		}
		setContextMenu(null);
	};

	const handleTaskbarSettings = () => {
		onToggleTaskbarSettings?.();
		setContextMenu(null);
	};

	const handleTaskManager = () => {
		onToggleTaskManager?.();
		setContextMenu(null);
	};

	const handleShowDesktop = () => {
		// Minimize all windows
		state.windows.forEach((window: any) => {
			dispatch({ type: "MINIMIZE_WINDOW", payload: { id: window.id } });
		});
		setContextMenu(null);
	};

	return (
		<>
			{/* Taskbar */}
			<div
				ref={taskbarRef}
				className="fixed bottom-0 left-0 right-0 h-12 z-50"
				onContextMenu={handleEmptySpaceContextMenu}
			>
				<div className="absolute inset-0 bg-[#f3f3f3]/[0.85] backdrop-blur-[40px] border-t border-black/[0.08]" />

				<div className="relative h-full flex items-center justify-center px-1">
					{/* Left Section */}
					<div className="flex items-center gap-2 mx-4">
						<div ref={startButtonRef}>
							<TaskbarStartButton
								active={startOpen}
								onClick={handleStartButtonClick}
							/>
						</div>
						<div ref={searchButtonRef}>
							<TaskbarSearch onClick={handleSearchClick} />
						</div>
					</div>

					{/* Center Section - Apps */}
					<div className="flex items-center gap-0">
						{pinned.map((app) => {
							const isRunning = runningApps.find(
								(r: any) => r.id === app.id
							);
							const isActive = activeApp === app.id;

							return (
								<TaskbarAppIcon
									key={app.id}
									app={app}
									isRunning={!!isRunning}
									isActive={isActive}
									onClick={() => handleAppClick(app.id)}
									onContextMenu={(e) =>
										handleAppContextMenu(e, app)
									}
								/>
							);
						})}
					</div>

					{/* Right Section - System Tray */}
					<div className="absolute right-1 flex items-center">
						<SystemTray />
					</div>
				</div>
			</div>

			{/* Start Menu */}
			<AnimatePresence>
				{startOpen && (
					<div className="fixed inset-0 z-40">
						<div
							className="absolute inset-0"
							onClick={() => setStartOpen(false)}
						/>
						<div
							ref={startMenuRef}
							className="flex justify-center items-end h-full pb-14"
						>
							<StartMenu
								isOpen={startOpen}
								onClose={() => setStartOpen(false)}
								pinnedApps={pinned}
								runningApps={runningApps}
								onAppClick={handleAppClick}
							/>
						</div>
					</div>
				)}
			</AnimatePresence>

			{/* Search Menu */}
			<AnimatePresence>
				{searchOpen && (
					<div className="fixed inset-0 z-40">
						<div
							className="absolute inset-0"
							onClick={() => setSearchOpen(false)}
						/>
						<div
							ref={searchMenuRef}
							className="flex justify-center items-end h-full pb-14"
						>
							<TaskbarSearchMenu
								isOpen={searchOpen}
								onClose={() => setSearchOpen(false)}
								pinnedApps={pinned}
								onAppClick={handleAppClick}
							/>
						</div>
					</div>
				)}
			</AnimatePresence>

			{/* Context Menu */}
			<AnimatePresence>
				{contextMenu && (
					<div
						ref={contextMenuRef}
						className="fixed z-50"
						style={{
							left: Math.min(
								contextMenu.x,
								window.innerWidth - 250
							),
							bottom: 52,
						}}
					>
						{contextMenu.type === "app" && contextMenu.app && (
							<TaskbarContextMenu
								app={contextMenu.app}
								isPinned={pinned.some(
									(p) => p.id === contextMenu.app!.id
								)}
								isRunning={runningApps.some(
									(r: any) => r.id === contextMenu.app!.id
								)}
								onClose={() => setContextMenu(null)}
								onPin={handlePinApp}
								onUnpin={handleUnpinApp}
								onCloseWindow={handleCloseWindow}
								onOpenNewWindow={handleOpenNewWindow}
							/>
						)}

						{contextMenu.type === "empty" && (
							<TaskbarEmptySpaceContextMenu
								onClose={() => setContextMenu(null)}
								onTaskbarSettings={handleTaskbarSettings}
								onTaskManager={handleTaskManager}
								onShowDesktop={handleShowDesktop}
							/>
						)}
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
