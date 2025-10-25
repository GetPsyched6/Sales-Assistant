import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
	BarChart,
	Bar,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import {
	TrendingDown,
	DollarSign,
	AlertCircle,
	CheckCircle,
} from "lucide-react";
import { getCompanyData } from "../../utils/companyData";

const CriticalInsightsPage = () => {
	const { companyName } = useParams();
	const companyData = getCompanyData(companyName);

	// Handle case where company data doesn't exist
	if (!companyData || !companyData.criticalInsights) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-2">No Critical Insights Data</h2>
					<p className="text-gray-600">Critical insights data is not available for this company.</p>
				</div>
			</div>
		);
	}

	const { criticalInsights } = companyData;
	const { external, upsInsights, shipmentVolume, insuredPackagesAndClaims } =
		criticalInsights;

	const categoryColors = {
		"Financial Performance": "bg-blue-100 text-blue-700",
		"Supply Chain": "bg-green-100 text-green-700",
		Leadership: "bg-purple-100 text-purple-700",
		"Regional Performance": "bg-orange-100 text-orange-700",
		"Sales Channels": "bg-pink-100 text-pink-700",
		"Risk Factors": "bg-red-100 text-red-700",
	};

	const InsightCard = ({ insight }) => (
		<div className="card hover:-translate-y-1 transition-transform duration-200">
			<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
				<h3 className="font-semibold text-gray-900 text-base md:text-lg">
					{insight.title}
				</h3>
				<span
					className={`px-3 py-1 rounded-full text-xs font-semibold self-start sm:flex-shrink-0 ${
						categoryColors[insight.category]
					}`}
				>
					{insight.category}
				</span>
			</div>
			<p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
				{insight.content}
			</p>
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs md:text-sm">
				<div className="flex items-center gap-2 text-gray-500">
					<span>Source: {insight.sources.join(", ")}</span>
				</div>
				<span className="text-gray-400">{insight.date}</span>
			</div>
		</div>
	);

	InsightCard.propTypes = {
		insight: PropTypes.shape({
			title: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
			content: PropTypes.string.isRequired,
			sources: PropTypes.array.isRequired,
			date: PropTypes.string.isRequired,
		}).isRequired,
	};

	return (
		<div className="space-y-6 md:space-y-8">
			{/* Header */}
			<div>
				<h1 className="text-2xl md:text-3xl font-bold text-gray-900">
					Under Armour Inc - UPS Customer Since 2015
				</h1>
				<p className="text-gray-500 mt-1 text-sm md:text-base">
					Critical insights and performance metrics
				</p>
			</div>

			{/* Two Column Layout - 50/50 */}
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8">
				{/* Left Column - External Insights */}
				<div className="space-y-4 md:space-y-6">
					<div>
						<h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
							External Insight
						</h2>
						<div className="space-y-4">
							{external.map((insight) => (
								<InsightCard key={insight.id} insight={insight} />
							))}
						</div>
					</div>
				</div>

				{/* Right Column - UPS Insights */}
				<div className="space-y-4 md:space-y-6">
					<div>
						<h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">
							UPS Insight
						</h2>

						{/* UPS Metrics - Single Card */}
						<div className="card mb-4 md:mb-6">
							<div className="grid grid-cols-2 gap-3 md:gap-4">
								{/* Paid */}
								<div className="text-center p-2 md:p-4">
									<div className="flex justify-center mb-2 md:mb-3">
										<div className="p-2 md:p-4 rounded-full bg-gray-50">
											<DollarSign
												size={24}
												className="md:w-8 md:h-8 text-gray-600"
											/>
										</div>
									</div>
									<p className="text-gray-500 text-xs md:text-sm font-medium mb-1 md:mb-2">
										Paid
									</p>
									<p className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
										{upsInsights.insuranceClaims.label}
									</p>
									<p className="text-xs text-gray-400">
										{upsInsights.insuranceClaims.description}
									</p>
								</div>

								{/* Shipment Decreasing */}
								<div className="text-center p-2 md:p-4">
									<div className="flex justify-center mb-2 md:mb-3">
										<div className="p-2 md:p-4 rounded-full bg-red-50">
											<TrendingDown
												size={24}
												className="md:w-8 md:h-8 text-red-600"
											/>
										</div>
									</div>
									<p className="text-gray-500 text-xs md:text-sm font-medium mb-1 md:mb-2">
										Shipment Decreasing
									</p>
									<p className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
										{upsInsights.shipmentTrend.label}
									</p>
									<p className="text-xs text-gray-400">
										{upsInsights.shipmentTrend.description}
									</p>
								</div>

								{/* Claims Resolved */}
								<div className="text-center p-2 md:p-4">
									<div className="flex justify-center mb-2 md:mb-3">
										<div className="p-2 md:p-4 rounded-full bg-green-50">
											<CheckCircle
												size={24}
												className="md:w-8 md:h-8 text-green-600"
											/>
										</div>
									</div>
									<p className="text-gray-500 text-xs md:text-sm font-medium mb-1 md:mb-2">
										Claims
									</p>
									<p className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
										{upsInsights.claimsResolved.label}
									</p>
									<p className="text-xs text-gray-400">
										{upsInsights.claimsResolved.description}
									</p>
								</div>

								{/* Claims Rejected */}
								<div className="text-center p-2 md:p-4">
									<div className="flex justify-center mb-2 md:mb-3">
										<div className="p-2 md:p-4 rounded-full bg-gray-50">
											<AlertCircle
												size={24}
												className="md:w-8 md:h-8 text-gray-600"
											/>
										</div>
									</div>
									<p className="text-gray-500 text-xs md:text-sm font-medium mb-1 md:mb-2">
										Claims
									</p>
									<p className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
										{upsInsights.claimsRejected.label}
									</p>
									<p className="text-xs text-gray-400">
										{upsInsights.claimsRejected.description}
									</p>
								</div>
							</div>
						</div>

						{/* Charts - Single Card with Both Stacked */}
						<div className="card space-y-6 md:space-y-8">
							{/* Shipment Volume Chart */}
							<div>
								<div className="mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Shipment Volume
									</h3>
									<div className="flex items-center gap-4 mt-2 text-sm">
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-yellow-400 rounded"></div>
											<span className="text-gray-600">GND</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-amber-900 rounded"></div>
											<span className="text-gray-600">2DA</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-yellow-600 rounded"></div>
											<span className="text-gray-600">1DA</span>
										</div>
									</div>
								</div>
								<ResponsiveContainer width="100%" height={250}>
									<BarChart data={shipmentVolume}>
										<CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
										<XAxis dataKey="quarter" tick={{ fill: "#6B7280" }} />
										<YAxis tick={{ fill: "#6B7280" }} />
										<Tooltip
											contentStyle={{
												backgroundColor: "#FFF",
												border: "1px solid #E5E7EB",
												borderRadius: "8px",
												boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
											}}
										/>
										<Legend />
										<Bar dataKey="GND" stackId="a" fill="#FBBF24" />
										<Bar dataKey="2DA" stackId="a" fill="#78350F" />
										<Bar dataKey="1DA" stackId="a" fill="#D97706" />
									</BarChart>
								</ResponsiveContainer>
							</div>

							{/* Insured Packages & Claims Chart */}
							<div>
								<div className="mb-4">
									<h3 className="text-lg font-semibold text-gray-900">
										Insured Packages & Claims
									</h3>
									<div className="flex items-center gap-4 mt-2 text-sm">
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
											<span className="text-gray-600">Insured Packages</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-gray-800 rounded-full"></div>
											<span className="text-gray-600">Claims</span>
										</div>
									</div>
								</div>
								<ResponsiveContainer width="100%" height={250}>
									<LineChart data={insuredPackagesAndClaims}>
										<CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
										<XAxis dataKey="month" tick={{ fill: "#6B7280" }} />
										<YAxis tick={{ fill: "#6B7280" }} />
										<Tooltip
											contentStyle={{
												backgroundColor: "#FFF",
												border: "1px solid #E5E7EB",
												borderRadius: "8px",
												boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
											}}
										/>
										<Legend />
										<Line
											type="monotone"
											dataKey="insuredPackages"
											stroke="#FBBF24"
											strokeWidth={2}
											dot={{ fill: "#FBBF24", r: 4 }}
											activeDot={{ r: 6 }}
										/>
										<Line
											type="monotone"
											dataKey="claims"
											stroke="#1F2937"
											strokeWidth={2}
											dot={{ fill: "#1F2937", r: 4 }}
											activeDot={{ r: 6 }}
										/>
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CriticalInsightsPage;
