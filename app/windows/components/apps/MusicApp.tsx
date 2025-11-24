"use client";

import { useState } from "react";
import {
	MusicNote,
	PlayArrow,
	Pause,
	SkipPrevious,
	SkipNext,
	Favorite,
	FavoriteBorder,
	LibraryMusic,
} from "@mui/icons-material";

interface Song {
	id: string;
	title: string;
	artist: string;
	album: string;
	duration: string;
	liked: boolean;
}

export function MusicApp({ windowId }: { windowId: string }) {
	const [songs, setSongs] = useState<Song[]>([
		{
			id: "1",
			title: "Summer Vibes",
			artist: "Ocean Waves",
			album: "Beach Memories",
			duration: "3:45",
			liked: true,
		},
		{
			id: "2",
			title: "Midnight Drive",
			artist: "City Lights",
			album: "Urban Dreams",
			duration: "4:20",
			liked: false,
		},
		{
			id: "3",
			title: "Mountain Top",
			artist: "Nature Sounds",
			album: "Wilderness",
			duration: "5:15",
			liked: true,
		},
		{
			id: "4",
			title: "Coffee Shop",
			artist: "Jazz Collective",
			album: "Relaxing Moments",
			duration: "3:30",
			liked: false,
		},
		{
			id: "5",
			title: "Rainy Day",
			artist: "Piano Masters",
			album: "Classical Collection",
			duration: "6:10",
			liked: true,
		},
	]);

	const [currentSong, setCurrentSong] = useState<Song | null>(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);

	const toggleLike = (songId: string) => {
		setSongs(
			songs.map((song) =>
				song.id === songId ? { ...song, liked: !song.liked } : song
			)
		);
		if (currentSong?.id === songId) {
			setCurrentSong((prev) =>
				prev ? { ...prev, liked: !prev.liked } : null
			);
		}
	};

	const playSong = (song: Song) => {
		setCurrentSong(song);
		setIsPlaying(true);
	};

	return (
		<div className="h-full bg-white flex flex-col">
			{/* Header */}
			<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-6">
				<div className="flex items-center gap-4">
					<div className="w-24 h-24 bg-white/20 rounded-lg flex items-center justify-center">
						<LibraryMusic sx={{ fontSize: 48 }} />
					</div>
					<div>
						<h1 className="text-2xl font-bold">My Music</h1>
						<p className="text-purple-100">{songs.length} songs</p>
					</div>
				</div>
			</div>

			{/* Player Controls */}
			<div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<button
							onClick={() =>
								currentSong && setIsPlaying(!isPlaying)
							}
							disabled={!currentSong}
							className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isPlaying ? <Pause /> : <PlayArrow />}
						</button>
						<div>
							<div className="font-medium text-gray-900">
								{currentSong?.title || "No song selected"}
							</div>
							<div className="text-sm text-gray-600">
								{currentSong?.artist || "Select a song to play"}
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<button className="w-8 h-8 text-gray-600 hover:text-gray-900">
							<SkipPrevious />
						</button>
						<button className="w-8 h-8 text-gray-600 hover:text-gray-900">
							<SkipNext />
						</button>
					</div>
				</div>
			</div>

			{/* Songs List */}
			<div className="flex-1 overflow-auto p-6">
				<div className="space-y-2">
					{songs.map((song, index) => (
						<div
							key={song.id}
							className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
								currentSong?.id === song.id
									? "bg-blue-50 border border-blue-200"
									: "hover:bg-gray-50"
							}`}
							onClick={() => playSong(song)}
						>
							<div className="w-8 text-center text-gray-500">
								{index + 1}
							</div>
							<div className="flex-1 min-w-0">
								<div
									className={`font-medium ${
										currentSong?.id === song.id
											? "text-blue-700"
											: "text-gray-900"
									}`}
								>
									{song.title}
								</div>
								<div className="text-sm text-gray-600">
									{song.artist}
								</div>
							</div>
							<div className="text-sm text-gray-600 w-32">
								{song.album}
							</div>
							<div className="text-sm text-gray-600 w-16 text-right">
								{song.duration}
							</div>
							<button
								onClick={(e) => {
									e.stopPropagation();
									toggleLike(song.id);
								}}
								className="w-8 h-8 text-gray-400 hover:text-red-500"
							>
								{song.liked ? (
									<Favorite sx={{ color: "#E81123" }} />
								) : (
									<FavoriteBorder />
								)}
							</button>
						</div>
					))}
				</div>

				{/* Playlists Section */}
				<div className="mt-8">
					<h3 className="text-lg font-semibold text-gray-900 mb-4">
						Playlists
					</h3>
					<div className="grid grid-cols-3 gap-4">
						<div className="p-4 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg cursor-pointer">
							<div className="font-medium text-gray-900">
								Liked Songs
							</div>
							<div className="text-sm text-gray-600">
								{songs.filter((s) => s.liked).length} songs
							</div>
						</div>
						<div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg cursor-pointer">
							<div className="font-medium text-gray-900">
								Recently Played
							</div>
							<div className="text-sm text-gray-600">
								12 songs
							</div>
						</div>
						<div className="p-4 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg cursor-pointer">
							<div className="font-medium text-gray-900">
								Chill Mix
							</div>
							<div className="text-sm text-gray-600">8 songs</div>
						</div>
					</div>
				</div>
			</div>

			{/* Status Bar */}
			<div className="bg-gray-50 border-t border-gray-200 px-6 py-2 text-sm text-gray-600 flex justify-between h-14">
				<span>{songs.length} songs</span>
				{currentSong && (
					<span>
						Now playing: {currentSong.title} - {currentSong.artist}
					</span>
				)}
			</div>
		</div>
	);
}
