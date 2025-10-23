import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Loader = ({ message = "Loading company data..." }) => {
	return (
		<div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
			<div className="text-center">
				{/* UPS Logo Animation */}
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="mb-8"
				>
					<div className="bg-ups-brown rounded-2xl p-8 shadow-2xl inline-block">
						<img
							src="/images/ups-logo.png"
							alt="UPS Logo"
							className="h-16 w-16 object-contain"
							onError={(e) => {
								// Fallback to a styled div if image doesn't exist
								e.target.outerHTML =
									'<div class="h-16 w-16 bg-ups-gold rounded-lg"></div>';
							}}
						/>
					</div>
				</motion.div>

				{/* Loading Dots */}
				<div className="flex items-center justify-center gap-2 mb-4">
					<div className="w-3 h-3 bg-ups-gold rounded-full loader-dot" />
					<div className="w-3 h-3 bg-ups-gold rounded-full loader-dot" />
					<div className="w-3 h-3 bg-ups-gold rounded-full loader-dot" />
				</div>

				{/* Loading Message */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
					className="text-gray-600 text-lg font-medium"
				>
					{message}
				</motion.p>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="text-gray-400 text-sm mt-2"
				>
					Gathering insights from multiple sources...
				</motion.p>
			</div>
		</div>
	);
};

Loader.propTypes = {
	message: PropTypes.string,
};

export default Loader;
