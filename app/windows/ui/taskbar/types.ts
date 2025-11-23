export type BadgeType =
	| { type: "dot" }
	| { type: "count"; value: number }
	| null;

export type ContextMenuOption = {
	id: string;
	label: string;
	icon?: React.ReactNode;
	action: () => void;
	disabled?: boolean;
	separator?: boolean;
};

export type AppState = "minimized" | "maximized" | "normal";

export type AppMeta = {
	// Core identification
	id: string;
	name: string;

	// Visual representation
	icon?: React.ReactNode;
	color?: string; // Optional custom color
	gradient?: string; // Optional gradient classes

	// Badge/notification system
	badge?: BadgeType;

	// Context menu options
	contextOptions?: ContextMenuOption[];

	// Window state management
	state?: AppState;
	isPinned?: boolean;
	isRunning?: boolean;

	// Additional metadata
	description?: string;
	category?: string; // For organization in start menu
	lastUsed?: Date; // For recommended section
	installDate?: Date;

	// Custom properties
	metadata?: Record<string, any>;
};

// Example usage with your apps:
export const defaultPinnedApps: AppMeta[] = [
	{
		id: "vikram",
		name: "Vikram Vishwakarma",
		icon: "🌐",
		color: "from-blue-500 to-cyan-400",
		description: "Personal Portfolio",
		category: "Productivity",
		isPinned: true,
		badge: null,
	},
	{
		id: "timeline",
		name: "My Timeline",
		icon: "📁",
		color: "from-purple-500 to-pink-400",
		description: "Career timeline and experience",
		category: "Productivity",
		isPinned: true,
		badge: { type: "count", value: 3 },
	},
	{
		id: "skills",
		name: "My Skills",
		icon: "🔴",
		color: "from-red-500 to-orange-400",
		description: "Technical skills and proficiencies",
		category: "Development",
		isPinned: true,
		badge: null,
	},
	{
		id: "projects",
		name: "My Projects",
		icon: "💻",
		color: "from-green-500 to-emerald-400",
		description: "Portfolio projects and work",
		category: "Development",
		isPinned: true,
		badge: { type: "dot" },
	},
	{
		id: "reach-out",
		name: "Reach Out",
		icon: "🎵",
		color: "from-yellow-500 to-amber-400",
		description: "Contact information",
		category: "Communication",
		isPinned: true,
		badge: null,
	},
];

export const defaultRunningApps: AppMeta[] = [
	{
		id: "vikram",
		name: "Vikram Vishwakarma",
		icon: "🌐",
		color: "from-blue-500 to-cyan-400",
		state: "normal",
		isRunning: true,
		isPinned: true,
		lastUsed: new Date(),
	},
	{
		id: "timeline",
		name: "My Timeline",
		icon: "📁",
		color: "from-purple-500 to-pink-400",
		state: "minimized",
		isRunning: true,
		isPinned: true,
		lastUsed: new Date(Date.now() - 3600000), // 1 hour ago
	},
	{
		id: "projects",
		name: "My Projects",
		icon: "💻",
		color: "from-green-500 to-emerald-400",
		state: "maximized",
		isRunning: true,
		isPinned: true,
		lastUsed: new Date(Date.now() - 86400000), // 1 day ago
	},
];

// Helper function to get app color
export function getAppColor(app: AppMeta): string {
	if (app.color) return app.color;

	const defaultColors: Record<string, string> = {
		vikram: "from-blue-500 to-cyan-400",
		timeline: "from-purple-500 to-pink-400",
		skills: "from-red-500 to-orange-400",
		projects: "from-green-500 to-emerald-400",
		"reach-out": "from-yellow-500 to-amber-400",
		edge: "from-blue-500 to-cyan-400",
		explorer: "from-yellow-500 to-amber-400",
		chrome: "from-red-500 to-yellow-400",
		vscode: "from-blue-600 to-blue-400",
		spotify: "from-green-500 to-emerald-500",
		teams: "from-purple-500 to-blue-500",
		default: "from-gray-400 to-gray-500",
	};

	return defaultColors[app.id] || defaultColors.default;
}

// Type guard for badge types
export function isCountBadge(
	badge: BadgeType
): badge is { type: "count"; value: number } {
	return badge?.type === "count";
}

export function isDotBadge(badge: BadgeType): badge is { type: "dot" } {
	return badge?.type === "dot";
}

export interface WindowPosition {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface WindowState {
	id: string;
	appId: string;
	title: string;
	position: WindowPosition;
	isMaximized: boolean;
	isMinimized: boolean;
	isFocused: boolean;
	zIndex: number;
	minWidth?: number;
	minHeight?: number;
}

export interface WindowManagerState {
	windows: WindowState[];
	nextZIndex: number;
}
