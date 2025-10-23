import { useState } from "react";
import PropTypes from "prop-types";
import { User, Menu } from "lucide-react";
import UserProfileDropdown from "./UserProfileDropdown";

const Header = ({ onMenuClick }) => {
	const [showProfileDropdown, setShowProfileDropdown] = useState(false);

	return (
		<header className="h-16 md:h-20 bg-ups-brown text-white px-4 md:px-8 flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 z-50">
			{/* Hamburger Menu - Mobile Only */}
			<button
				onClick={onMenuClick}
				className="lg:hidden p-2 hover:bg-ups-brown-light rounded-lg transition-colors"
				aria-label="Open menu"
			>
				<Menu size={24} />
			</button>

			<div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
				<img
					src="/images/ups-logo.png"
					alt="UPS Logo"
					className="h-6 md:h-8 w-6 md:w-8 object-contain flex-shrink-0"
					onError={(e) => {
						// Fallback if image doesn't exist
						e.target.style.display = "none";
					}}
				/>
				<h1 className="text-sm sm:text-base md:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
					UPS Digital Sales Assistant
				</h1>
			</div>

			<div className="relative">
				<button
					onClick={() => setShowProfileDropdown(!showProfileDropdown)}
					className="flex items-center gap-2 hover:bg-ups-brown-light px-2 md:px-3 py-2 rounded-lg transition-colors"
				>
					<span className="text-sm font-medium hidden sm:inline">
						Hi, Michael Smith
					</span>
					<div className="bg-ups-gold rounded-full p-2">
						<User size={18} md:size={20} className="text-ups-brown" />
					</div>
				</button>

				{showProfileDropdown && (
					<UserProfileDropdown onClose={() => setShowProfileDropdown(false)} />
				)}
			</div>
		</header>
	);
};

Header.propTypes = {
	onMenuClick: PropTypes.func,
};

export default Header;
