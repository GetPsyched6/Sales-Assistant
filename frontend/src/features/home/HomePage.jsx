import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import {
	TrendingUp,
	TrendingDown,
	Globe,
	Calendar,
	DollarSign,
	ExternalLink,
	Sparkles,
	ArrowRight,
} from "lucide-react";
import { getCompanyData, hasData } from "../../utils/companyData";

const HomePage = () => {
	const navigate = useNavigate();
	const { companyName } = useParams();

	// Get company data dynamically
	const companyData = getCompanyData(companyName);

	// Handle case where company data doesn't exist
	if (!companyData) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						Company Not Found
					</h2>
					<p className="text-gray-600">
						Data for this company is not available.
					</p>
				</div>
			</div>
		);
	}

	const {
		companyInfo,
		financials,
		products,
		priceRanges,
		market,
		competitors,
		summary,
		sources,
		aiSalesIntelligence,
		marketDetails,
	} = companyData;

	const MetricCard = ({
		title,
		value,
		period,
		change,
		trend,
		icon: Icon,
		details,
	}) => (
		<div className="card relative overflow-hidden hover:-translate-y-1 transition-transform duration-200">
			<div className="flex items-start justify-between mb-3">
				<div>
					<p className="text-gray-500 text-xs md:text-sm font-medium">
						{title}
					</p>
					<p className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">
						{value}
					</p>
				</div>
				<div
					className={`p-2 md:p-3 rounded-lg ${
						trend === "up" ? "bg-green-50" : "bg-red-50"
					}`}
				>
					<Icon
						size={20}
						className={`md:w-6 md:h-6 ${
							trend === "up" ? "text-green-600" : "text-red-600"
						}`}
					/>
				</div>
			</div>
			<p className="text-xs text-gray-400 mb-2">{period}</p>
			<div className="flex items-center gap-2">
				<span
					className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
						trend === "up"
							? "bg-green-100 text-green-700"
							: "bg-red-100 text-red-700"
					}`}
				>
					{trend === "up" ? (
						<TrendingUp size={14} />
					) : (
						<TrendingDown size={14} />
					)}
					{change}
				</span>
			</div>
			{details && <p className="text-xs text-gray-500 mt-2">{details}</p>}
		</div>
	);

	MetricCard.propTypes = {
		title: PropTypes.string.isRequired,
		value: PropTypes.string.isRequired,
		period: PropTypes.string.isRequired,
		change: PropTypes.string.isRequired,
		trend: PropTypes.string.isRequired,
		icon: PropTypes.elementType.isRequired,
		details: PropTypes.string,
	};

	return (
		<div className="space-y-6 md:space-y-8">
			{/* Company Name Header - Loud and Proud */}
			<div className="bg-gradient-to-r from-ups-teal/10 via-ups-brown/5 to-amber-50 rounded-2xl p-6 md:p-8 border-2 border-ups-teal/20 shadow-lg">
				<div className="flex items-center gap-4 md:gap-6">
					{companyInfo?.logo ? (
						<img
							src={companyInfo.logo}
							alt={companyInfo.displayName}
							className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shadow-md"
						/>
					) : (
						<div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-ups-brown text-white flex items-center justify-center text-2xl md:text-3xl font-bold shadow-md">
							{companyInfo?.displayName?.substring(0, 2).toUpperCase() || "CO"}
						</div>
					)}
					<div className="flex-1">
						<h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-1 md:mb-2">
							{companyInfo?.displayName || "Company"}
						</h1>
						<div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-gray-600">
							{companyInfo?.industry && (
								<span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
									<Globe size={16} />
									{companyInfo.industry}
								</span>
							)}
							{companyInfo?.established && (
								<span className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm">
									<Calendar size={16} />
									Est. {companyInfo.established}
								</span>
							)}
							{companyInfo?.headquarters && (
								<span className="bg-white px-3 py-1 rounded-full shadow-sm">
									📍 {companyInfo.headquarters}
								</span>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Page Title */}
			<div>
				<h1 className="text-2xl md:text-3xl font-bold text-gray-900">
					Financials
				</h1>
				<p className="text-gray-500 mt-1 text-sm md:text-base">
					Company overview and financial metrics
				</p>
			</div>

			{/* Financial Metrics */}
			{financials && (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{financials.revenue && (
						<MetricCard
							title="Revenue"
							value={financials.revenue.label}
							period={financials.revenue.period}
							change={financials.revenue.change}
							trend={financials.revenue.trend}
							icon={DollarSign}
							details={financials.revenue.details}
						/>
					)}
					{financials.grossMargin && (
						<MetricCard
							title="Gross Margin"
							value={financials.grossMargin.label}
							period={financials.grossMargin.period}
							change={financials.grossMargin.change}
							trend={financials.grossMargin.trend}
							icon={TrendingUp}
							details={financials.grossMargin.details}
						/>
					)}
					{financials.cashPosition && (
						<MetricCard
							title="Cash Position"
							value={financials.cashPosition.label}
							period={financials.cashPosition.period}
							change={financials.cashPosition.change}
							trend={financials.cashPosition.trend}
							icon={DollarSign}
							details={financials.cashPosition.details}
						/>
					)}
					{financials.inventory && (
						<MetricCard
							title="Inventory"
							value={financials.inventory.label}
							period={financials.inventory.period}
							change={financials.inventory.change}
							trend={financials.inventory.trend}
							icon={TrendingUp}
							details={financials.inventory.details}
						/>
					)}
					{financials.adjustedEBITDA && (
						<MetricCard
							title="Adjusted EBITDA"
							value={financials.adjustedEBITDA.label}
							period={financials.adjustedEBITDA.period}
							change={financials.adjustedEBITDA.change}
							trend={financials.adjustedEBITDA.trend}
							icon={TrendingUp}
							details={financials.adjustedEBITDA.details}
						/>
					)}
					{financials.freeCashFlow && (
						<MetricCard
							title="Free Cash Flow"
							value={financials.freeCashFlow.label}
							period={financials.freeCashFlow.period}
							change={financials.freeCashFlow.change}
							trend={financials.freeCashFlow.trend}
							icon={DollarSign}
							details={financials.freeCashFlow.details}
						/>
					)}
				</div>
			)}

			{/* AI Sales Intelligence Preview Card - With Gradient Border */}
			{aiSalesIntelligence && (
				<div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
					{/* Pretty Gradient Border Effect */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ups-teal via-indigo-500 to-purple-600 p-[3px]">
						<div className="h-full w-full bg-white rounded-[14px]" />
					</div>

					<div className="relative z-10 p-6 md:p-8">
						<div className="flex items-start gap-4 mb-6">
							<div className="p-3 bg-ups-teal rounded-xl shadow-lg">
								<Sparkles className="text-white" size={28} />
							</div>
							<div className="flex-1">
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
									AI Sales Intelligence Report
								</h3>
								<p className="text-gray-600 text-sm md:text-base">
									{aiSalesIntelligence.totalProgramPotential
										? `Unlock ${aiSalesIntelligence.totalProgramPotential.min}–${aiSalesIntelligence.totalProgramPotential.max} in annual opportunities with AI-powered insights`
										: "AI-powered insights and recommendations for this company"}
								</p>
							</div>
						</div>

						{aiSalesIntelligence.executiveAnalysis?.summary && (
							<div className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-200">
								<p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-4">
									{aiSalesIntelligence.executiveAnalysis.summary}
								</p>
							</div>
						)}

						<div className="flex flex-wrap items-center gap-3">
							{aiSalesIntelligence.quickInsights?.walletShareGaps && (
								<div className="px-4 py-2 bg-indigo-50 rounded-lg border border-indigo-200">
									<p className="text-xs text-indigo-600 font-semibold mb-0.5">
										Quick Insights
									</p>
									<p className="text-lg font-bold text-gray-900">
										{aiSalesIntelligence.quickInsights.walletShareGaps.length}{" "}
										Opportunities
									</p>
								</div>
							)}
							{aiSalesIntelligence.aiRecommendations && (
								<div className="px-4 py-2 bg-purple-50 rounded-lg border border-purple-200">
									<p className="text-xs text-purple-600 font-semibold mb-0.5">
										AI Recommendations
									</p>
									<p className="text-lg font-bold text-gray-900">
										{aiSalesIntelligence.aiRecommendations.length} Action Items
									</p>
								</div>
							)}
							{aiSalesIntelligence.playbooks && (
								<div className="px-4 py-2 bg-pink-50 rounded-lg border border-pink-200">
									<p className="text-xs text-pink-600 font-semibold mb-0.5">
										Ready Playbooks
									</p>
									<p className="text-lg font-bold text-gray-900">
										{aiSalesIntelligence.playbooks.length} Strategies
									</p>
								</div>
							)}

							{/* Button pushed to right, wraps when viewport constrained */}
							<button
								onClick={() =>
									navigate(`/dashboard/${companyName}/ai-sales-intelligence`)
								}
								className="ml-auto flex-shrink-0 bg-ups-teal hover:bg-ups-teal-dark text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
							>
								<span className="whitespace-nowrap">
									Explore AI Sales Intelligence
								</span>
								<ArrowRight
									size={18}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Company Info Section */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
				{/* Main Company Card */}
				<div className="lg:col-span-2 card">
					<div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
						<div className="bg-ups-brown text-white text-xl md:text-2xl font-bold w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center flex-shrink-0">
							{companyInfo.name.substring(0, 2).toUpperCase()}
						</div>
						<div className="flex-1 min-w-0">
							<div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2">
								<h2 className="text-xl md:text-2xl font-bold text-gray-900">
									{companyInfo.displayName}
								</h2>
								{companyInfo.isUPSCustomer && (
									<span className="bg-ups-gold text-ups-brown px-3 py-1 rounded-full text-xs font-bold">
										UPS Customer &gt;
									</span>
								)}
							</div>
							<div className="flex flex-wrap gap-4 text-sm text-gray-600">
								<a
									href={`https://${companyInfo.website}`}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-1 hover:text-ups-teal transition-colors"
								>
									<Globe size={16} />
									{companyInfo.website}
								</a>
								<span className="flex items-center gap-1">
									<Calendar size={16} />
									Established {companyInfo.established}
								</span>
								<span className="flex items-center gap-1">
									📍 HQ: {companyInfo.headquarters}
								</span>
								<span className="flex items-center gap-1">
									🌍{" "}
									{companyInfo.shipsWorldwide
										? "Ships Worldwide"
										: "Regional Shipping"}
								</span>
							</div>
						</div>
					</div>

					<div className="border-t pt-4">
						<h3 className="font-semibold text-gray-900 mb-2">Industry</h3>
						<p className="text-gray-700">{companyInfo.industry}</p>
					</div>

					{products && hasData(products) && (
						<div className="border-t pt-4 mt-4">
							<h3 className="font-semibold text-gray-900 mb-2">Products</h3>
							<div className="flex flex-wrap gap-2">
								{products.map((product, index) => (
									<span
										key={index}
										className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
									>
										{product}
									</span>
								))}
							</div>
						</div>
					)}

					{priceRanges && Object.keys(priceRanges).length > 0 && (
						<div className="border-t pt-4 mt-4">
							<h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
								Price Ranges
							</h3>
							<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
								{Object.entries(priceRanges).map(([key, value]) => (
									<div key={key}>
										<p className="text-xs text-gray-500 capitalize">{key}</p>
										<p className="font-semibold text-gray-900 text-sm md:text-base">
											{value}
										</p>
									</div>
								))}
							</div>
						</div>
					)}

					{market && (
						<div className="border-t pt-4 mt-4">
							<h3 className="font-semibold text-gray-900 mb-2">Market</h3>
							<p className="text-gray-700">{market}</p>
							{marketDetails && (
								<p className="text-sm text-gray-500 mt-1">{marketDetails}</p>
							)}
						</div>
					)}

					{summary && (
						<div className="border-t pt-4 mt-4">
							<h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
							<p className="text-gray-700 leading-relaxed">{summary}</p>
						</div>
					)}
				</div>

				{/* Sidebar */}
				<div className="space-y-4 md:space-y-6">
					{/* Competitors */}
					{competitors && hasData(competitors) && (
						<div className="card">
							<h3 className="font-semibold text-gray-900 mb-3 md:mb-4 pb-3 border-b text-sm md:text-base">
								Competitors
							</h3>
							<div className="space-y-4">
								{competitors.map((competitor, index) => (
									<div
										key={index}
										className="text-center py-4 hover:bg-gray-50 transition-colors rounded-lg cursor-pointer"
									>
										<div className="mb-3 flex justify-center items-center h-16">
											<img
												src={`/images/competitors/${competitor.name.toLowerCase()}.png`}
												alt={competitor.name}
												className="h-16 w-auto max-w-full object-contain"
												onError={(e) => {
													// Fallback to text if logo doesn't exist
													e.target.outerHTML = `<div class="h-16 w-24 bg-gray-100 rounded flex items-center justify-center text-sm font-bold text-gray-400">${competitor.name.substring(
														0,
														3
													)}</div>`;
												}}
											/>
										</div>
										<p className="font-semibold text-gray-900 text-sm mb-2">
											{competitor.name}
										</p>
										{competitor.isUPSCustomer && (
											<span className="inline-block bg-ups-gold text-ups-brown px-3 py-1 rounded-full text-xs font-bold">
												UPS Customer
											</span>
										)}
									</div>
								))}
							</div>
						</div>
					)}

					{/* Sources */}
					{sources && hasData(sources) && (
						<div className="card">
							<h3 className="font-semibold text-gray-900 mb-4 pb-3 border-b">
								Sources
							</h3>
							<div className="space-y-3">
								{sources.map((source, index) => (
									<div key={index}>
										<p className="text-xs text-gray-500 mb-1">
											• {source.type}:
										</p>
										<a
											href={
												source.url.startsWith("http")
													? source.url
													: `https://${source.url}`
											}
											target="_blank"
											rel="noopener noreferrer"
											className="text-sm text-ups-teal hover:text-ups-teal-dark flex items-center gap-1 transition-colors break-all"
										>
											{source.url}
											<ExternalLink size={12} className="flex-shrink-0" />
										</a>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
