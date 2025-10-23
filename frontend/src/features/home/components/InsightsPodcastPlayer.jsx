import { useState, useRef, useEffect } from "react";
import { Play, Pause, Download, Sparkles } from "lucide-react";

const InsightsPodcastPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const audioRef = useRef(null);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);
		const updateDuration = () => setDuration(audio.duration);
		const handleEnded = () => setIsPlaying(false);

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", updateDuration);
		audio.addEventListener("ended", handleEnded);

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
			audio.removeEventListener("loadedmetadata", updateDuration);
			audio.removeEventListener("ended", handleEnded);
		};
	}, []);

	const togglePlayPause = () => {
		if (isPlaying) {
			audioRef.current?.pause();
		} else {
			audioRef.current?.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleSeek = (e) => {
		const audio = audioRef.current;
		if (!audio) return;

		const rect = e.currentTarget.getBoundingClientRect();
		const percent = (e.clientX - rect.left) / rect.width;
		audio.currentTime = percent * duration;
	};

	const formatTime = (seconds) => {
		if (!seconds || isNaN(seconds)) return "0:00";
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, "0")}`;
	};

	const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

	return (
		<div className="card bg-gradient-to-br from-ups-brown to-ups-brown-light overflow-hidden">
			{/* Header with Title and Controls */}
			<div className="flex items-start justify-between gap-4 mb-4">
				{/* Left: Icon and Title */}
				<div className="flex items-start gap-3 flex-1">
					<div className="bg-ups-gold p-2 rounded-lg flex-shrink-0">
						<Sparkles size={20} className="text-ups-brown" />
					</div>
					<div>
						<h3 className="text-base font-bold text-white mb-1">
							Under Armour Sales Strategy Briefing
						</h3>
						<p className="text-xs text-gray-300">
							15-minute AI-generated executive brief on cross-sell
							opportunities, market insights, and growth strategies ⋅ Generated
							from live data
						</p>
					</div>
				</div>

				{/* Right: Play and Download Buttons */}
				<div className="flex items-center gap-2 flex-shrink-0">
					{/* Play/Pause Button */}
					<button
						onClick={togglePlayPause}
						className="bg-ups-gold hover:bg-ups-gold-light text-ups-brown p-2.5 rounded-full transition-colors shadow-lg"
					>
						{isPlaying ? (
							<Pause size={18} />
						) : (
							<Play size={18} className="ml-0.5" />
						)}
					</button>

					{/* Download Button */}
					<button
						onClick={() => {
							const link = document.createElement("a");
							link.href = "/audio/sales-insights-podcast.mp3";
							link.download = "underarmour-sales-insights.mp3";
							link.click();
						}}
						className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
						title="Download podcast"
					>
						<Download size={18} />
					</button>
				</div>
			</div>

			{/* Audio Element */}
			<audio
				ref={audioRef}
				src="/audio/sales-insights-podcast.mp3"
				preload="metadata"
			/>

			{/* Player Controls */}
			<div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
				{/* Progress Bar */}
				<div
					className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-2 group"
					onClick={handleSeek}
				>
					<div
						className="h-full bg-ups-gold rounded-full transition-all relative group-hover:bg-ups-gold-light"
						style={{ width: `${progress}%` }}
					>
						<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-ups-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
					</div>
				</div>

				{/* Time Display */}
				<div className="flex items-center justify-between text-xs text-gray-300">
					<span>{formatTime(currentTime)}</span>
					<span>{formatTime(duration)}</span>
				</div>
			</div>
		</div>
	);
};

export default InsightsPodcastPlayer;
