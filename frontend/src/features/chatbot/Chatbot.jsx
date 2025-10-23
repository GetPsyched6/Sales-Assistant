import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Send, Mic, X } from "lucide-react";

const Chatbot = ({ onClose }) => {
	const [messages, setMessages] = useState([
		{
			id: 1,
			text: "Hello! I'm Eia, your AI chat assistant. Available 24/7 to answer any questions you have. Let's chat!",
			sender: "bot",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		},
	]);
	const [inputMessage, setInputMessage] = useState("");

	const mockResponses = {
		underarmour:
			"Under Armour offers a range of athletic performance products including HeatGear®, ColdGear® apparel, Curry Brand basketball shoes, and UA Flow performance footwear. They're currently a UPS customer with significant shipping volume across North America and international markets.",
		products:
			"Under Armour's popular product lines include: HeatGear® and ColdGear® apparel technology, Curry Brand basketball shoes featuring UA Flow cushioning, UA Halo footwear line, training & fitness gear, and team sports equipment.",
		shipping:
			"Under Armour ships worldwide with primary routes from Vietnam, Jordan, China, Cambodia, and Indonesia to US and EU markets. They use a mix of ocean freight, air, and truck transportation modes.",
		contact:
			"Key decision makers at Under Armour include Shawn Curran (Chief Supply Chain Officer), Kevin Plank (CEO), and Dave Bergman (CFO). You can reach out to them through the People tab.",
		default:
			"I can help you with information about Under Armour's business, products, shipping operations, key contacts, and sales opportunities. What would you like to know more about?",
	};

	const getBotResponse = (userMessage) => {
		const lowerMessage = userMessage.toLowerCase();

		if (
			lowerMessage.includes("product") ||
			(lowerMessage.includes("what") && lowerMessage.includes("offer"))
		) {
			return mockResponses.products;
		} else if (
			lowerMessage.includes("ship") ||
			lowerMessage.includes("supply")
		) {
			return mockResponses.shipping;
		} else if (
			lowerMessage.includes("contact") ||
			lowerMessage.includes("people") ||
			lowerMessage.includes("who")
		) {
			return mockResponses.contact;
		} else if (
			lowerMessage.includes("underarmour") ||
			lowerMessage.includes("under armour")
		) {
			return mockResponses.underarmour;
		} else {
			return mockResponses.default;
		}
	};

	const handleSend = (e) => {
		e.preventDefault();

		if (!inputMessage.trim()) return;

		// Add user message
		const userMessage = {
			id: messages.length + 1,
			text: inputMessage,
			sender: "user",
			timestamp: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};

		setMessages((prev) => [...prev, userMessage]);
		setInputMessage("");

		// Simulate bot response after a short delay
		setTimeout(() => {
			const botResponse = {
				id: messages.length + 2,
				text: getBotResponse(inputMessage),
				sender: "bot",
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			};
			setMessages((prev) => [...prev, botResponse]);
		}, 1000);
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
									: "bg-gray-200 text-gray-900"
							}`}
						>
							<p className="text-sm leading-relaxed">{message.text}</p>
						</div>
					</motion.div>
				))}
			</div>

			{/* Input */}
			<div className="p-3 md:p-4 bg-white border-t">
				<form onSubmit={handleSend} className="relative">
					<input
						type="text"
						value={inputMessage}
						onChange={(e) => setInputMessage(e.target.value)}
						placeholder="Ask me anything..."
						className="w-full px-3 md:px-4 py-2.5 md:py-3 pr-20 md:pr-24 rounded-full border border-gray-300 focus:border-ups-teal focus:ring-2 focus:ring-ups-teal/20 outline-none text-xs md:text-sm"
						maxLength={2000}
					/>
					<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 md:gap-2">
						<button
							type="button"
							className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full transition-colors"
							aria-label="Voice input"
						>
							<Mic size={18} className="md:w-5 md:h-5 text-gray-500" />
						</button>
						<button
							type="submit"
							className="p-1.5 md:p-2 bg-ups-teal hover:bg-ups-teal-dark text-white rounded-full transition-colors"
							aria-label="Send message"
						>
							<Send size={18} className="md:w-5 md:h-5" />
						</button>
					</div>
				</form>
				<p className="text-xs text-gray-400 text-center mt-2">
					0/{inputMessage.length > 0 ? inputMessage.length : "2000"}
				</p>
			</div>
		</motion.div>
	);
};

Chatbot.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default Chatbot;
