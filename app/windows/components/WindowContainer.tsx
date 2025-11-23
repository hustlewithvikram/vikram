"use client";

import React from "react";
import { AnimatePresence } from "framer-motion";
import { useWindowManager } from "../../context/WindowContext";
import { Window } from "./Window";

// Import your app components
import { VikramApp } from "./apps/VikramApp";
import { TimelineApp } from "./apps/TimelineApp";
import { SkillsApp } from "./apps/SkillsApp";
import { ProjectsApp } from "./apps/ProjectsApp";
import { ReachOutApp } from "./apps/ReachOutApp";
import { RecycleBinApp } from "./apps/RecycleBinApp";
import { DocumentsApp } from "./apps/DocumentsApp";
import { PicturesApp } from "./apps/PicturesApp";
import { MusicApp } from "./apps/MusicApp";

const appComponents: Record<
	string,
	React.ComponentType<{ windowId: string }>
> = {
	vikram: VikramApp,
	timeline: TimelineApp,
	skills: SkillsApp,
	projects: ProjectsApp,
	"reach-out": ReachOutApp,
	// Add desktop apps
	"recycle-bin": RecycleBinApp,
	documents: DocumentsApp,
	pictures: PicturesApp,
	music: MusicApp,
};

export function WindowContainer() {
	const { state } = useWindowManager();

	return (
		<AnimatePresence>
			{state.windows.map((window) => {
				const AppComponent = appComponents[window.appId];

				return (
					<Window
						key={window.id}
						id={window.id}
						appId={window.appId}
						title={window.title}
						position={window.position}
						isMaximized={window.isMaximized}
						isMinimized={window.isMinimized}
						isFocused={window.isFocused}
						zIndex={window.zIndex}
					>
						{AppComponent ? (
							<AppComponent windowId={window.id} />
						) : (
							<div className="p-4 text-gray-500">
								No content available for {window.appId}
							</div>
						)}
					</Window>
				);
			})}
		</AnimatePresence>
	);
}
