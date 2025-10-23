import PropTypes from "prop-types";
import { User, LogOut, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const UserProfileDropdown = ({ onClose }) => {
	return (
		<>
			{/* Backdrop */}
			<div className="fixed inset-0 z-40" onClick={onClose} />

			{/* Dropdown */}
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				className="fixed sm:absolute left-0 right-0 sm:left-auto sm:right-0 top-16 sm:top-auto mt-0 sm:mt-2 w-full sm:w-80 max-w-full sm:max-w-sm bg-white sm:rounded-xl rounded-b-xl shadow-2xl overflow-hidden z-50"
			>
				{/* User Info Section */}
				<div className="bg-gradient-to-r from-ups-brown/90 to-ups-brown-light/90 text-white p-4 sm:p-5">
					<div className="flex items-center gap-3 sm:gap-4">
						<div className="bg-ups-gold rounded-full p-2.5 sm:p-3">
							<User size={20} className="sm:w-6 sm:h-6 text-ups-brown" />
						</div>
						<div className="flex-1 min-w-0">
							<p className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">
								Michael Smith
							</p>
							<p className="text-xs text-gray-200 opacity-90 truncate">
								michael.smith@upscapital.com
							</p>
						</div>
					</div>
				</div>

				{/* Menu Items */}
				<div className="py-1 sm:py-2">
					<button
						className="w-full px-4 sm:px-5 py-3 sm:py-4 hover:bg-gray-50 active:bg-gray-100 flex items-center gap-3 sm:gap-4 transition-all duration-200 text-left"
						onClick={() => {
							// Mock action - will add functionality later
							console.log("View Account clicked");
						}}
					>
						<UserCircle2
							size={18}
							className="sm:w-5 sm:h-5 text-gray-600 flex-shrink-0"
						/>
						<div className="flex-1 min-w-0">
							<p className="font-medium text-sm sm:text-base text-gray-900 mb-0.5">
								View Account
							</p>
							<p className="text-xs text-gray-500">Manage your profile</p>
						</div>
					</button>

					<div className="border-t border-gray-200 my-1 sm:my-2" />

					<button
						className="w-full px-4 sm:px-5 py-3 sm:py-4 hover:bg-red-50 active:bg-red-100 flex items-center gap-3 sm:gap-4 transition-all duration-200 text-left text-red-600"
						onClick={() => {
							// Mock action - will add functionality later
							console.log("Sign Out clicked");
						}}
					>
						<LogOut size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
						<span className="font-medium text-sm sm:text-base">Sign Out</span>
					</button>
				</div>
			</motion.div>
		</>
	);
};

UserProfileDropdown.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default UserProfileDropdown;
