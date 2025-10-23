import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import Header from "../../shared/components/Header";
import Loader from "../../shared/components/Loader";

const SearchPage = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleSearch = (e) => {
		e.preventDefault();

		if (!searchQuery.trim()) return;

		// For demo, only handle "Under Armour" or "underarmour"
		const normalizedQuery = searchQuery
			.toLowerCase()
			.replace(/\s+/g, "")
			.trim();

		if (
			normalizedQuery.includes("underarmour") ||
			normalizedQuery.includes("under")
		) {
			setIsLoading(true);

			// Show loader for 3 seconds
			setTimeout(() => {
				setIsLoading(false);
				navigate("/dashboard/underarmour/home");
			}, 3000);
		} else {
			// Show a message for other companies
			alert(
				'Demo is currently available only for Under Armour. Please search for "Under Armour".'
			);
		}
	};

	if (isLoading) {
		return <Loader message="Analyzing Under Armour..." />;
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<Header />

			{/* Spacer to account for fixed header */}
			<div className="h-16 md:h-20" />

			<main className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 md:py-12 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="w-full max-w-4xl"
				>
					{/* Search Box */}
					<form onSubmit={handleSearch} className="relative">
						<input
							type="text"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Enter the company name you would like to search"
							className="w-full px-4 md:px-8 py-4 md:py-6 pr-16 md:pr-20 text-base md:text-lg rounded-xl md:rounded-2xl border-2 border-gray-300 focus:border-ups-teal focus:ring-4 focus:ring-ups-teal/20 outline-none transition-all shadow-lg"
						/>
						<button
							type="submit"
							className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-ups-teal hover:bg-ups-teal-dark text-white p-3 md:p-4 rounded-lg md:rounded-xl transition-colors"
							aria-label="Search"
						>
							<Search size={20} className="md:w-6 md:h-6" />
						</button>
					</form>

					{/* Tip */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="text-center text-gray-500 mt-4 md:mt-6 text-xs md:text-sm"
					>
						Tip: for more accurate results, you can add specific information
						such as tax registration number, country, etc.
					</motion.p>

					{/* Demo Note */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.6 }}
						className="mt-8 md:mt-12 bg-white rounded-xl p-4 md:p-6 shadow-md border-l-4 border-ups-gold"
					>
						<h3 className="font-semibold text-ups-brown mb-2 text-sm md:text-base">
							Demo Mode
						</h3>
						<p className="text-xs md:text-sm text-gray-600">
							This demo is currently configured for{" "}
							<span className="font-semibold text-ups-brown">Under Armour</span>
							. Try searching for &ldquo;Under Armour&rdquo; to see the full
							sales assistant in action.
						</p>
					</motion.div>

					{/* Features Preview */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7, duration: 0.6 }}
						className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
					>
						<div className="bg-white rounded-lg p-4 shadow-sm">
							<div className="bg-ups-gold/10 rounded-lg p-3 w-fit mb-3">
								<Search size={24} className="text-ups-brown" />
							</div>
							<h4 className="font-semibold text-gray-900 mb-1">
								Company Intelligence
							</h4>
							<p className="text-sm text-gray-600">
								Financial data, products, and market insights
							</p>
						</div>

						<div className="bg-white rounded-lg p-4 shadow-sm">
							<div className="bg-ups-teal/10 rounded-lg p-3 w-fit mb-3">
								<Search size={24} className="text-ups-teal" />
							</div>
							<h4 className="font-semibold text-gray-900 mb-1">
								Supply Chain Visibility
							</h4>
							<p className="text-sm text-gray-600">
								Interactive global shipping routes and logistics
							</p>
						</div>

						<div className="bg-white rounded-lg p-4 shadow-sm">
							<div className="bg-ups-brown/10 rounded-lg p-3 w-fit mb-3">
								<Search size={24} className="text-ups-brown" />
							</div>
							<h4 className="font-semibold text-gray-900 mb-1">Key Contacts</h4>
							<p className="text-sm text-gray-600">
								Decision makers and direct outreach tools
							</p>
						</div>
					</motion.div>
				</motion.div>
			</main>
		</div>
	);
};

export default SearchPage;
