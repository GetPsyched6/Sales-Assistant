import { Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";
import Chatbot from "../chatbot/Chatbot";

const DashboardLayout = () => {
	const { companyName } = useParams();
	const location = useLocation();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isChatbotOpen, setIsChatbotOpen] = useState(false);

	// Close sidebar on route change (mobile)
	useEffect(() => {
		setIsSidebarOpen(false);
	}, [location]);

	return (
		<div className="min-h-screen bg-gray-50">
			<Header onMenuClick={() => setIsSidebarOpen(true)} />

			{/* Spacer to account for fixed header */}
			<div className="h-16 md:h-20" />

			<div className="flex">
				<Sidebar
					companyName={companyName}
					isOpen={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
				/>

				<main className="flex-1 min-h-screen bg-gray-50">
					<div className="p-4 md:p-6 lg:p-8">
						<Outlet />
					</div>
				</main>
			</div>

			{/* Chatbot Toggle Button - Responsive positioning */}
			<motion.button
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 0.5, type: "spring" }}
				onClick={() => setIsChatbotOpen(!isChatbotOpen)}
				className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-ups-teal hover:bg-ups-teal-dark text-white p-3 md:p-4 rounded-full shadow-2xl z-40 transition-colors"
			>
				{isChatbotOpen ? (
					<X size={24} className="md:w-7 md:h-7" />
				) : (
					<MessageCircle size={24} className="md:w-7 md:h-7" />
				)}
			</motion.button>

			{/* Chatbot */}
			<AnimatePresence>
				{isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
			</AnimatePresence>
		</div>
	);
};

export default DashboardLayout;
