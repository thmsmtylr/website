"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CurrentlyPlayingData {
	isPlaying: boolean;
	title: string;
	album: string;
	artist: string;
	albumImageUrl: string;
	songUrl: string;
}

export const CurrentlyPlaying = () => {
	const [hide, setHide] = useState<boolean>(false);
	const [data, setData] = useState<CurrentlyPlayingData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let intervalId: NodeJS.Timeout;

		const fetchData = async () => {
			try {
				console.log("Fetching Spotify data...");
				const response = await fetch("/spotify");
				console.log("Response status:", response.status);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result = await response.json();
				console.log("Spotify data:", result);
				setData(result);
				setError(null);
			} catch (error) {
				console.error("Error fetching Spotify data:", error);
				setError(error instanceof Error ? error.message : "Unknown error");

				// Don't set mock data - let it show nothing if API fails
				setData(null);
			}
		};

		const startFetching = () => {
			fetchData();
			intervalId = setInterval(fetchData, 60000);
		};

		const stopFetching = () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};

		// Start fetching when the window gains focus
		window.onfocus = startFetching;

		// Stop fetching when the window loses focus
		window.onblur = stopFetching;

		// Start fetching immediately if the window is already focused
		if (document.hasFocus()) {
			startFetching();
		}

		return () => {
			// Clean up on component unmount
			if (intervalId) {
				clearInterval(intervalId);
			}
			window.onfocus = null;
			window.onblur = null;
		};
	}, []);

	// For testing - always show the overlay
	const shouldShow = data?.isPlaying; // Remove the "|| true" - only show when actually playing

	if (!shouldShow) return null;
	if (hide) return null;

	return (
		<div className="fixed inset-0 z-[99999]">
			{/* Main Content Container */}
			<div className="relative z-10 flex items-center justify-center min-h-screen p-8">
				<div className="">
					{/* Glitch Border */}
					<div className="">
						<div className="bg-transparent">
							{/* Title with Glitch Effect */}
							<h1
								className="glitch neon-text text-6xl md:text-8xl font-black mb-8 text-cyan-400"
								data-text="NOW PLAYING"
							>
								NOW PLAYING
							</h1>

							{/* Album Art with Effects */}
							<div className="relative mx-auto mb-8 w-64 h-64 rotate">
								<div className="absolute inset-0 holographic rounded-3xl" />
								<div className="absolute inset-0 glitch-border rounded-3xl" />
								{data?.albumImageUrl ? (
									<Image
										width={256}
										height={256}
										src={data.albumImageUrl}
										alt={data.title}
										className="rounded-3xl relative z-10"
									/>
								) : (
									<div className="w-64 h-64 rounded-3xl relative z-10 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center text-8xl">
										🎵
									</div>
								)}
								<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/20 via-cyan-500/20 to-purple-500/20" />
							</div>

							{/* Song Info with Typography Explosion */}
							<div className="space-y-4 mb-8 float">
								<h2 className="text-explosion neon-text text-4xl md:text-6xl font-bold text-pink-400">
									{data?.title || "Test Song"}
								</h2>

								<p className="text-explosion neon-text text-2xl md:text-4xl font-semibold text-green-400">
									{data?.artist || "Test Artist"}
								</p>

								<p className="text-explosion neon-text text-xl md:text-2xl font-medium text-yellow-400">
									{data?.album || "Test Album"}
								</p>
							</div>

							{/* Audio Visualizer */}
							<div className="flex justify-center items-end space-x-1 mb-8 h-20">
								{Array.from({ length: 50 }, (_, i) => (
									<div
										key={`audio-bar-${i}-${Date.now()}-${Math.random()}`}
										className="audio-bar w-2 rounded-t bg-gradient-to-t from-pink-500 to-cyan-500 animate-pulse"
										style={{
											height: `${Math.random() * 100}%`,
											animationDelay: `${i * 0.1}s`,
										}}
									/>
								))}
							</div>

							{/* Terminal-style Status */}
							<div className="terminal p-4 rounded-lg mb-8 text-left">
								<p className="text-green-400 font-mono">
									<span className="text-yellow-400">STATUS:</span> PLAYING
								</p>
								<p className="text-green-400 font-mono">
									<span className="text-yellow-400">TRACK:</span>{" "}
									{data?.title || "Test Song"}
								</p>
								<p className="text-green-400 font-mono">
									<span className="text-yellow-400">ARTIST:</span>{" "}
									{data?.artist || "Test Artist"}
								</p>
								<p className="text-green-400 font-mono">
									<span className="text-yellow-400">ALBUM:</span>{" "}
									{data?.album || "Test Album"}
								</p>
								{error && (
									<p className="text-red-400 font-mono">
										<span className="text-yellow-400">ERROR:</span> {error}
									</p>
								)}
							</div>

							{/* Action Buttons */}
							<div className="flex justify-center space-x-4">
								<a
									href={data?.songUrl || "https://open.spotify.com"}
									target="_blank"
									rel="noreferrer"
									className="glitch-border px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-110"
								>
									OPEN IN SPOTIFY
								</a>

								<button
									type="button"
									onClick={() => setHide(true)}
									className="glitch-border px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110"
								>
									CLOSE
								</button>
							</div>

							{/* Floating UI Elements */}
							<div className="absolute top-4 right-4 text-cyan-400 text-sm font-mono float">
								[SYSTEM ACTIVE]
							</div>

							<div className="absolute bottom-4 left-4 text-pink-400 text-sm font-mono rotate">
								⚡ AUDIO STREAM ⚡
							</div>

							<div className="absolute top-1/2 left-4 text-green-400 text-sm font-mono pulse">
								LIVE
							</div>

							<div className="absolute top-1/2 right-4 text-yellow-400 text-sm font-mono text-explosion">
								🎵
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
