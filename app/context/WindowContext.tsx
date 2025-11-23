"use client";

import React, {
	createContext,
	useContext,
	useReducer,
	ReactNode,
	useCallback,
	useMemo,
} from "react";

/**
 * Represents the position and dimensions of a window
 * @interface WindowPosition
 */
export interface WindowPosition {
	x: number;
	y: number;
	width: number;
	height: number;
}

/**
 * Represents the state of an individual window
 * @interface WindowState
 */
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

/**
 * Represents the global state of the window manager
 * @interface WindowManagerState
 */
export interface WindowManagerState {
	windows: WindowState[];
	nextZIndex: number;
}

/**
 * Union type of all possible window actions
 * @type {WindowAction}
 */
type WindowAction =
	| {
			type: "OPEN_WINDOW";
			payload: {
				appId: string;
				title: string;
				initialPosition?: Partial<WindowPosition>;
			};
	  }
	| { type: "CLOSE_WINDOW"; payload: { id: string } }
	| { type: "FOCUS_WINDOW"; payload: { id: string } }
	| { type: "MINIMIZE_WINDOW"; payload: { id: string } }
	| { type: "MAXIMIZE_WINDOW"; payload: { id: string } }
	| { type: "RESTORE_WINDOW"; payload: { id: string } }
	| {
			type: "UPDATE_WINDOW_POSITION";
			payload: { id: string; position: Partial<WindowPosition> };
	  }
	| { type: "BRING_TO_FRONT"; payload: { id: string } };

// Default window dimensions
const DEFAULT_WINDOW_WIDTH = 800;
const DEFAULT_WINDOW_HEIGHT = 600;
const MIN_WINDOW_WIDTH = 400;
const MIN_WINDOW_HEIGHT = 300;
const TASKBAR_HEIGHT = 48;

/**
 * Creates a default window position centered on screen
 * @returns {WindowPosition} Default window position
 */
const createDefaultPosition = (): WindowPosition => {
	// Use optional chaining and nullish coalescing for safety
	const screenWidth =
		typeof window !== "undefined" ? window.innerWidth : 1024;
	const screenHeight =
		typeof window !== "undefined" ? window.innerHeight : 768;

	return {
		x: Math.max(0, (screenWidth - DEFAULT_WINDOW_WIDTH) / 2),
		y: Math.max(0, (screenHeight - DEFAULT_WINDOW_HEIGHT) / 2),
		width: DEFAULT_WINDOW_WIDTH,
		height: DEFAULT_WINDOW_HEIGHT,
	};
};

/**
 * Creates a new window state object
 * @param {string} appId - The application identifier
 * @param {string} title - The window title
 * @param {Partial<WindowPosition>} [initialPosition] - Optional initial position
 * @returns {WindowState} New window state
 */
const createWindowState = (
	appId: string,
	title: string,
	initialPosition?: Partial<WindowPosition>
): WindowState => {
	const position = { ...createDefaultPosition(), ...initialPosition };

	return {
		id: `${appId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
		appId,
		title,
		position,
		isMaximized: false,
		isMinimized: false,
		isFocused: true,
		zIndex: 0, // Will be set by reducer
		minWidth: MIN_WINDOW_WIDTH,
		minHeight: MIN_WINDOW_HEIGHT,
	};
};

/**
 * Defocuses all windows in the array
 * @param {WindowState[]} windows - Array of window states
 * @returns {WindowState[]} New array with all windows defocused
 */
const defocusAllWindows = (windows: WindowState[]): WindowState[] =>
	windows.map((window) => ({ ...window, isFocused: false }));

/**
 * Finds the maximum z-index from windows array
 * @param {WindowState[]} windows - Array of window states
 * @returns {number} Maximum z-index value
 */
const getMaxZIndex = (windows: WindowState[]): number =>
	windows.reduce((max, window) => Math.max(max, window.zIndex), 0);

const initialState: WindowManagerState = {
	windows: [],
	nextZIndex: 1000,
};

/**
 * Window manager reducer function
 * Handles all window state updates with immutability
 * @param {WindowManagerState} state - Current state
 * @param {WindowAction} action - Action to perform
 * @returns {WindowManagerState} New state
 */
function windowReducer(
	state: WindowManagerState,
	action: WindowAction
): WindowManagerState {
	switch (action.type) {
		case "OPEN_WINDOW": {
			const { appId, title, initialPosition } = action.payload;
			const newZIndex = state.nextZIndex + 1;

			const newWindow = {
				...createWindowState(appId, title, initialPosition),
				zIndex: newZIndex,
			};

			// Defocus all existing windows
			const updatedWindows = defocusAllWindows(state.windows);

			return {
				windows: [...updatedWindows, newWindow],
				nextZIndex: newZIndex,
			};
		}

		case "CLOSE_WINDOW": {
			const { id } = action.payload;
			return {
				...state,
				windows: state.windows.filter((window) => window.id !== id),
			};
		}

		case "FOCUS_WINDOW": {
			const { id } = action.payload;
			const newZIndex = state.nextZIndex + 1;

			return {
				windows: state.windows.map((window) => ({
					...window,
					isFocused: window.id === id,
					zIndex: window.id === id ? newZIndex : window.zIndex,
				})),
				nextZIndex: newZIndex,
			};
		}

		case "MINIMIZE_WINDOW": {
			const { id } = action.payload;
			return {
				...state,
				windows: state.windows.map((window) =>
					window.id === id
						? {
								...window,
								isMinimized: true,
								isFocused: false,
						  }
						: window
				),
			};
		}

		case "MAXIMIZE_WINDOW": {
			const { id } = action.payload;
			const screenWidth =
				typeof window !== "undefined" ? window.innerWidth : 1024;
			const screenHeight =
				typeof window !== "undefined" ? window.innerHeight : 768;

			return {
				...state,
				windows: state.windows.map((window) =>
					window.id === id
						? {
								...window,
								isMaximized: true,
								position: {
									x: 0,
									y: 0,
									width: screenWidth,
									height: screenHeight - TASKBAR_HEIGHT,
								},
								isFocused: true,
						  }
						: window
				),
			};
		}

		case "RESTORE_WINDOW": {
			const { id } = action.payload;
			const windowToRestore = state.windows.find((w) => w.id === id);

			if (!windowToRestore) return state;

			// If window was maximized, restore to default position
			// Otherwise, keep current position
			const restoredPosition = windowToRestore.isMaximized
				? createDefaultPosition()
				: windowToRestore.position;

			return {
				...state,
				windows: state.windows.map((window) =>
					window.id === id
						? {
								...window,
								isMaximized: false,
								isMinimized: false,
								position: restoredPosition,
								isFocused: true,
						  }
						: window
				),
			};
		}

		case "UPDATE_WINDOW_POSITION": {
			const { id, position } = action.payload;

			return {
				...state,
				windows: state.windows.map((window) =>
					window.id === id && !window.isMaximized
						? {
								...window,
								position: {
									...window.position,
									...position,
								},
						  }
						: window
				),
			};
		}

		case "BRING_TO_FRONT": {
			const { id } = action.payload;
			const newZIndex = state.nextZIndex + 1;
			const currentMaxZIndex = getMaxZIndex(state.windows);

			// Only update if this window isn't already on top
			if (
				state.windows.find((w) => w.id === id)?.zIndex ===
				currentMaxZIndex
			) {
				return state;
			}

			return {
				windows: state.windows.map((window) => ({
					...window,
					isFocused: window.id === id,
					zIndex: window.id === id ? newZIndex : window.zIndex,
				})),
				nextZIndex: newZIndex,
			};
		}

		default:
			// Exhaustiveness check for TypeScript
			const _exhaustiveCheck: never = action;
			return state;
	}
}

// Context type definition
interface WindowContextValue {
	state: WindowManagerState;
	dispatch: React.Dispatch<WindowAction>;
}

const WindowContext = createContext<WindowContextValue | null>(null);

/**
 * WindowProvider component
 * Provides window management state and actions to the application
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 * @returns {JSX.Element} WindowProvider component
 */
export function WindowProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(windowReducer, initialState);

	// Memoize context value to prevent unnecessary re-renders
	const contextValue = useMemo(
		() => ({
			state,
			dispatch,
		}),
		[state, dispatch]
	);

	return (
		<WindowContext.Provider value={contextValue}>
			{children}
		</WindowContext.Provider>
	);
}

/**
 * Custom hook to access window manager context
 * @throws {Error} If used outside WindowProvider
 * @returns {WindowContextValue} Window context value
 */
export function useWindowManager(): WindowContextValue {
	const context = useContext(WindowContext);

	if (!context) {
		throw new Error(
			"useWindowManager must be used within a WindowProvider"
		);
	}

	return context;
}

/**
 * Hook for optimized window operations with memoized callbacks
 * @returns {Object} Window management functions
 */
export function useWindowActions() {
	const { dispatch } = useWindowManager();

	const openWindow = useCallback(
		(
			appId: string,
			title: string,
			initialPosition?: Partial<WindowPosition>
		) => {
			dispatch({
				type: "OPEN_WINDOW",
				payload: { appId, title, initialPosition },
			});
		},
		[dispatch]
	);

	const closeWindow = useCallback(
		(id: string) => {
			dispatch({ type: "CLOSE_WINDOW", payload: { id } });
		},
		[dispatch]
	);

	const focusWindow = useCallback(
		(id: string) => {
			dispatch({ type: "FOCUS_WINDOW", payload: { id } });
		},
		[dispatch]
	);

	const minimizeWindow = useCallback(
		(id: string) => {
			dispatch({ type: "MINIMIZE_WINDOW", payload: { id } });
		},
		[dispatch]
	);

	const maximizeWindow = useCallback(
		(id: string) => {
			dispatch({ type: "MAXIMIZE_WINDOW", payload: { id } });
		},
		[dispatch]
	);

	const restoreWindow = useCallback(
		(id: string) => {
			dispatch({ type: "RESTORE_WINDOW", payload: { id } });
		},
		[dispatch]
	);

	const updateWindowPosition = useCallback(
		(id: string, position: Partial<WindowPosition>) => {
			dispatch({
				type: "UPDATE_WINDOW_POSITION",
				payload: { id, position },
			});
		},
		[dispatch]
	);

	const bringToFront = useCallback(
		(id: string) => {
			dispatch({ type: "BRING_TO_FRONT", payload: { id } });
		},
		[dispatch]
	);

	return useMemo(
		() => ({
			openWindow,
			closeWindow,
			focusWindow,
			minimizeWindow,
			maximizeWindow,
			restoreWindow,
			updateWindowPosition,
			bringToFront,
		}),
		[
			openWindow,
			closeWindow,
			focusWindow,
			minimizeWindow,
			maximizeWindow,
			restoreWindow,
			updateWindowPosition,
			bringToFront,
		]
	);
}

/**
 * Hook to get windows filtered by various criteria
 * @returns {Object} Filtered window arrays
 */
export function useWindowFilters() {
	const { state } = useWindowManager();

	const visibleWindows = useMemo(
		() => state.windows.filter((window) => !window.isMinimized),
		[state.windows]
	);

	const focusedWindow = useMemo(
		() => state.windows.find((window) => window.isFocused),
		[state.windows]
	);

	const runningApps = useMemo(
		() =>
			state.windows
				.filter((window) => !window.isMinimized)
				.map((window) => window.appId)
				.filter(
					(appId, index, array) => array.indexOf(appId) === index
				), // Unique apps
		[state.windows]
	);

	return {
		allWindows: state.windows,
		visibleWindows,
		focusedWindow,
		runningApps,
		totalWindows: state.windows.length,
		visibleCount: visibleWindows.length,
	};
}
