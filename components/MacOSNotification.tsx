"use client";

import { useEffect, useState } from "react";

interface MacOSNotificationProps {
	title?: string;
	message?: string;
	date?: string; // e.g. "APR"
	dayNumber?: string; // e.g. "4"
	isTimeSensitive?: boolean;
	timeIndicator?: string; // e.g. "in 10m"
	showCloseButton?: boolean;
	onClose?: () => void;
	position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export const MacOSNotification = ({
	title = "Artichoke",
	message = "Today at 09:30",
	date = "APR",
	dayNumber = "4",
	isTimeSensitive = true,
	timeIndicator = "in 10m",
	showCloseButton = false,
	onClose,
	position = "top-right",
}: MacOSNotificationProps) => {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const getPositionClasses = () => {
		switch (position) {
			case "top-left":
				return "top-8 left-8";
			case "bottom-left":
				return "bottom-8 left-8";
			case "bottom-right":
				return "bottom-8 right-8";
			default:
				return "top-8 right-8";
		}
	};

	return (
		<div
			className={`fixed ${getPositionClasses()} z-[99999] transition-all duration-300 ease-out ${
				isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
			}`}
			style={{
				fontFamily:
					'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
			}}
		>
			<div className="relative flex items-center w-[340px] min-h-[56px] px-3 py-2 bg-white/80 dark:bg-[#232323]/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-400/20 overflow-visible">
				{/* Calendar Icon with Date */}
				<div className="flex-shrink-0">
					<div className="w-10 h-10 rounded-lg bg-white flex flex-col items-center justify-center relative overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-4 bg-red-500 flex items-center justify-center rounded-t-lg">
							<span
								className="text-[9px] font-bold text-white tracking-widest leading-none"
								style={{ letterSpacing: 1 }}
							>
								{date}
							</span>
						</div>
						<span className="mt-3 text-xl font-bold text-black leading-none">
							{dayNumber}
						</span>
					</div>
				</div>
				{/* Notification Content */}
				<div className="flex-1 min-w-0 pl-3 flex flex-col -space-y-0 justify-center">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							{isTimeSensitive && (
								<span className="uppercase text-[12px] font-bold text-gray-400 tracking-widest">
									TIME SENSITIVE
								</span>
							)}
						</div>
						{timeIndicator && (
							<span className="text-[13px] font-medium text-gray-300 pr-1">
								{timeIndicator}
							</span>
						)}
					</div>
					<div className="flex items-center mt-0.5">
						<span className="font-bold text-white text-[15px] leading-tight dark:text-white text-black">
							{title}
						</span>
					</div>
					<div className="text-gray-400 text-[13px] leading-tight dark:text-gray-300 text-black/70 mt-0.5">
						{message}
					</div>
				</div>
				{/* Optional Close Button (hidden by default for this style) */}
				{showCloseButton && (
					<button
						type="button"
						onClick={() => {
							setIsVisible(false);
							setTimeout(() => onClose?.(), 300);
						}}
						className="absolute -left-3 -top-3 w-7 h-7 bg-white dark:bg-[#232323] shadow-md border border-black/10 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-10"
						aria-label="Close notification"
					>
						<svg
							className="w-3.5 h-3.5 text-gray-500 dark:text-gray-300"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 6l12 12M6 18L18 6"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};
