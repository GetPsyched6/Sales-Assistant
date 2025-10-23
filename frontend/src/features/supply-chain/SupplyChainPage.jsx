import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
	ComposableMap,
	Geographies,
	Geography,
	Marker,
	Line,
} from "react-simple-maps";
import { Filter, Calendar } from "lucide-react";
import { underArmourData } from "../../data/underarmour";
import CustomSelect from "../../shared/components/CustomSelect";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const SupplyChainPage = () => {
	const { supplyChain } = underArmourData;
	const [fromCountry, setFromCountry] = useState("All Countries");
	const [toCountry, setToCountry] = useState("All Countries");
	const [showFilterPanel, setShowFilterPanel] = useState(false);
	const [hoveredFacility, setHoveredFacility] = useState(null);
	const [hoveredCountry, setHoveredCountry] = useState(null);

	// Responsive map scale and dimensions based on window size
	const getMapScale = () => {
		if (typeof window === "undefined") return 150;
		const width = window.innerWidth;
		if (width < 640) return 80; // mobile - more zoomed out
		if (width < 1024) return 120; // tablet
		return 150; // desktop
	};

	// Filter states
	const [shipmentModes, setShipmentModes] = useState({
		selectAll: true,
		express: true,
		expressFreight: true,
		freightForwarding: true,
		ground: true,
	});

	const [facilities, setFacilities] = useState({
		selectAll: true,
		factory: true,
		supplier: true,
		warehouse: true,
	});

	const facilityColors = {
		headquarter: "#DC2626", // red
		factory: "#78866B", // olive/green
		supplier: "#059669", // teal green
		warehouse: "#D97706", // amber
	};

	const fromOptions = [
		"All Countries",
		"China",
		"Vietnam",
		"United States",
		"Jordan",
		"Cambodia",
		"Indonesia",
	];

	const toOptions = [
		"All Countries",
		"United States",
		"European Union",
		"Canada",
		"Philippines",
		"Singapore",
	];

	const handleShipmentModeChange = (mode) => {
		if (mode === "selectAll") {
			const newValue = !shipmentModes.selectAll;
			setShipmentModes({
				selectAll: newValue,
				express: newValue,
				expressFreight: newValue,
				freightForwarding: newValue,
				ground: newValue,
			});
		} else {
			const newModes = { ...shipmentModes, [mode]: !shipmentModes[mode] };
			const allSelected =
				newModes.express &&
				newModes.expressFreight &&
				newModes.freightForwarding &&
				newModes.ground;
			setShipmentModes({ ...newModes, selectAll: allSelected });
		}
	};

	const handleFacilityChange = (facility) => {
		if (facility === "selectAll") {
			const newValue = !facilities.selectAll;
			setFacilities({
				selectAll: newValue,
				factory: newValue,
				supplier: newValue,
				warehouse: newValue,
			});
		} else {
			const newFacilities = {
				...facilities,
				[facility]: !facilities[facility],
			};
			const allSelected =
				newFacilities.factory &&
				newFacilities.supplier &&
				newFacilities.warehouse;
			setFacilities({ ...newFacilities, selectAll: allSelected });
		}
	};

	return (
		<div className="space-y-4 md:space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl md:text-3xl font-bold text-gray-900">
						Supply Chain
					</h1>
					<p className="text-gray-500 mt-1 text-sm md:text-base">
						Global shipping routes and logistics network
					</p>
				</div>
			</div>

			{/* From/To Dropdowns - Always Visible */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-end">
				<CustomSelect
					label="From"
					value={fromCountry}
					onChange={setFromCountry}
					options={fromOptions}
				/>
				<CustomSelect
					label="To"
					value={toCountry}
					onChange={setToCountry}
					options={toOptions}
				/>
				<button
					onClick={() => setShowFilterPanel(!showFilterPanel)}
					className="h-12 w-full btn-secondary flex items-center justify-center gap-2 text-sm md:text-base"
				>
					<Filter size={16} className="md:w-[18px] md:h-[18px]" />
					<span className="hidden sm:inline">
						{showFilterPanel ? "Hide" : "Show"} Advanced Filters
					</span>
					<span className="sm:hidden">
						{showFilterPanel ? "Hide" : "Show"} Filters
					</span>
				</button>
			</div>

			{/* Advanced Filter Panel */}
			<AnimatePresence>
				{showFilterPanel && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="overflow-hidden"
					>
						<div className="card bg-white">
							<h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-base md:text-lg">
								Create Custom Filter
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
								{/* Shipment Modes */}
								<div>
									<h4 className="font-medium text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
										Shipment Modes
									</h4>
									<div className="space-y-1.5 md:space-y-2">
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={shipmentModes.selectAll}
												onChange={() => handleShipmentModeChange("selectAll")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700 font-medium">
												Select All
											</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={shipmentModes.express}
												onChange={() => handleShipmentModeChange("express")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">Express</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={shipmentModes.expressFreight}
												onChange={() =>
													handleShipmentModeChange("expressFreight")
												}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">
												Express Freight
											</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={shipmentModes.freightForwarding}
												onChange={() =>
													handleShipmentModeChange("freightForwarding")
												}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">
												Freight Forwarding
											</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={shipmentModes.ground}
												onChange={() => handleShipmentModeChange("ground")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">Ground</span>
										</label>
									</div>
								</div>

								{/* Facilities */}
								<div>
									<h4 className="font-medium text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
										Facilities
									</h4>
									<div className="space-y-1.5 md:space-y-2">
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={facilities.selectAll}
												onChange={() => handleFacilityChange("selectAll")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700 font-medium">
												Select All
											</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={facilities.factory}
												onChange={() => handleFacilityChange("factory")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">Factory</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={facilities.supplier}
												onChange={() => handleFacilityChange("supplier")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">Supplier</span>
										</label>
										<label className="flex items-center gap-2 cursor-pointer">
											<input
												type="checkbox"
												checked={facilities.warehouse}
												onChange={() => handleFacilityChange("warehouse")}
												className="w-4 h-4 text-ups-teal rounded focus:ring-ups-teal"
											/>
											<span className="text-sm text-gray-700">Warehouse</span>
										</label>
									</div>
								</div>
							</div>

							{/* Date Range */}
							<div className="mt-4 md:mt-6">
								<h4 className="font-medium text-gray-700 mb-2 md:mb-3 text-sm md:text-base">
									Date Range
								</h4>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
									<div className="relative">
										<input
											type="text"
											placeholder="19/09/2025"
											className="input-field pr-10"
										/>
										<Calendar
											size={18}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
										/>
									</div>
									<div className="relative">
										<input
											type="text"
											placeholder="16/10/2025"
											className="input-field pr-10"
										/>
										<Calendar
											size={18}
											className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
										/>
									</div>
								</div>
							</div>

							{/* Action Buttons */}
							<div className="mt-4 md:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3">
								<button
									onClick={() => {
										setFromCountry("All Countries");
										setToCountry("All Countries");
										setShipmentModes({
											selectAll: true,
											express: true,
											expressFreight: true,
											freightForwarding: true,
											ground: true,
										});
										setFacilities({
											selectAll: true,
											factory: true,
											supplier: true,
											warehouse: true,
										});
									}}
									className="px-6 md:px-8 py-2 md:py-2.5 border-2 border-ups-gold text-ups-brown font-semibold rounded-lg hover:bg-ups-gold/10 transition-colors text-sm md:text-base"
								>
									Clear
								</button>
								<button
									onClick={() => setShowFilterPanel(false)}
									className="px-6 md:px-8 py-2 md:py-2.5 bg-ups-gold hover:bg-ups-gold-dark text-ups-brown font-semibold rounded-lg transition-colors shadow-md text-sm md:text-base"
								>
									Apply
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Map */}
			<div className="card p-4 md:p-6 lg:p-8 overflow-hidden">
				<div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-full overflow-hidden">
					<ComposableMap
						projection="geoMercator"
						projectionConfig={{
							scale: getMapScale(),
							center: [10, 20],
						}}
						className="w-full h-full"
						style={{
							touchAction: "auto",
							width: "100%",
							height: "100%",
							maxWidth: "100%",
						}}
					>
						<Geographies geography={geoUrl}>
							{({ geographies }) =>
								geographies.map((geo) => (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										fill="#D3D3D3"
										stroke="#FFFFFF"
										strokeWidth={0.5}
										onMouseEnter={() => {
											setHoveredCountry(geo.properties.name);
										}}
										onMouseLeave={() => {
											setHoveredCountry(null);
										}}
										onTouchStart={() => {
											setHoveredCountry(geo.properties.name);
										}}
										onTouchEnd={() => {
											setTimeout(() => setHoveredCountry(null), 2000);
										}}
										style={{
											default: {
												fill: "#E5E7EB",
												outline: "none",
												transition: "all 0.2s",
											},
											hover: {
												fill: "#D1D5DB",
												outline: "none",
												transition: "all 0.2s",
											},
											pressed: {
												fill: "#9CA3AF",
												outline: "none",
											},
										}}
									/>
								))
							}
						</Geographies>

						{/* Draw lines for shipping routes */}
						{supplyChain.lanes.map((lane) => (
							<Line
								key={lane.id}
								from={lane.fromCoords}
								to={lane.toCoords}
								stroke={lane.type === "inbound" ? "#059669" : "#351C15"}
								strokeWidth={1.5}
								strokeLinecap="round"
								strokeDasharray={lane.mode.includes("AIR") ? "4,4" : "0"}
								opacity={0.7}
							/>
						))}

						{/* Draw facility markers */}
						{supplyChain.facilities.map((facility, index) => (
							<Marker key={index} coordinates={facility.coords}>
								<g
									onMouseEnter={() => setHoveredFacility(facility)}
									onMouseLeave={() => setHoveredFacility(null)}
									onTouchStart={() => setHoveredFacility(facility)}
									onTouchEnd={() =>
										setTimeout(() => setHoveredFacility(null), 2000)
									}
									className="cursor-pointer"
									style={{ touchAction: "auto" }}
								>
									<circle
										r={facility.type === "headquarter" ? 8 : 5}
										fill={facilityColors[facility.type]}
										stroke="#FFFFFF"
										strokeWidth={2}
										style={{
											transition: "all 0.2s",
											opacity:
												hoveredFacility?.name === facility.name ? 1 : 0.9,
										}}
									/>
									{facility.type === "headquarter" && (
										<circle
											r={12}
											fill="none"
											stroke={facilityColors[facility.type]}
											strokeWidth={2}
											opacity={0.4}
										/>
									)}
								</g>
							</Marker>
						))}
					</ComposableMap>

					{/* Hover Tooltip */}
					{hoveredFacility && (
						<div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs z-10">
							<h4 className="font-semibold text-gray-900 mb-1">
								{hoveredFacility.name}
							</h4>
							<p className="text-sm text-gray-600 capitalize">
								Type: {hoveredFacility.type}
							</p>
							<p className="text-sm text-gray-600">
								Location: {hoveredFacility.city}
							</p>
						</div>
					)}

					{/* Country Hover Info */}
					{hoveredCountry && (
						<div className="absolute top-4 right-4 bg-ups-brown/90 text-white rounded-lg px-4 py-2 text-sm font-medium">
							{hoveredCountry}
						</div>
					)}

					{/* Legend - Bottom Left */}
					<div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 bg-white rounded-lg shadow-lg p-2 md:p-4 space-y-1.5 md:space-y-2 max-w-[160px] md:max-w-none">
						<div className="flex items-center gap-2 md:gap-3">
							<div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-600 border-2 border-white flex items-center justify-center flex-shrink-0">
								<div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-red-600 bg-transparent"></div>
							</div>
							<span className="text-xs md:text-sm text-gray-700">
								Headquarter
							</span>
						</div>
						<div className="flex items-center gap-2 md:gap-3">
							<div
								className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex-shrink-0"
								style={{ backgroundColor: "#78866B" }}
							></div>
							<span className="text-xs md:text-sm text-gray-700">Factory</span>
						</div>
						<div className="flex items-center gap-2 md:gap-3">
							<div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-emerald-600 flex-shrink-0"></div>
							<span className="text-xs md:text-sm text-gray-700">Supplier</span>
						</div>
						<div className="flex items-center gap-2 md:gap-3">
							<div className="w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-amber-600 flex-shrink-0"></div>
							<span className="text-xs md:text-sm text-gray-700">
								Warehouse
							</span>
						</div>
						<div className="border-t pt-1.5 md:pt-2 mt-1.5 md:mt-2">
							<div className="flex items-center gap-2 md:gap-3">
								<div className="w-6 md:w-8 h-0.5 bg-emerald-600 flex-shrink-0"></div>
								<span className="text-xs md:text-sm text-gray-700">
									➜ Inbound
								</span>
							</div>
							<div className="flex items-center gap-2 md:gap-3 mt-1">
								<div className="w-6 md:w-8 h-0.5 bg-ups-brown flex-shrink-0"></div>
								<span className="text-xs md:text-sm text-gray-700">
									➜ Outbound
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Shipping Routes Table */}
			<div className="card">
				<h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">
					Shipping Routes
				</h3>
				<div className="overflow-x-auto -mx-4 md:-mx-6 px-4 md:px-6">
					<table className="w-full min-w-[600px]">
						<thead>
							<tr className="border-b bg-gray-50">
								<th className="text-left p-3 text-sm font-semibold text-gray-700">
									From
								</th>
								<th className="text-left p-3 text-sm font-semibold text-gray-700">
									To
								</th>
								<th className="text-left p-3 text-sm font-semibold text-gray-700">
									What
								</th>
								<th className="text-left p-3 text-sm font-semibold text-gray-700">
									Mode
								</th>
								<th className="text-left p-3 text-sm font-semibold text-gray-700">
									Volume
								</th>
								<th className="text-left p-3 text-sm font-semibold text-gray-700">
									Type
								</th>
							</tr>
						</thead>
						<tbody>
							{supplyChain.lanes.slice(0, 15).map((lane) => (
								<tr
									key={lane.id}
									className="border-b hover:bg-gray-50 transition-colors"
								>
									<td className="p-3 text-sm">
										<div className="font-medium text-gray-900">{lane.from}</div>
										<div className="text-xs text-gray-500">{lane.fromCity}</div>
									</td>
									<td className="p-3 text-sm">
										<div className="font-medium text-gray-900">{lane.to}</div>
										<div className="text-xs text-gray-500">{lane.toCity}</div>
									</td>
									<td className="p-3 text-sm text-gray-700">{lane.what}</td>
									<td className="p-3">
										<span className="inline-block px-2 py-1 bg-ups-teal/10 text-ups-teal text-xs font-semibold rounded">
											{lane.mode}
										</span>
									</td>
									<td className="p-3 text-sm font-semibold text-gray-900">
										{lane.volume}
									</td>
									<td className="p-3">
										<span
											className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
												lane.type === "inbound"
													? "bg-green-100 text-green-700"
													: "bg-blue-100 text-blue-700"
											}`}
										>
											{lane.type}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div className="p-3 md:p-4 bg-gray-50 text-center text-xs md:text-sm text-gray-500">
					Showing 15 of {supplyChain.lanes.length} routes
				</div>
			</div>
		</div>
	);
};

export default SupplyChainPage;
