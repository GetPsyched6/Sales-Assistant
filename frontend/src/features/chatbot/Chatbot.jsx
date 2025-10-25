import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Send, Mic, X, Loader2 } from "lucide-react";
import { getCompanyData } from "../../utils/companyData";

const Chatbot = ({ onClose }) => {
	const { companyName } = useParams();
	const companyData = getCompanyData(companyName);
	const companyDisplayName = companyData?.companyInfo?.displayName || "this company";

	const [messages, setMessages] = useState([
		{
			id: 1,
			text: `Hello! I'm Eia, your AI chat assistant. I have detailed information about ${companyDisplayName} and I'm available 24/7 to answer any questions you have. Let's chat!`,
			sender: "bot",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		},
	]);
	const [inputMessage, setInputMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const messagesEndRef = useRef(null);

	// Auto-scroll to bottom when messages change
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const handleSend = async (e) => {
		e.preventDefault();

		if (!inputMessage.trim() || isLoading) return;

		const userMessageText = inputMessage;
		setInputMessage("");
		setError(null);

		// Add user message
		const userMessage = {
			id: Date.now(),
			text: userMessageText,
			sender: "user",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setMessages((prev) => [...prev, userMessage]);
		setIsLoading(true);

		try {
			// Prepare conversation history (last 10 messages for context)
			const conversationHistory = messages.slice(-10).map((msg) => ({
				role: msg.sender === "user" ? "user" : "assistant",
				content: msg.text,
			}));

			// Call backend API
			const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";
			const response = await fetch(`${API_URL}/api/chat`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					message: userMessageText,
					companyContext: companyData,
					conversationHistory,
				}),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.detail || `API error: ${response.status}`);
			}

			const data = await response.json();

			if (data.success && data.response) {
				const botResponse = {
					id: Date.now() + 1,
					text: data.response,
					sender: "bot",
					timestamp: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				};
				setMessages((prev) => [...prev, botResponse]);
			} else {
				throw new Error(data.error || "Failed to get response from AI");
			}
		} catch (err) {
			console.error("Chat error:", err);
			setError(err.message);

			// Add error message as a bot response
			const errorMessage = {
				id: Date.now() + 1,
				text: `I'm sorry, I encountered an error: ${err.message}. Please try again or check if the backend server is running.`,
				sender: "bot",
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
				isError: true,
			};
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 20 }}
			className="fixed inset-0 md:bottom-24 md:right-8 md:inset-auto md:w-96 md:h-[600px] w-full h-full bg-white md:rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden"
		>
			{/* Header */}
			<div className="bg-gradient-to-r from-amber-900 to-amber-800 text-white p-4 md:p-4 flex items-center justify-between">
				<div className="flex items-center gap-2 md:gap-3">
					<div className="relative">
						<img
							src="/images/eia-avatar.jpg"
							alt="Eia"
							className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover"
							onError={(e) => {
								// Fallback avatar
								e.target.outerHTML =
									'<div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-white"></div>';
							}}
						/>
						<div className="absolute bottom-0 right-0 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-white"></div>
					</div>
					<div>
						<h3 className="font-bold text-sm md:text-lg">Chatting with</h3>
						<p className="text-xl md:text-2xl font-bold">Eia</p>
					</div>
				</div>
				<button
					onClick={onClose}
					className="p-2 hover:bg-white/10 rounded-lg transition-colors"
					aria-label="Close chat"
				>
					<X size={20} className="md:w-5 md:h-5" />
				</button>
			</div>

			{/* Messages */}
			<div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
				{messages.map((message) => (
					<motion.div
						key={message.id}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className={`flex ${
							message.sender === "user" ? "justify-end" : "justify-start"
						}`}
					>
						<div
							className={`max-w-[80%] rounded-2xl px-4 py-3 ${
								message.sender === "user"
									? "bg-amber-100 text-gray-900"
									: message.isError
									? "bg-red-100 text-red-900"
									: "bg-gray-200 text-gray-900"
							}`}
						>
							<p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
						</div>
					</motion.div>
				))}
				{/* Loading indicator */}
				{isLoading && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="flex justify-start"
					>
						<div className="bg-gray-200 text-gray-900 rounded-2xl px-4 py-3 flex items-center gap-2">
							<Loader2 size={16} className="animate-spin" />
							<span className="text-sm">Eia is typing...</span>
						</div>
					</motion.div>
				)}
				{/* Auto-scroll anchor */}
				<div ref={messagesEndRef} />
			</div>

			{/* Input */}
			<div className="p-3 md:p-4 bg-white border-t">
				{error && (
					<div className="mb-2 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">
						{error}
					</div>
				)}
				<form onSubmit={handleSend} className="relative">
					<input
						type="text"
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						placeholder={isLoading ? "Waiting for response..." : "Ask me anything..."}
						disabled={isLoading}
						className="w-full px-3 md:px-4 py-2.5 md:py-3 pr-20 md:pr-24 rounded-full border border-gray-300 focus:border-ups-teal focus:ring-2 focus:ring-ups-teal/20 outline-none text-xs md:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
						maxLength={2000}
					/>
					<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
						<button
							type="button"
							disabled={isLoading}
							className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Voice input"
						>
							<Mic size={18} className="md:w-5 md:h-5 text-gray-500" />
						</button>
						<button
							type="submit"
							disabled={isLoading || !inputMessage.trim()}
							className="p-1.5 md:p-2 bg-ups-teal hover:bg-ups-teal-dark text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							aria-label="Send message"
						>
							{isLoading ? (
								<Loader2 size={18} className="md:w-5 md:h-5 animate-spin" />
							) : (
								<Send size={18} className="md:w-5 md:h-5" />
							)}
						</button>
					</div>
				</form>
				<p className="text-xs text-gray-400 text-center mt-2">
					{inputMessage.length}/2000
				</p>
			</div>
		</motion.div>
	);
};

Chatbot.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default Chatbot;
