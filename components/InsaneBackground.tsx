"use client";
import { useEffect, useState } from "react";

export const InsaneBackground = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [particles, setParticles] = useState<
		Array<{
			id: number;
			x: number;
			y: number;
			vx: number;
			vy: number;
			color: string;
			size: number;
		}>
	>([]);
	const [frontendIcons, setFrontendIcons] = useState<
		Array<{
			id: number;
			x: number;
			y: number;
			icon: string;
			rotation: number;
		}>
	>([]);

	useEffect(() => {
		// Generate random particles - ACID TRIP
		const newParticles = Array.from({ length: 300 }, (_, i) => ({
			id: i,
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			vx: (Math.random() - 0.5) * 6,
			vy: (Math.random() - 0.5) * 6,
			size: Math.random() * 4 + 1,
			color: [
				"#ff0080",
				"#00ffff",
				"#00ff41",
				"#ffff00",
				"#8a2be2",
				"#ff6600",
				"#ff1493",
				"#00ff7f",
			][Math.floor(Math.random() * 8)],
		}));
		setParticles(newParticles);

		// Generate frontend icons
		const icons = [
			"⚛️",
			"💻",
			"⚡",
			"🔥",
			"🚀",
			"🌟",
			"🎯",
			"💎",
			"🔧",
			"📐",
			"🎪",
			"🌈",
		];
		const newFrontendIcons = Array.from({ length: 80 }, (_, i) => ({
			id: i,
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			icon: icons[Math.floor(Math.random() * icons.length)],
			rotation: Math.random() * 360,
		}));
		setFrontendIcons(newFrontendIcons);

		// Mouse tracking
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	// Animate particles - FASTER ACID TRIP
	useEffect(() => {
		const interval = setInterval(() => {
			setParticles((prev) =>
				prev.map((particle) => ({
					...particle,
					x: particle.x + particle.vx,
					y: particle.y + particle.vy,
					vx:
						particle.x > window.innerWidth || particle.x < 0
							? -particle.vx
							: particle.vx,
					vy:
						particle.y > window.innerHeight || particle.y < 0
							? -particle.vy
							: particle.vy,
				})),
			);
		}, 20); // EVEN FASTER!

		return () => clearInterval(interval);
	}, []);

	// Animate frontend icons
	useEffect(() => {
		const interval = setInterval(() => {
			setFrontendIcons((prev) =>
				prev.map((icon) => ({
					...icon,
					rotation: icon.rotation + 3,
					x: icon.x + (Math.random() - 0.5) * 3,
					y: icon.y + (Math.random() - 0.5) * 3,
				})),
			);
		}, 80);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 overflow-hidden pointer-events-none">
			{/* Matrix Rain Effect - MORE INTENSE */}
			<div className="absolute inset-0 matrix-bg opacity-50" />

			{/* Morphing Background - FASTER */}
			<div className="absolute inset-0 morph-bg opacity-30" />

			{/* Cyber Grid - MORE DENSE */}
			<div className="absolute inset-0 cyber-grid opacity-20" />

			{/* Scan Lines - FASTER */}
			<div className="absolute inset-0 scan-lines" />

			{/* CRT Effect */}
			<div className="absolute inset-0 crt" />

			{/* Noise Effect - MORE INTENSE */}
			<div className="absolute inset-0 noise" />

			{/* Particle Field - MORE PARTICLES */}
			<div className="absolute inset-0 particle-field" />

			{/* Floating Particles - ACID TRIP */}
			{particles.map((particle) => (
				<div
					key={particle.id}
					className="absolute rounded-full float"
					style={{
						left: particle.x,
						top: particle.y,
						width: particle.size,
						height: particle.size,
						backgroundColor: particle.color,
						boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
						animationDelay: `${particle.id * 0.03}s`,
					}}
				/>
			))}

			{/* Floating Frontend Icons - ACID TRIP */}
			{frontendIcons.map((icon) => (
				<div
					key={icon.id}
					className="absolute text-3xl pointer-events-none"
					style={{
						left: icon.x,
						top: icon.y,
						transform: `rotate(${icon.rotation}deg)`,
						animationDelay: `${icon.id * 0.05}s`,
					}}
				>
					{icon.icon}
				</div>
			))}

			{/* Mouse Trail Effect - BIGGER */}
			<div
				className="absolute w-12 h-12 rounded-full pointer-events-none"
				style={{
					left: mousePosition.x - 24,
					top: mousePosition.y - 24,
					background:
						"radial-gradient(circle, rgba(255,0,128,0.9) 0%, rgba(0,255,255,0.6) 50%, transparent 100%)",
					transform: "translate(-50%, -50%)",
					transition: "all 0.03s ease-out",
				}}
			/>

			{/* Glitch Text Overlay - FRONTEND FOCUSED */}
			<div
				className="absolute top-10 left-10 text-cyan-400 font-mono text-sm glitch"
				data-text="DEV MODE"
			>
				DEV MODE
			</div>

			<div className="absolute top-10 right-10 text-pink-400 font-mono text-sm rotate">
				⚡ FRONTEND ⚡
			</div>

			<div className="absolute bottom-10 left-10 text-green-400 font-mono text-sm pulse">
				HOT RELOAD
			</div>

			<div className="absolute bottom-10 right-10 text-yellow-400 font-mono text-sm text-explosion">
				🎨
			</div>

			{/* FRONTEND TEXT EVERYWHERE */}
			<div
				className="absolute top-1/4 left-1/4 text-purple-400 font-mono text-xs glitch"
				data-text="REACT"
			>
				REACT
			</div>

			<div className="absolute top-1/4 right-1/4 text-orange-400 font-mono text-xs rotate">
				VUE
			</div>

			<div className="absolute bottom-1/4 left-1/4 text-cyan-400 font-mono text-xs pulse">
				ANGULAR
			</div>

			<div className="absolute bottom-1/4 right-1/4 text-pink-400 font-mono text-xs text-explosion">
				SVELTE
			</div>

			<div
				className="absolute top-1/2 left-1/4 text-green-400 font-mono text-xs glitch"
				data-text="TYPESCRIPT"
			>
				TYPESCRIPT
			</div>

			<div className="absolute top-1/2 right-1/4 text-yellow-400 font-mono text-xs rotate">
				JAVASCRIPT
			</div>

			<div className="absolute bottom-1/2 left-1/4 text-purple-400 font-mono text-xs pulse">
				TAILWIND
			</div>

			<div className="absolute bottom-1/2 right-1/4 text-orange-400 font-mono text-xs text-explosion">
				NEXT.JS
			</div>

			{/* ACID TRIP MOVING ELEMENTS - BEYOND SOUNDBARS */}

			{/* Floating CSS Properties */}
			<div className="absolute top-1/6 left-1/6 text-green-400 font-mono text-sm float">
				display: flex;
			</div>
			<div className="absolute top-1/6 right-1/6 text-yellow-400 font-mono text-sm rotate">
				justify-content: center;
			</div>
			<div className="absolute bottom-1/6 left-1/6 text-purple-400 font-mono text-sm text-explosion">
				align-items: center;
			</div>
			<div className="absolute bottom-1/6 right-1/6 text-orange-400 font-mono text-sm pulse">
				position: absolute;
			</div>

			{/* Spinning Elements */}
			<div
				className="absolute top-1/3 left-1/3 text-6xl animate-spin"
				style={{ animationDuration: "2s" }}
			>
				⚛️
			</div>
			<div
				className="absolute top-1/3 right-1/3 text-5xl animate-spin"
				style={{ animationDuration: "3s", animationDirection: "reverse" }}
			>
				🎨
			</div>
			<div
				className="absolute bottom-1/3 left-1/3 text-6xl animate-spin"
				style={{ animationDuration: "4s" }}
			>
				💻
			</div>
			<div
				className="absolute bottom-1/3 right-1/3 text-5xl animate-spin"
				style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
			>
				🔧
			</div>

			{/* Bouncing Elements */}
			<div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
				🎯
			</div>
			<div
				className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce"
				style={{ animationDelay: "0.5s" }}
			>
				⭐
			</div>

			{/* Morphing Shapes */}
			<div className="absolute top-1/5 left-1/5 w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-ping" />
			<div
				className="absolute bottom-1/5 right-1/5 w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg animate-ping"
				style={{ animationDelay: "1s" }}
			/>

			{/* Holographic Overlay - MORE INTENSE */}
			<div className="absolute inset-0 holographic opacity-40" />

			{/* Glitch Border Effect - MORE INTENSE */}
			<div className="absolute inset-0 glitch-border opacity-50" />

			{/* ADDITIONAL ACID TRIP LAYERS */}
			<div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/10 to-transparent animate-pulse" />
			<div
				className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/10 to-transparent animate-pulse"
				style={{ animationDelay: "0.5s" }}
			/>
			<div
				className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-500/10 to-transparent animate-pulse"
				style={{ animationDelay: "1s" }}
			/>
			<div
				className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-500/10 to-transparent animate-pulse"
				style={{ animationDelay: "1.5s" }}
			/>
		</div>
	);
};
