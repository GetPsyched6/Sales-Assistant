import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Home, TrendingUp, Users, Globe, X, Sparkles } from "lucide-react";

const Sidebar = ({ companyName, isOpen, onClose }) => {
	const navItems = [
		{ path: "home", label: "Home", icon: Home },
		{
			path: "ai-sales-intelligence",
			label: "AI Sales Intelligence",
			icon: Sparkles,
		},
		{ path: "supply-chain", label: "Supply Chain", icon: Globe },
		{ path: "critical-insights", label: "Critical Insights", icon: TrendingUp },
		{ path: "people", label: "People", icon: Users },
	];

	return (
		<>
			{/* Mobile Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={onClose}
					aria-hidden="true"
				/>
			)}

			{/* Sidebar */}
			<aside
				className={`
		fixed inset-y-0 left-0 z-50
		lg:sticky lg:top-16 md:lg:top-20 lg:z-auto lg:h-[calc(100vh-4rem)] md:lg:h-[calc(100vh-5rem)]
		w-64 bg-white flex flex-col
		transform transition-transform duration-300 ease-in-out lg:transform-none
		${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
	`}
			>
				{/* Mobile Close Button */}
				<div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-200">
					<span className="text-sm font-semibold text-gray-700">Menu</span>
					<button
						onClick={onClose}
						className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
						aria-label="Close menu"
					>
						<X size={20} />
					</button>
				</div>

				<nav className="flex-1 pt-6 pb-6 px-3 overflow-y-auto">
					{navItems.map((item) => {
						const Icon = item.icon;
						return (
							<NavLink
								key={item.path}
								to={`/dashboard/${companyName}/${item.path}`}
								onClick={onClose}
								className={({ isActive }) =>
									`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-all duration-200 ${
										isActive
											? "bg-ups-gold/20 text-ups-brown font-semibold border-l-3 border-ups-brown"
											: "text-gray-700 hover:bg-gray-100"
									}`
								}
							>
								{({ isActive }) => (
									<>
										<Icon
											size={20}
											className={isActive ? "text-ups-brown" : "text-gray-600"}
										/>
										<span>{item.label}</span>
									</>
								)}
							</NavLink>
						);
					})}
				</nav>
			</aside>
		</>
	);
};

Sidebar.propTypes = {
	companyName: PropTypes.string.isRequired,
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};

export default Sidebar;
