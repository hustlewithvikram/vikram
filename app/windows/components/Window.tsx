"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useWindowManager } from "../../context/WindowContext";
import { WindowPosition } from "../../context/WindowContext";
import { Close, Remove, CropSquare, FilterNone } from "@mui/icons-material";

interface WindowProps {
	id: string;
	appId: string;
	title: string;
	children: React.ReactNode;
	position: WindowPosition;
	isMaximized: boolean;
	isMinimized: boolean;
	isFocused: boolean;
	zIndex: number;
	minWidth?: number;
	minHeight?: number;
}

export function Window({
	id,
	appId,
	title,
	children,
	position,
	isMaximized,
	isMinimized,
	isFocused,
	zIndex,
	minWidth = 400,
	minHeight = 300,
}: WindowProps) {
	const { dispatch } = useWindowManager();
	const [isDragging, setIsDragging] = useState(false);
	const [isResizing, setIsResizing] = useState(false);
	const [resizeDirection, setResizeDirection] = useState<string>("");
	const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
	const [resizeStart, setResizeStart] = useState({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
	});

	const windowRef = useRef<HTMLDivElement>(null);

	const handleFocus = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (!isFocused) {
			dispatch({ type: "BRING_TO_FRONT", payload: { id } });
		}
	};

	const handleDragStart = (e: React.MouseEvent) => {
		if (isMaximized) return;

		e.stopPropagation();
		setIsDragging(true);
		setDragStart({
			x: e.clientX - position.x,
			y: e.clientY - position.y,
		});

		// Focus the window when dragging starts
		if (!isFocused) {
			dispatch({ type: "BRING_TO_FRONT", payload: { id } });
		}
	};

	const handleDrag = (e: MouseEvent) => {
		if (!isDragging || isMaximized) return;

		const newX = e.clientX - dragStart.x;
		const newY = e.clientY - dragStart.y;

		// Ensure window stays within viewport bounds
		const boundedX = Math.max(
			0,
			Math.min(newX, window.innerWidth - position.width)
		);
		const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 100));

		dispatch({
			type: "UPDATE_WINDOW_POSITION",
			payload: {
				id,
				position: {
					x: boundedX,
					y: boundedY,
				},
			},
		});
	};

	const handleDragEnd = () => {
		setIsDragging(false);
	};

	const handleResizeStart = (e: React.MouseEvent, direction: string) => {
		e.stopPropagation();
		e.preventDefault();

		setIsResizing(true);
		setResizeDirection(direction);
		setResizeStart({
			x: e.clientX,
			y: e.clientY,
			width: position.width,
			height: position.height,
		});

		// Focus the window when resizing starts
		if (!isFocused) {
			dispatch({ type: "BRING_TO_FRONT", payload: { id } });
		}
	};

	const handleResize = (e: MouseEvent) => {
		if (!isResizing || isMaximized) return;

		const deltaX = e.clientX - resizeStart.x;
		const deltaY = e.clientY - resizeStart.y;

		let newWidth = position.width;
		let newHeight = position.height;
		let newX = position.x;
		let newY = position.y;

		switch (resizeDirection) {
			case "right":
				newWidth = Math.max(minWidth, resizeStart.width + deltaX);
				break;
			case "bottom":
				newHeight = Math.max(minHeight, resizeStart.height + deltaY);
				break;
			case "bottom-right":
				newWidth = Math.max(minWidth, resizeStart.width + deltaX);
				newHeight = Math.max(minHeight, resizeStart.height + deltaY);
				break;
		}

		// Ensure window doesn't go outside viewport
		newWidth = Math.min(newWidth, window.innerWidth - newX);
		newHeight = Math.min(newHeight, window.innerHeight - newY - 48); // Account for taskbar

		dispatch({
			type: "UPDATE_WINDOW_POSITION",
			payload: {
				id,
				position: {
					width: newWidth,
					height: newHeight,
					x: newX,
					y: newY,
				},
			},
		});
	};

	const handleResizeEnd = () => {
		setIsResizing(false);
		setResizeDirection("");
	};

	// Dragging effect
	useEffect(() => {
		if (isDragging) {
			document.addEventListener("mousemove", handleDrag);
			document.addEventListener("mouseup", handleDragEnd);

			return () => {
				document.removeEventListener("mousemove", handleDrag);
				document.removeEventListener("mouseup", handleDragEnd);
			};
		}
	}, [isDragging, dragStart]);

	// Resizing effect
	useEffect(() => {
		if (isResizing) {
			document.addEventListener("mousemove", handleResize);
			document.addEventListener("mouseup", handleResizeEnd);

			return () => {
				document.removeEventListener("mousemove", handleResize);
				document.removeEventListener("mouseup", handleResizeEnd);
			};
		}
	}, [isResizing, resizeStart, resizeDirection]);

	const handleMinimize = (e: React.MouseEvent) => {
		e.stopPropagation();
		dispatch({ type: "MINIMIZE_WINDOW", payload: { id } });
	};

	const handleMaximize = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (isMaximized) {
			dispatch({ type: "RESTORE_WINDOW", payload: { id } });
		} else {
			dispatch({ type: "MAXIMIZE_WINDOW", payload: { id } });
		}
	};

	const handleClose = (e: React.MouseEvent) => {
		e.stopPropagation();
		dispatch({ type: "CLOSE_WINDOW", payload: { id } });
	};

	if (isMinimized) return null;

	return (
		<motion.div
			ref={windowRef}
			className={`fixed bg-white ${
				isMaximized ? "rounded-none" : "rounded-[10px]"
			} shadow-2xl overflow-hidden select-none ${
				isDragging ? "cursor-grabbing" : "cursor-default"
			}`}
			style={{
				x: isMaximized ? 0 : position.x,
				y: isMaximized ? 0 : position.y,
				width: isMaximized ? "100vw" : position.width,
				height: isMaximized ? "calc(100vh - 48px)" : position.height,
				zIndex,
			}}
			onClick={handleFocus}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ type: "spring", damping: 25, stiffness: 200 }}
		>
			{/* Title Bar */}
			<motion.div
				className={`h-12 flex items-center justify-between select-none ${
					isFocused
						? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
						: "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
				} border-b border-gray-300 cursor-move`}
				onMouseDown={handleDragStart}
			>
				<div className="flex items-center gap-2 px-4">
					<span className="text-sm font-medium truncate max-w-[200px]">
						{title}
					</span>
				</div>

				<div className="flex items-center">
					{/* Minimize Button */}
					<button
						onClick={handleMinimize}
						className={`size-12 flex items-center justify-center hover:bg-opacity-20 transition-colors ${
							isFocused
								? "hover:bg-white/20"
								: "hover:bg-gray-300"
						}`}
					>
						<Remove sx={{ fontSize: 18 }} />
					</button>

					{/* Maximize/Restore Button */}
					<button
						onClick={handleMaximize}
						className={`size-12 flex items-center justify-center hover:bg-opacity-20 transition-colors ${
							isFocused
								? "hover:bg-white/20"
								: "hover:bg-gray-300"
						}`}
					>
						{isMaximized ? (
							<FilterNone sx={{ fontSize: 16 }} />
						) : (
							<CropSquare sx={{ fontSize: 16 }} />
						)}
					</button>

					{/* Close Button */}
					<button
						onClick={handleClose}
						className={`size-12 flex items-center justify-center hover:bg-red-500 transition-colors`}
					>
						<Close sx={{ fontSize: 18 }} />
					</button>
				</div>
			</motion.div>

			{/* Window Content */}
			<div
				className="h-[calc(100%-32px)] overflow-auto bg-white"
				onClick={handleFocus}
			>
				{children}
			</div>

			{/* Resize Handles */}
			{!isMaximized && (
				<>
					{/* Right resize handle */}
					<div
						className="absolute right-0 top-0 w-2 h-full cursor-ew-resize hover:bg-blue-400/20"
						onMouseDown={(e) => handleResizeStart(e, "right")}
					/>
					{/* Bottom resize handle */}
					<div
						className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize hover:bg-blue-400/20"
						onMouseDown={(e) => handleResizeStart(e, "bottom")}
					/>
					{/* Bottom-right resize handle */}
					<div
						className="absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize bg-blue-500 opacity-0 hover:opacity-100 transition-opacity"
						onMouseDown={(e) =>
							handleResizeStart(e, "bottom-right")
						}
					/>
				</>
			)}
		</motion.div>
	);
}
