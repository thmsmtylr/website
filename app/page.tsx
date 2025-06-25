import type { Metadata } from "next";
import { CurrentlyPlaying, InsaneBackground } from "../components";

export const metadata: Metadata = {
	title: "Thomas Taylor - DESIGN ENGINEER @ SPRINGBOARDS.AI",
	description: "Design Engineer @ Springboards.ai - FRONTEND DEVELOPMENT",
};

export default function Page() {
	return (
		<main className="fixed inset-0 overflow-hidden">
			{/* Insane Background Effects */}
			<InsaneBackground />

			{/* Currently Playing Overlay - Takes over the entire site */}
			<CurrentlyPlaying />

			{/* MAIN CONTENT - ACID TRIP LAYOUT */}
			<div className="relative z-10 w-full h-full">
				{/* GIGANTIC CENTRAL TITLE */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
					<h1
						className="glitch neon-text text-9xl md:text-[12rem] font-black text-cyan-400 text-center leading-none"
						data-text="FRONTEND"
					>
						FRONTEND
					</h1>
					<h2
						className="glitch neon-text text-6xl md:text-8xl font-black text-pink-400 text-center mt-4 leading-none"
						data-text="ENGINEER"
					>
						ENGINEER
					</h2>
					<p className="text-explosion neon-text text-4xl md:text-5xl text-green-400 font-mono text-center mt-4">
						@ SPRINGBOARDS.AI
					</p>
				</div>

				{/* HUNDREDS OF TECHNICAL FRONTEND TERMS - PROPERLY DISTRIBUTED */}

				{/* TOP ROW - REACT ECOSYSTEM */}
				<div className="absolute top-5 left-5 text-pink-400 font-mono text-xs float z-30">
					REACT
				</div>
				<div className="absolute top-5 left-20 text-cyan-400 font-mono text-xs rotate z-30">
					HOOKS
				</div>
				<div className="absolute top-5 left-32 text-green-400 font-mono text-xs text-explosion z-30">
					CONTEXT
				</div>
				<div className="absolute top-5 left-48 text-yellow-400 font-mono text-xs pulse z-30">
					REDUCER
				</div>
				<div className="absolute top-5 left-64 text-purple-400 font-mono text-xs float z-30">
					MEMO
				</div>
				<div className="absolute top-5 left-80 text-orange-400 font-mono text-xs rotate z-30">
					CALLBACK
				</div>
				<div className="absolute top-5 left-96 text-red-400 font-mono text-xs text-explosion z-30">
					REF
				</div>
				<div className="absolute top-5 left-112 text-blue-400 font-mono text-xs pulse z-30">
					EFFECT
				</div>
				<div className="absolute top-5 left-128 text-indigo-400 font-mono text-xs float z-30">
					LAYOUT
				</div>
				<div className="absolute top-5 left-144 text-emerald-400 font-mono text-xs rotate z-30">
					MOUNT
				</div>
				<div className="absolute top-5 left-160 text-rose-400 font-mono text-xs text-explosion z-30">
					UNMOUNT
				</div>
				<div className="absolute top-5 left-176 text-sky-400 font-mono text-xs pulse z-30">
					UPDATE
				</div>
				<div className="absolute top-5 left-192 text-violet-400 font-mono text-xs float z-30">
					RENDER
				</div>
				<div className="absolute top-5 left-208 text-teal-400 font-mono text-xs rotate z-30">
					COMMIT
				</div>
				<div className="absolute top-5 left-224 text-amber-400 font-mono text-xs text-explosion z-30">
					FIBER
				</div>
				<div className="absolute top-5 left-240 text-lime-400 font-mono text-xs pulse z-30">
					RECONCILIATION
				</div>

				{/* TOP RIGHT ROW - BUILD TOOLS */}
				<div className="absolute top-5 right-5 text-fuchsia-400 font-mono text-xs float z-30">
					VITE
				</div>
				<div className="absolute top-5 right-20 text-cyan-400 font-mono text-xs rotate z-30">
					WEBPACK
				</div>
				<div className="absolute top-5 right-32 text-green-400 font-mono text-xs text-explosion z-30">
					BABEL
				</div>
				<div className="absolute top-5 right-48 text-yellow-400 font-mono text-xs pulse z-30">
					ESLINT
				</div>
				<div className="absolute top-5 right-64 text-purple-400 font-mono text-xs float z-30">
					PRETTIER
				</div>
				<div className="absolute top-5 right-80 text-orange-400 font-mono text-xs rotate z-30">
					JEST
				</div>
				<div className="absolute top-5 right-96 text-red-400 font-mono text-xs text-explosion z-30">
					CYPRESS
				</div>
				<div className="absolute top-5 right-112 text-blue-400 font-mono text-xs pulse z-30">
					STORYBOOK
				</div>
				<div className="absolute top-5 right-128 text-indigo-400 font-mono text-xs float z-30">
					ROLLUP
				</div>
				<div className="absolute top-5 right-144 text-emerald-400 font-mono text-xs rotate z-30">
					PARCEL
				</div>
				<div className="absolute top-5 right-160 text-rose-400 font-mono text-xs text-explosion z-30">
					SWC
				</div>
				<div className="absolute top-5 right-176 text-sky-400 font-mono text-xs pulse z-30">
					TURBOPACK
				</div>
				<div className="absolute top-5 right-192 text-violet-400 font-mono text-xs float z-30">
					ESBUILD
				</div>
				<div className="absolute top-5 right-208 text-teal-400 font-mono text-xs rotate z-30">
					SNOWPACK
				</div>
				<div className="absolute top-5 right-224 text-amber-400 font-mono text-xs text-explosion z-30">
					WMR
				</div>
				<div className="absolute top-5 right-240 text-lime-400 font-mono text-xs pulse z-30">
					RSPACK
				</div>

				{/* BOTTOM LEFT ROW - PACKAGE MANAGERS */}
				<div className="absolute bottom-5 left-5 text-pink-400 font-mono text-xs float z-30">
					NPM
				</div>
				<div className="absolute bottom-5 left-20 text-cyan-400 font-mono text-xs rotate z-30">
					YARN
				</div>
				<div className="absolute bottom-5 left-32 text-green-400 font-mono text-xs text-explosion z-30">
					PNPM
				</div>
				<div className="absolute bottom-5 left-48 text-yellow-400 font-mono text-xs pulse z-30">
					BUN
				</div>
				<div className="absolute bottom-5 left-64 text-purple-400 font-mono text-xs float z-30">
					CORE-PACK
				</div>
				<div className="absolute bottom-5 left-80 text-orange-400 font-mono text-xs rotate z-30">
					RUSH
				</div>
				<div className="absolute bottom-5 left-96 text-red-400 font-mono text-xs text-explosion z-30">
					LERNA
				</div>
				<div className="absolute bottom-5 left-112 text-blue-400 font-mono text-xs pulse z-30">
					NX
				</div>
				<div className="absolute bottom-5 left-128 text-indigo-400 font-mono text-xs float z-30">
					TURBO
				</div>
				<div className="absolute bottom-5 left-144 text-emerald-400 font-mono text-xs rotate z-30">
					VOLTA
				</div>
				<div className="absolute bottom-5 left-160 text-rose-400 font-mono text-xs text-explosion z-30">
					FNM
				</div>
				<div className="absolute bottom-5 left-176 text-sky-400 font-mono text-xs pulse z-30">
					NVM
				</div>
				<div className="absolute bottom-5 left-192 text-violet-400 font-mono text-xs float z-30">
					NODENV
				</div>
				<div className="absolute bottom-5 left-208 text-teal-400 font-mono text-xs rotate z-30">
					ASDF
				</div>
				<div className="absolute bottom-5 left-224 text-amber-400 font-mono text-xs text-explosion z-30">
					SDKMAN
				</div>
				<div className="absolute bottom-5 left-240 text-lime-400 font-mono text-xs pulse z-30">
					CHOCOLATEY
				</div>

				{/* BOTTOM RIGHT ROW - FRAMEWORKS */}
				<div className="absolute bottom-5 right-5 text-fuchsia-400 font-mono text-xs float z-30">
					NEXT.JS
				</div>
				<div className="absolute bottom-5 right-20 text-cyan-400 font-mono text-xs rotate z-30">
					NUXT
				</div>
				<div className="absolute bottom-5 right-32 text-green-400 font-mono text-xs text-explosion z-30">
					SVELTEKIT
				</div>
				<div className="absolute bottom-5 right-48 text-yellow-400 font-mono text-xs pulse z-30">
					REMIX
				</div>
				<div className="absolute bottom-5 right-64 text-purple-400 font-mono text-xs float z-30">
					GATSBY
				</div>
				<div className="absolute bottom-5 right-80 text-orange-400 font-mono text-xs rotate z-30">
					ASTRO
				</div>
				<div className="absolute bottom-5 right-96 text-red-400 font-mono text-xs text-explosion z-30">
					SOLIDSTART
				</div>
				<div className="absolute bottom-5 right-112 text-blue-400 font-mono text-xs pulse z-30">
					QWIK
				</div>
				<div className="absolute bottom-5 right-128 text-indigo-400 font-mono text-xs float z-30">
					ANGULAR
				</div>
				<div className="absolute bottom-5 right-144 text-emerald-400 font-mono text-xs rotate z-30">
					VUE
				</div>
				<div className="absolute bottom-5 right-160 text-rose-400 font-mono text-xs text-explosion z-30">
					SVELTE
				</div>
				<div className="absolute bottom-5 right-176 text-sky-400 font-mono text-xs pulse z-30">
					SOLID
				</div>
				<div className="absolute bottom-5 right-192 text-violet-400 font-mono text-xs float z-30">
					PREACT
				</div>
				<div className="absolute bottom-5 right-208 text-teal-400 font-mono text-xs rotate z-30">
					LIT
				</div>
				<div className="absolute bottom-5 right-224 text-amber-400 font-mono text-xs text-explosion z-30">
					ALPINE
				</div>
				<div className="absolute bottom-5 right-240 text-lime-400 font-mono text-xs pulse z-30">
					STIMULUS
				</div>

				{/* LEFT SIDE - CSS FRAMEWORKS */}
				<div className="absolute top-1/4 left-5 text-pink-400 font-mono text-xs float z-30">
					TAILWIND
				</div>
				<div className="absolute top-1/3 left-5 text-cyan-400 font-mono text-xs rotate z-30">
					BOOTSTRAP
				</div>
				<div className="absolute top-1/2 left-5 text-green-400 font-mono text-xs text-explosion z-30">
					BULMA
				</div>
				<div className="absolute top-2/3 left-5 text-yellow-400 font-mono text-xs pulse z-30">
					FOUNDATION
				</div>
				<div className="absolute top-3/4 left-5 text-purple-400 font-mono text-xs float z-30">
					SEMANTIC
				</div>
				<div className="absolute top-1/5 left-5 text-orange-400 font-mono text-xs rotate z-30">
					CHAKRA
				</div>
				<div className="absolute top-2/5 left-5 text-red-400 font-mono text-xs text-explosion z-30">
					MANTINE
				</div>
				<div className="absolute top-3/5 left-5 text-blue-400 font-mono text-xs pulse z-30">
					ANTD
				</div>
				<div className="absolute top-4/5 left-5 text-indigo-400 font-mono text-xs float z-30">
					MATERIAL
				</div>
				<div className="absolute top-1/6 left-5 text-emerald-400 font-mono text-xs rotate z-30">
					MUI
				</div>
				<div className="absolute top-2/6 left-5 text-rose-400 font-mono text-xs text-explosion z-30">
					HEADLESS
				</div>
				<div className="absolute top-3/6 left-5 text-sky-400 font-mono text-xs pulse z-30">
					RADIX
				</div>
				<div className="absolute top-4/6 left-5 text-violet-400 font-mono text-xs float z-30">
					ARIA
				</div>
				<div className="absolute top-5/6 left-5 text-teal-400 font-mono text-xs rotate z-30">
					STITCHES
				</div>
				<div className="absolute top-1/7 left-5 text-amber-400 font-mono text-xs text-explosion z-30">
					EMOTION
				</div>
				<div className="absolute top-2/7 left-5 text-lime-400 font-mono text-xs pulse z-30">
					STYLED
				</div>

				{/* RIGHT SIDE - TESTING TOOLS */}
				<div className="absolute top-1/4 right-5 text-fuchsia-400 font-mono text-xs float z-30">
					JEST
				</div>
				<div className="absolute top-1/3 right-5 text-cyan-400 font-mono text-xs rotate z-30">
					VITEST
				</div>
				<div className="absolute top-1/2 right-5 text-green-400 font-mono text-xs text-explosion z-30">
					CYPRESS
				</div>
				<div className="absolute top-2/3 right-5 text-yellow-400 font-mono text-xs pulse z-30">
					PLAYWRIGHT
				</div>
				<div className="absolute top-3/4 right-5 text-purple-400 font-mono text-xs float z-30">
					SELENIUM
				</div>
				<div className="absolute top-1/5 right-5 text-orange-400 font-mono text-xs rotate z-30">
					TESTING
				</div>
				<div className="absolute top-2/5 right-5 text-red-400 font-mono text-xs text-explosion z-30">
					LIBRARY
				</div>
				<div className="absolute top-3/5 right-5 text-blue-400 font-mono text-xs pulse z-30">
					REACT
				</div>
				<div className="absolute top-4/5 right-5 text-indigo-400 font-mono text-xs float z-30">
					TESTING
				</div>
				<div className="absolute top-1/6 right-5 text-emerald-400 font-mono text-xs rotate z-30">
					VITEST
				</div>
				<div className="absolute top-2/6 right-5 text-rose-400 font-mono text-xs text-explosion z-30">
					JSDOM
				</div>
				<div className="absolute top-3/6 right-5 text-sky-400 font-mono text-xs pulse z-30">
					HAPPY
				</div>
				<div className="absolute top-4/6 right-5 text-violet-400 font-mono text-xs float z-30">
					DOM
				</div>
				<div className="absolute top-5/6 right-5 text-teal-400 font-mono text-xs rotate z-30">
					MSW
				</div>
				<div className="absolute top-1/7 right-5 text-amber-400 font-mono text-xs text-explosion z-30">
					MOCK
				</div>
				<div className="absolute top-2/7 right-5 text-lime-400 font-mono text-xs pulse z-30">
					SERVICE
				</div>

				{/* CENTER AREA - CSS PROPERTIES */}
				<div className="absolute top-1/4 left-1/4 text-emerald-400 font-mono text-xs float z-35">
					display: flex;
				</div>
				<div className="absolute top-1/4 left-1/3 text-rose-400 font-mono text-xs rotate z-35">
					justify-content: center;
				</div>
				<div className="absolute top-1/4 left-1/2 text-sky-400 font-mono text-xs text-explosion z-35">
					align-items: center;
				</div>
				<div className="absolute top-1/4 right-1/3 text-violet-400 font-mono text-xs pulse z-35">
					position: absolute;
				</div>
				<div className="absolute top-1/4 right-1/4 text-teal-400 font-mono text-xs float z-35">
					flex-direction: column;
				</div>

				<div className="absolute top-1/3 left-1/4 text-amber-400 font-mono text-xs float z-35">
					gap: 1rem;
				</div>
				<div className="absolute top-1/3 left-1/3 text-lime-400 font-mono text-xs rotate z-35">
					margin: 0;
				</div>
				<div className="absolute top-1/3 left-1/2 text-indigo-400 font-mono text-xs text-explosion z-35">
					padding: 1rem;
				</div>
				<div className="absolute top-1/3 right-1/3 text-fuchsia-400 font-mono text-xs pulse z-35">
					border-radius: 8px;
				</div>
				<div className="absolute top-1/3 right-1/4 text-cyan-400 font-mono text-xs float z-35">
					box-shadow: 0 4px 6px;
				</div>

				<div className="absolute top-1/2 left-1/4 text-green-400 font-mono text-xs float z-35">
					transition: all 0.3s;
				</div>
				<div className="absolute top-1/2 left-1/3 text-yellow-400 font-mono text-xs rotate z-35">
					transform: scale(1.1);
				</div>
				<div className="absolute top-1/2 left-1/2 text-purple-400 font-mono text-xs text-explosion z-35">
					background: linear-gradient;
				</div>
				<div className="absolute top-1/2 right-1/3 text-orange-400 font-mono text-xs pulse z-35">
					border: 2px solid;
				</div>
				<div className="absolute top-1/2 right-1/4 text-red-400 font-mono text-xs float z-35">
					opacity: 0.8;
				</div>

				<div className="absolute top-2/3 left-1/4 text-blue-400 font-mono text-xs float z-35">
					z-index: 10;
				</div>
				<div className="absolute top-2/3 left-1/3 text-indigo-400 font-mono text-xs rotate z-35">
					overflow: hidden;
				</div>
				<div className="absolute top-2/3 left-1/2 text-emerald-400 font-mono text-xs text-explosion z-35">
					pointer-events: none;
				</div>
				<div className="absolute top-2/3 right-1/3 text-rose-400 font-mono text-xs pulse z-35">
					backdrop-filter: blur;
				</div>
				<div className="absolute top-2/3 right-1/4 text-sky-400 font-mono text-xs float z-35">
					filter: drop-shadow;
				</div>

				<div className="absolute top-3/4 left-1/4 text-violet-400 font-mono text-xs float z-35">
					animation: pulse;
				</div>
				<div className="absolute top-3/4 left-1/3 text-teal-400 font-mono text-xs rotate z-35">
					animation-duration: 2s;
				</div>
				<div className="absolute top-3/4 left-1/2 text-amber-400 font-mono text-xs text-explosion z-35">
					animation-delay: 1s;
				</div>
				<div className="absolute top-3/4 right-1/3 text-lime-400 font-mono text-xs pulse z-35">
					animation-iteration-count: infinite;
				</div>
				<div className="absolute top-3/4 right-1/4 text-fuchsia-400 font-mono text-xs float z-35">
					animation-timing-function: ease;
				</div>

				{/* GIGANTIC FLOATING ELEMENTS - CENTERED */}
				<div className="absolute top-1/6 left-1/6 text-8xl rotate z-20">⚡</div>
				<div className="absolute top-1/6 right-1/6 text-7xl float z-20">🔥</div>
				<div className="absolute bottom-1/6 left-1/6 text-8xl text-explosion z-20">
					🚀
				</div>
				<div className="absolute bottom-1/6 right-1/6 text-7xl pulse z-20">
					💎
				</div>
				<div className="absolute top-1/8 left-1/8 text-6xl rotate z-20">⚛️</div>
				<div className="absolute top-1/8 right-1/8 text-5xl float z-20">🎨</div>
				<div className="absolute bottom-1/8 left-1/8 text-6xl text-explosion z-20">
					💻
				</div>
				<div className="absolute bottom-1/8 right-1/8 text-5xl pulse z-20">
					🔧
				</div>
				<div className="absolute top-1/7 left-1/7 text-7xl rotate z-20">🎯</div>
				<div className="absolute top-1/7 right-1/7 text-6xl float z-20">⭐</div>
				<div className="absolute bottom-1/7 left-1/7 text-7xl text-explosion z-20">
					🌟
				</div>
				<div className="absolute bottom-1/7 right-1/7 text-6xl pulse z-20">
					✨
				</div>

				{/* ACID TRIP MOVING ELEMENTS */}

				{/* Floating Code Blocks */}
				<div className="absolute top-1/3 left-1/3 w-32 h-32 z-25 transform rotate-12 float">
					<div className="bg-black/80 border border-cyan-400 p-2 rounded">
						<p className="text-cyan-400 font-mono text-xs">
							const App = () =&gt; {"{"}
						</p>
						<p className="text-pink-400 font-mono text-xs">
							return &lt;div&gt;
						</p>
						<p className="text-green-400 font-mono text-xs">&lt;/div&gt;</p>
						<p className="text-cyan-400 font-mono text-xs">{"}"}</p>
					</div>
				</div>

				<div className="absolute top-1/3 right-1/3 w-32 h-32 z-25 transform -rotate-12 rotate">
					<div className="bg-black/80 border border-pink-400 p-2 rounded">
						<p className="text-pink-400 font-mono text-xs">useState()</p>
						<p className="text-cyan-400 font-mono text-xs">useEffect()</p>
						<p className="text-green-400 font-mono text-xs">useRef()</p>
					</div>
				</div>

				{/* Morphing Shapes */}
				<div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse z-30 transform rotate-45" />
				<div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg animate-pulse z-30 transform -rotate-45" />
				<div className="absolute top-1/4 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full animate-pulse z-30 transform rotate-90" />
				<div className="absolute top-1/4 right-1/4 w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg animate-pulse z-30 transform -rotate-90" />

				{/* Spinning Tech Icons */}
				<div
					className="absolute top-1/5 left-1/5 text-6xl z-40 animate-spin"
					style={{ animationDuration: "3s" }}
				>
					⚛️
				</div>
				<div
					className="absolute top-1/5 right-1/5 text-5xl z-40 animate-spin"
					style={{ animationDuration: "4s", animationDirection: "reverse" }}
				>
					🎨
				</div>
				<div
					className="absolute bottom-1/5 left-1/5 text-6xl z-40 animate-spin"
					style={{ animationDuration: "5s" }}
				>
					💻
				</div>
				<div
					className="absolute bottom-1/5 right-1/5 text-5xl z-40 animate-spin"
					style={{ animationDuration: "2s", animationDirection: "reverse" }}
				>
					🔧
				</div>
				<div
					className="absolute top-1/9 left-1/9 text-4xl z-40 animate-spin"
					style={{ animationDuration: "6s" }}
				>
					🚀
				</div>
				<div
					className="absolute top-1/9 right-1/9 text-3xl z-40 animate-spin"
					style={{ animationDuration: "7s", animationDirection: "reverse" }}
				>
					⚡
				</div>
				<div
					className="absolute bottom-1/9 left-1/9 text-4xl z-40 animate-spin"
					style={{ animationDuration: "8s" }}
				>
					🔥
				</div>
				<div
					className="absolute bottom-1/9 right-1/9 text-3xl z-40 animate-spin"
					style={{ animationDuration: "1s", animationDirection: "reverse" }}
				>
					💎
				</div>

				{/* Floating Package Names */}
				<div className="absolute top-1/4 left-1/6 text-red-400 font-mono text-lg float z-45">
					npm install
				</div>
				<div className="absolute top-1/4 right-1/6 text-blue-400 font-mono text-lg rotate z-45">
					yarn add
				</div>
				<div className="absolute bottom-1/4 left-1/6 text-green-400 font-mono text-lg text-explosion z-45">
					pnpm dev
				</div>
				<div className="absolute bottom-1/4 right-1/6 text-yellow-400 font-mono text-lg pulse z-45">
					bun install
				</div>
				<div className="absolute top-1/3 left-1/6 text-purple-400 font-mono text-lg float z-45">
					npm run build
				</div>
				<div className="absolute top-1/3 right-1/6 text-orange-400 font-mono text-lg rotate z-45">
					yarn start
				</div>
				<div className="absolute bottom-1/3 left-1/6 text-cyan-400 font-mono text-lg text-explosion z-45">
					pnpm test
				</div>
				<div className="absolute bottom-1/3 right-1/6 text-pink-400 font-mono text-lg pulse z-45">
					bun run dev
				</div>

				{/* Bouncing Elements */}
				<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-4xl z-50 animate-bounce">
					🎯
				</div>
				<div
					className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-4xl z-50 animate-bounce"
					style={{ animationDelay: "0.5s" }}
				>
					⭐
				</div>
				<div
					className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-3xl z-50 animate-bounce"
					style={{ animationDelay: "1s" }}
				>
					🌟
				</div>
				<div
					className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-3xl z-50 animate-bounce"
					style={{ animationDelay: "1.5s" }}
				>
					✨
				</div>

				{/* Floating Divs with CSS */}
				<div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full animate-ping z-40" />
				<div
					className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-500 rounded-lg animate-ping z-40"
					style={{ animationDelay: "1s" }}
				/>
				<div
					className="absolute top-1/8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-ping z-40"
					style={{ animationDelay: "2s" }}
				/>
				<div
					className="absolute bottom-1/8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg animate-ping z-40"
					style={{ animationDelay: "0.5s" }}
				/>

				{/* Typography Explosion Elements */}
				<div className="absolute top-1/2 left-1/4 text-pink-400 font-mono text-2xl text-explosion z-45">
					FLEXBOX
				</div>
				<div className="absolute top-1/2 right-1/4 text-cyan-400 font-mono text-2xl text-explosion z-45">
					GRID
				</div>
				<div className="absolute bottom-1/2 left-1/4 text-green-400 font-mono text-2xl text-explosion z-45">
					CSS
				</div>
				<div className="absolute bottom-1/2 right-1/4 text-yellow-400 font-mono text-2xl text-explosion z-45">
					HTML
				</div>
				<div className="absolute top-1/2 left-1/6 text-purple-400 font-mono text-xl text-explosion z-45">
					TAILWIND
				</div>
				<div className="absolute top-1/2 right-1/6 text-orange-400 font-mono text-xl text-explosion z-45">
					REACT
				</div>
				<div className="absolute bottom-1/2 left-1/6 text-red-400 font-mono text-xl text-explosion z-45">
					NEXT.JS
				</div>
				<div className="absolute bottom-1/2 right-1/6 text-blue-400 font-mono text-xl text-explosion z-45">
					TYPESCRIPT
				</div>

				{/* Corner Status - FRONTEND FOCUSED */}
				<div
					className="absolute top-2 left-2 text-cyan-400 font-mono text-xs glitch z-50"
					data-text="DEV MODE"
				>
					DEV MODE
				</div>

				<div className="absolute top-2 right-2 text-pink-400 font-mono text-xs rotate z-50">
					⚡ FRONTEND ⚡
				</div>

				<div className="absolute bottom-2 left-2 text-green-400 font-mono text-xs pulse z-50">
					HOT RELOAD
				</div>

				<div className="absolute bottom-2 right-2 text-yellow-400 font-mono text-xs text-explosion z-50">
					🎨 CSS 🎨
				</div>

				{/* Center Crosshair */}
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border-2 border-red-500 rounded-full animate-pulse z-55">
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full" />
				</div>

				{/* HUNDREDS MORE TECHNICAL TERMS - FILLING ENTIRE SCREEN */}

				{/* More Floating Emojis - DISTRIBUTED */}
				<div className="absolute top-1/10 left-1/10 text-5xl float z-30">
					🎪
				</div>
				<div className="absolute top-1/10 right-1/10 text-4xl rotate z-30">
					🌈
				</div>
				<div className="absolute bottom-1/10 left-1/10 text-5xl text-explosion z-30">
					🎭
				</div>
				<div className="absolute bottom-1/10 right-1/10 text-4xl pulse z-30">
					🎨
				</div>
				<div className="absolute top-1/12 left-1/12 text-6xl float z-30">
					🎯
				</div>
				<div className="absolute top-1/12 right-1/12 text-5xl rotate z-30">
					⭐
				</div>
				<div className="absolute bottom-1/12 left-1/12 text-6xl text-explosion z-30">
					🌟
				</div>
				<div className="absolute bottom-1/12 right-1/12 text-5xl pulse z-30">
					✨
				</div>
				<div className="absolute top-1/15 left-1/15 text-4xl float z-30">
					🎪
				</div>
				<div className="absolute top-1/15 right-1/15 text-3xl rotate z-30">
					🌈
				</div>
				<div className="absolute bottom-1/15 left-1/15 text-4xl text-explosion z-30">
					🎭
				</div>
				<div className="absolute bottom-1/15 right-1/15 text-3xl pulse z-30">
					🎨
				</div>

				{/* More Spinning Elements - DISTRIBUTED */}
				<div
					className="absolute top-1/11 left-1/11 text-4xl animate-spin z-40"
					style={{ animationDuration: "9s" }}
				>
					🎪
				</div>
				<div
					className="absolute top-1/11 right-1/11 text-3xl animate-spin z-40"
					style={{ animationDuration: "10s", animationDirection: "reverse" }}
				>
					🌈
				</div>
				<div
					className="absolute bottom-1/11 left-1/11 text-4xl animate-spin z-40"
					style={{ animationDuration: "11s" }}
				>
					🎭
				</div>
				<div
					className="absolute bottom-1/11 right-1/11 text-3xl animate-spin z-40"
					style={{ animationDuration: "12s", animationDirection: "reverse" }}
				>
					🎨
				</div>

				{/* More Morphing Shapes - DISTRIBUTED */}
				<div className="absolute top-1/13 left-1/13 w-8 h-8 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-full animate-pulse z-30 transform rotate-12" />
				<div className="absolute top-1/13 right-1/13 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg animate-pulse z-30 transform -rotate-12" />
				<div className="absolute bottom-1/13 left-1/13 w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full animate-pulse z-30 transform rotate-24" />
				<div className="absolute bottom-1/13 right-1/13 w-7 h-7 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg animate-pulse z-30 transform -rotate-24" />

				{/* More Package Commands - DISTRIBUTED */}
				<div className="absolute top-1/14 left-1/14 text-rose-400 font-mono text-sm float z-45">
					npm run lint
				</div>
				<div className="absolute top-1/14 right-1/14 text-sky-400 font-mono text-sm rotate z-45">
					yarn test
				</div>
				<div className="absolute bottom-1/14 left-1/14 text-violet-400 font-mono text-sm text-explosion z-45">
					pnpm build
				</div>
				<div className="absolute bottom-1/14 right-1/14 text-teal-400 font-mono text-sm pulse z-45">
					bun run start
				</div>

				{/* More Typography Explosion - DISTRIBUTED */}
				<div className="absolute top-1/2 left-1/8 text-amber-400 font-mono text-lg text-explosion z-45">
					HOOKS
				</div>
				<div className="absolute top-1/2 right-1/8 text-lime-400 font-mono text-lg text-explosion z-45">
					CONTEXT
				</div>
				<div className="absolute bottom-1/2 left-1/8 text-indigo-400 font-mono text-lg text-explosion z-45">
					REDUCER
				</div>
				<div className="absolute bottom-1/2 right-1/8 text-fuchsia-400 font-mono text-lg text-explosion z-45">
					MEMO
				</div>

				{/* More Bouncing Elements - DISTRIBUTED */}
				<div
					className="absolute top-1/5 left-1/5 text-2xl z-50 animate-bounce"
					style={{ animationDelay: "2s" }}
				>
					🎪
				</div>
				<div
					className="absolute bottom-1/5 right-1/5 text-2xl z-50 animate-bounce"
					style={{ animationDelay: "2.5s" }}
				>
					🌈
				</div>
				<div
					className="absolute top-1/6 left-1/6 text-3xl z-50 animate-bounce"
					style={{ animationDelay: "3s" }}
				>
					🎭
				</div>
				<div
					className="absolute bottom-1/6 right-1/6 text-3xl z-50 animate-bounce"
					style={{ animationDelay: "3.5s" }}
				>
					🎨
				</div>

				{/* More Floating Divs - DISTRIBUTED */}
				<div
					className="absolute top-1/16 left-1/16 w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-ping z-40"
					style={{ animationDelay: "3s" }}
				/>
				<div
					className="absolute bottom-1/16 right-1/16 w-5 h-5 bg-gradient-to-r from-sky-500 to-blue-500 rounded-lg animate-ping z-40"
					style={{ animationDelay: "3.5s" }}
				/>
				<div
					className="absolute top-1/17 left-1/17 w-6 h-6 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full animate-ping z-40"
					style={{ animationDelay: "4s" }}
				/>
				<div
					className="absolute bottom-1/17 right-1/17 w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg animate-ping z-40"
					style={{ animationDelay: "4.5s" }}
				/>
			</div>
		</main>
	);
}
