import { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
	Zap,
	FileText,
	Lightbulb,
	BarChart3,
	BookOpen,
	TrendingUp,
	AlertTriangle,
	Target,
	CheckCircle2,
	ArrowRight,
	Rocket,
	Shield,
	Globe,
	Map,
	AlertCircle,
	Package,
	Plane,
} from "lucide-react";
import { getCompanyData } from "../../utils/companyData";
import InsightsPodcastPlayer from "../home/components/InsightsPodcastPlayer";
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

const AISalesIntelligencePage = () => {
	const [activeTab, setActiveTab] = useState("quick-insights");
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

	const { aiSalesIntelligence, criticalInsights } = companyData;

	// If no AI sales intelligence data, show message
	if (!aiSalesIntelligence) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-2">
						No AI Sales Intelligence Data
					</h2>
					<p className="text-gray-600">
						AI sales intelligence data is not available for this company yet.
					</p>
				</div>
			</div>
		);
	}

	// Icon mapping for key findings and playbooks
	const iconMap = {
		rocket: Rocket,
		shield: Shield,
		globe: Globe,
		map: Map,
		alert: AlertCircle,
		package: Package,
		plane: Plane,
		tower: TrendingUp,
	};

	// Color mapping for recommendations
	const colorMap = {
		purple: "from-purple-500/20 to-purple-600/10 border-purple-300",
		orange: "from-orange-500/20 to-orange-600/10 border-orange-300",
		blue: "from-blue-500/20 to-blue-600/10 border-blue-300",
		teal: "from-teal-500/20 to-teal-600/10 border-teal-300",
		green: "from-green-500/20 to-green-600/10 border-green-300",
		indigo: "from-indigo-500/20 to-indigo-600/10 border-indigo-300",
		pink: "from-pink-500/20 to-pink-600/10 border-pink-300",
	};

	const tabs = [
		{ id: "quick-insights", label: "Quick Insights", icon: Zap },
		{ id: "executive-analysis", label: "Executive Analysis", icon: FileText },
		{
			id: "ai-recommendations",
			label: "AI Recommendations",
			icon: Lightbulb,
		},
		{ id: "charts-tables", label: "Charts & Tables", icon: BarChart3 },
		{ id: "playbooks", label: "Playbooks", icon: BookOpen },
	];

	return (
		<div className="space-y-6 md:space-y-8">
			{/* Page Header */}
			<div>
				<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
					AI Sales Intelligence
				</h1>
				<p className="text-gray-600 text-sm md:text-base">
					AI-powered insights and recommendations for lead generation,
					cross-selling, and up-selling opportunities
				</p>
			</div>

			{/* Podcast Player - Only show if company has a podcast */}
			{companyData.companyInfo?.hasPodcast && (
				<InsightsPodcastPlayer
					companyName={companyName}
					companyDisplayName={companyData.companyInfo.displayName}
				/>
			)}

			{/* Total Program Potential Banner */}
			{aiSalesIntelligence.totalProgramPotential && (
				<div className="relative overflow-hidden rounded-2xl bg-white border-2 border-ups-teal shadow-xl">
					<div className="absolute inset-0 bg-gradient-to-br from-ups-teal/5 via-transparent to-ups-brown/5" />
					<div className="relative p-6 md:p-8">
						<div className="flex flex-col lg:flex-row items-center justify-between gap-6">
							<div className="flex-1 w-full lg:w-auto text-center lg:text-left">
								<div className="flex flex-col items-center lg:items-start gap-3 mb-3">
									<div className="p-3 bg-ups-teal/10 rounded-lg">
										<Target className="text-ups-teal" size={24} />
									</div>
									<div>
										<h3 className="text-xl md:text-2xl font-bold text-gray-900">
											Total Program Potential
										</h3>
										<p className="text-sm text-gray-600 leading-relaxed mt-2">
											{aiSalesIntelligence.totalProgramPotential.description}
										</p>
									</div>
								</div>
							</div>
							<div className="text-center bg-gradient-to-br from-ups-teal/10 to-ups-brown/10 px-6 md:px-8 py-5 md:py-6 rounded-xl border border-ups-teal/20 flex-shrink-0">
								<div className="text-3xl md:text-4xl lg:text-5xl font-bold text-ups-teal mb-2">
									{aiSalesIntelligence.totalProgramPotential.min}
									<span className="text-xl md:text-2xl text-gray-400 mx-2">
										–
									</span>
									{aiSalesIntelligence.totalProgramPotential.max}
								</div>
								<p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
									Annual Value
								</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Tabs Navigation - Clean Design */}
			<div className="bg-white rounded-xl shadow-md p-2 overflow-x-auto">
				<div className="flex gap-2 min-w-max">
					{tabs.map((tab) => {
						const Icon = tab.icon;
						return (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`flex items-center gap-2 px-4 md:px-6 py-3 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
									activeTab === tab.id
										? "bg-ups-teal text-white shadow-lg transform scale-105"
										: "text-gray-600 hover:text-ups-brown hover:bg-gray-50"
								}`}
							>
								<Icon size={18} />
								{tab.label}
							</button>
						);
					})}
				</div>
			</div>

			{/* Tab Content */}
			<div className="animate-fadeIn">
				{activeTab === "quick-insights" && (
					<QuickInsightsTab data={aiSalesIntelligence.quickInsights} />
				)}
				{activeTab === "executive-analysis" && (
					<ExecutiveAnalysisTab
						data={aiSalesIntelligence.executiveAnalysis}
						iconMap={iconMap}
					/>
				)}
				{activeTab === "ai-recommendations" && (
					<AIRecommendationsTab
						data={aiSalesIntelligence.aiRecommendations}
						colorMap={colorMap}
					/>
				)}
				{activeTab === "charts-tables" && (
					<ChartsTablesTab
						shipmentVolume={criticalInsights.shipmentVolume}
						insuredData={criticalInsights.insuredPackagesAndClaims}
						laneRiskMatrix={aiSalesIntelligence.laneRiskMatrix}
					/>
				)}
				{activeTab === "playbooks" && (
					<PlaybooksTab
						playbooks={aiSalesIntelligence.playbooks}
						talkingPoints={aiSalesIntelligence.talkingPoints}
						quickFacts={aiSalesIntelligence.quickFacts}
						iconMap={iconMap}
					/>
				)}
			</div>
		</div>
	);
};

// Quick Insights Tab Component
const QuickInsightsTab = ({ data }) => {
	return (
		<div className="space-y-6">
			{/* Wallet Share & Service Gaps */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
					<Target className="text-ups-teal" size={24} />
					Wallet-Share & Service Gaps
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{data.walletShareGaps.map((gap, index) => (
						<div
							key={index}
							className="p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-md transition-all"
						>
							<div className="flex items-start justify-between mb-2">
								<h4 className="font-semibold text-gray-900 flex-1">
									{gap.title}
								</h4>
								<span
									className={`text-xs px-2 py-1 rounded-full font-semibold ${
										gap.category === "cross-sell"
											? "bg-purple-100 text-purple-700"
											: "bg-blue-100 text-blue-700"
									}`}
								>
									{gap.category === "cross-sell" ? "Cross-Sell" : "Up-Sell"}
								</span>
							</div>
							<p className="text-sm text-gray-600 mb-3">{gap.description}</p>
							{gap.target && (
								<div className="flex items-center gap-2 text-sm">
									<span className="text-gray-500">Target:</span>
									<span className="font-bold text-ups-teal">{gap.target}</span>
								</div>
							)}
							{gap.action && (
								<div className="mt-2 pt-2 border-t border-gray-100">
									<p className="text-xs text-gray-700">
										<ArrowRight className="inline mr-1" size={14} />
										{gap.action}
									</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Urgent Actions - Improved Contrast */}
			<div className="relative overflow-hidden rounded-2xl bg-white border-2 border-orange-400 shadow-xl">
				<div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-orange-100 opacity-50" />
				<div className="relative p-6">
					<div className="flex items-center gap-3 mb-6">
						<div className="p-3 bg-orange-500 rounded-xl shadow-lg">
							<AlertTriangle className="text-white" size={24} />
						</div>
						<div className="flex-1">
							<h3 className="text-2xl font-bold text-gray-900">
								Urgent Actions
							</h3>
							<span className="inline-block mt-1 text-xs font-bold text-orange-700 bg-orange-200 px-3 py-1 rounded-full">
								⚡ ACTION REQUIRED
							</span>
						</div>
					</div>
					<div className="space-y-4">
						{data.urgentActions.map((action, index) => (
							<div
								key={index}
								className="relative p-5 bg-white rounded-xl border-l-4 border-orange-500 shadow-md hover:shadow-lg transition-all"
							>
								<div className="flex items-start justify-between mb-3">
									<h4 className="font-bold text-lg text-gray-900 flex-1">
										{action.title}
									</h4>
									<span
										className={`text-xs px-3 py-1.5 rounded-full font-bold shadow-sm ${
											action.priority === "high"
												? "bg-red-500 text-white"
												: "bg-yellow-400 text-gray-900"
										}`}
									>
										{action.priority === "high" ? "🔥 HIGH" : "⚠️ MEDIUM"}
									</span>
								</div>
								<p className="text-sm text-gray-700 mb-4 leading-relaxed">
									{action.description}
								</p>
								<div className="flex flex-wrap gap-4 text-sm bg-gray-50 p-3 rounded-lg">
									<div className="flex items-center gap-2">
										<span className="font-semibold text-gray-900">Goal:</span>
										<span className="text-gray-700">{action.goal}</span>
									</div>
									<div className="flex items-center gap-2">
										<span className="font-semibold text-gray-900">
											Timeline:
										</span>
										<span className="font-bold text-ups-teal">
											{action.timeline}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Week-over-Week Signals */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
					<TrendingUp className="text-ups-teal" size={24} />
					Week-Over-Week Trends
				</h3>
				<div className="space-y-3">
					{data.weekOverWeekSignals.map((signal, index) => (
						<div
							key={index}
							className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl"
						>
							<div className="flex items-start gap-3">
								<div className="p-2 bg-purple-100 rounded-lg">
									<TrendingUp className="text-purple-600" size={20} />
								</div>
								<div className="flex-1">
									<h4 className="font-semibold text-gray-900 mb-1">
										{signal.metric}
									</h4>
									<p className="text-sm text-gray-600 mb-2">{signal.trend}</p>
									<p className="text-xs text-gray-500 italic">
										💡 {signal.insight}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

QuickInsightsTab.propTypes = {
	data: PropTypes.object.isRequired,
};

// Executive Analysis Tab Component
const ExecutiveAnalysisTab = ({ data, iconMap }) => {
	return (
		<div className="space-y-6">
			{/* Executive Summary - Enhanced Design */}
			<div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border-2 border-indigo-200">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60" />
				<div className="relative p-6 md:p-8">
					<div className="flex items-center gap-3 mb-6">
						<div className="p-3 bg-indigo-500 rounded-xl shadow-lg">
							<FileText className="text-white" size={24} />
						</div>
						<h3 className="text-2xl font-bold text-gray-900">
							Executive Summary
						</h3>
					</div>
					<div className="prose prose-lg max-w-none">
						<p className="text-gray-800 leading-relaxed text-base md:text-lg">
							{data.summary}
						</p>
					</div>
				</div>
			</div>

			{/* Key Findings */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4">Key Findings</h3>
				<div className="space-y-3">
					{data.keyFindings.map((finding) => {
						const Icon = iconMap[finding.icon] || CheckCircle2;
						return (
							<div
								key={finding.id}
								className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
							>
								<div className="p-2 bg-ups-teal/10 rounded-lg flex-shrink-0">
									<Icon className="text-ups-teal" size={20} />
								</div>
								<div className="flex-1 min-w-0">
									<h4 className="font-semibold text-gray-900 mb-1">
										{finding.title}
									</h4>
									<p className="text-sm text-gray-600">{finding.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Opportunities vs Risks */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{/* Opportunities */}
				<div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
					<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
						<TrendingUp className="text-green-600" size={24} />
						Opportunities
					</h3>
					<ul className="space-y-3">
						{data.opportunities.map((opportunity, index) => (
							<li
								key={index}
								className="flex items-start gap-2 text-gray-700 text-sm"
							>
								<CheckCircle2
									className="text-green-600 flex-shrink-0 mt-0.5"
									size={18}
								/>
								<span>{opportunity}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Risks */}
				<div className="card bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
					<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
						<AlertTriangle className="text-red-600" size={24} />
						Risks
					</h3>
					<ul className="space-y-3">
						{data.risks.map((risk, index) => (
							<li
								key={index}
								className="flex items-start gap-2 text-gray-700 text-sm"
							>
								<AlertCircle
									className="text-red-600 flex-shrink-0 mt-0.5"
									size={18}
								/>
								<span>{risk}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			{/* Trend Commentary */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
					<BarChart3 className="text-ups-brown" size={24} />
					Trend Commentary
				</h3>
				<p className="text-gray-700 leading-relaxed">{data.trendCommentary}</p>
			</div>
		</div>
	);
};

ExecutiveAnalysisTab.propTypes = {
	data: PropTypes.object.isRequired,
	iconMap: PropTypes.object.isRequired,
};

// AI Recommendations Tab Component
const AIRecommendationsTab = ({ data, colorMap }) => {
	return (
		<div className="space-y-6">
			<div className="text-center mb-6">
				<h3 className="text-2xl font-bold text-gray-900 mb-2">
					7 AI-Powered Recommendations
				</h3>
				<p className="text-gray-600">
					Prioritized plays for cross-selling and up-selling
				</p>
			</div>

			<div className="space-y-6">
				{data.map((rec) => (
					<div
						key={rec.id}
						className={`card bg-gradient-to-br ${
							colorMap[rec.color] || colorMap.purple
						} border-2 hover:shadow-xl transition-all duration-300`}
					>
						<div className="flex items-start justify-between mb-4">
							<div className="flex-1">
								<div className="flex items-center gap-2 mb-2">
									<span className="text-xs font-bold px-3 py-1 bg-white/80 rounded-full text-gray-700">
										{rec.type}
									</span>
									<span className="text-xs font-bold text-gray-500">
										#{rec.id}
									</span>
								</div>
								<h4 className="text-lg font-bold text-gray-900 mb-2">
									{rec.title}
								</h4>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
							{rec.currentAdoption && (
								<div className="bg-white/50 p-3 rounded-lg">
									<p className="text-xs text-gray-600 mb-1">Current</p>
									<p className="text-xl font-bold text-gray-900">
										{rec.currentAdoption}
									</p>
								</div>
							)}
							{rec.suggested && (
								<div className="bg-white/50 p-3 rounded-lg">
									<p className="text-xs text-gray-600 mb-1">Suggested</p>
									<p className="text-xl font-bold text-ups-teal">
										{rec.suggested}
									</p>
								</div>
							)}
						</div>

						{rec.reasoning && (
							<p className="text-sm text-gray-700 mb-3">
								<span className="font-semibold">Reasoning: </span>
								{rec.reasoning}
							</p>
						)}

						{rec.scope && (
							<p className="text-sm text-gray-700 mb-3">
								<span className="font-semibold">Scope: </span>
								{rec.scope}
							</p>
						)}

						{rec.current && (
							<p className="text-sm text-gray-700 mb-3">
								<span className="font-semibold">Current State: </span>
								{rec.current}
							</p>
						)}

						{rec.lane && (
							<p className="text-sm text-gray-700 mb-3">
								<span className="font-semibold">Lane: </span>
								{rec.lane}
							</p>
						)}

						{rec.move && (
							<p className="text-sm text-gray-700 mb-3">
								<span className="font-semibold">Move: </span>
								{rec.move}
							</p>
						)}

						<div className="bg-white/70 p-4 rounded-lg mb-3">
							<div className="flex items-baseline gap-2 mb-1">
								<span className="text-2xl font-bold text-gray-900">
									{rec.impact}
								</span>
								<span className="text-sm text-gray-600">annual impact</span>
							</div>
							<p className="text-xs text-gray-600">{rec.impactDescription}</p>
						</div>

						<div className="pt-3 border-t border-gray-200">
							<p className="text-sm">
								<span className="font-semibold text-gray-700">
									Cross/Up-Sell:{" "}
								</span>
								<span className="text-ups-brown font-medium">
									{rec.crossSell}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

AIRecommendationsTab.propTypes = {
	data: PropTypes.array.isRequired,
	colorMap: PropTypes.object.isRequired,
};

// Charts & Tables Tab Component
const ChartsTablesTab = ({ shipmentVolume, insuredData, laneRiskMatrix }) => {
	return (
		<div className="space-y-6">
			{/* Shipment Volume Chart */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4">
					Shipment Volume by Quarter
				</h3>
				<p className="text-sm text-gray-600 mb-4">
					Service levels: Ground / 2-Day Air / Next Day Air
				</p>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={shipmentVolume}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="quarter" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="GND" fill="#3b82f6" name="Ground" />
						<Bar dataKey="2DA" fill="#10b981" name="2-Day Air" />
						<Bar dataKey="1DA" fill="#f59e0b" name="Next Day Air" />
					</BarChart>
				</ResponsiveContainer>
				<div className="mt-4 p-3 bg-blue-50 rounded-lg">
					<p className="text-sm text-gray-700">
						<span className="font-semibold">💡 Insight:</span> 2DA + 1DA mix
						expands in <span className="font-bold">Apr–Jun</span> (spring
						launches) and <span className="font-bold">Oct–Dec</span> (holiday) →
						air-gating SOP justifiable.
					</p>
				</div>
			</div>

			{/* Insured Packages & Claims Chart */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4">
					Insured Packages & Claims Trend
				</h3>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={insuredData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="month" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="insuredPackages"
							stroke="#8b5cf6"
							strokeWidth={3}
							name="Insured Packages"
						/>
						<Line
							type="monotone"
							dataKey="claims"
							stroke="#ef4444"
							strokeWidth={3}
							name="Claims"
						/>
					</LineChart>
				</ResponsiveContainer>
				<div className="mt-4 p-3 bg-purple-50 rounded-lg">
					<p className="text-sm text-gray-700">
						<span className="font-semibold">💡 Insight:</span> Claims slope
						outpaces insured growth → bundle Insurance + Delivery Defense™ ahead
						of Q4.
					</p>
				</div>
			</div>

			{/* Lane Risk Matrix Table */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4">
					Lane Risk & Cross-Sell Matrix
				</h3>
				<div className="overflow-x-auto">
					<table className="w-full text-sm">
						<thead>
							<tr className="bg-gray-100 border-b border-gray-200">
								<th className="px-4 py-3 text-left font-semibold">Lane</th>
								<th className="px-4 py-3 text-left font-semibold">Route</th>
								<th className="px-4 py-3 text-left font-semibold">Mode</th>
								<th className="px-4 py-3 text-left font-semibold">Volume</th>
								<th className="px-4 py-3 text-left font-semibold">Risk</th>
								<th className="px-4 py-3 text-left font-semibold">
									Best-Fit Offer
								</th>
							</tr>
						</thead>
						<tbody>
							{laneRiskMatrix.map((lane) => (
								<tr
									key={lane.lane}
									className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
								>
									<td className="px-4 py-3 font-bold text-gray-900">
										#{lane.lane}
									</td>
									<td className="px-4 py-3 text-gray-700">{lane.route}</td>
									<td className="px-4 py-3">
										<span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
											{lane.mode}
										</span>
									</td>
									<td className="px-4 py-3 font-semibold text-gray-900">
										{lane.volume}
									</td>
									<td className="px-4 py-3 text-gray-600">{lane.risk}</td>
									<td className="px-4 py-3 font-medium text-ups-teal">
										{lane.bestFitOffer}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

ChartsTablesTab.propTypes = {
	shipmentVolume: PropTypes.array.isRequired,
	insuredData: PropTypes.array.isRequired,
	laneRiskMatrix: PropTypes.array.isRequired,
};

// Playbooks Tab Component
const PlaybooksTab = ({ playbooks, talkingPoints, quickFacts, iconMap }) => {
	return (
		<div className="space-y-6">
			{/* Playbooks */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{playbooks.map((playbook) => {
					const Icon = iconMap[playbook.icon] || BookOpen;
					return (
						<div
							key={playbook.id}
							className="card bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 hover:shadow-xl transition-all"
						>
							<div className="flex items-start gap-3 mb-4">
								<div className="p-3 bg-indigo-100 rounded-xl">
									<Icon className="text-indigo-600" size={24} />
								</div>
								<div className="flex-1">
									<h4 className="text-lg font-bold text-gray-900 mb-1">
										{playbook.name}
									</h4>
									<p className="text-xs text-gray-600">{playbook.audience}</p>
								</div>
							</div>

							<div className="space-y-3 mb-4">
								<div>
									<span className="text-xs font-semibold text-gray-500 uppercase">
										Offer
									</span>
									<p className="text-sm text-gray-800 mt-1">{playbook.offer}</p>
								</div>

								<div>
									<span className="text-xs font-semibold text-gray-500 uppercase">
										KPIs
									</span>
									<ul className="mt-1 space-y-1">
										{playbook.kpis.map((kpi, index) => (
											<li
												key={index}
												className="text-sm text-gray-700 flex items-center gap-2"
											>
												<CheckCircle2 className="text-green-600" size={14} />
												{kpi}
											</li>
										))}
									</ul>
								</div>

								<div>
									<span className="text-xs font-semibold text-gray-500 uppercase">
										Timeline
									</span>
									<p className="text-sm text-gray-800 mt-1">
										{playbook.timeline}
									</p>
								</div>

								<div>
									<span className="text-xs font-semibold text-gray-500 uppercase">
										Proof
									</span>
									<p className="text-sm text-gray-800 mt-1">{playbook.proof}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			{/* Executive Talking Points */}
			<div className="card bg-gradient-to-br from-ups-brown/5 to-ups-gold/10 border-2 border-ups-gold">
				<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
					💬 Executive Talking Points
				</h3>
				<div className="space-y-3">
					{talkingPoints.map((point, index) => (
						<div
							key={index}
							className="p-4 bg-white rounded-lg border-l-4 border-ups-teal"
						>
							<p className="text-gray-700 text-sm leading-relaxed">{point}</p>
						</div>
					))}
				</div>
			</div>

			{/* Quick Facts */}
			<div className="card">
				<h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
					📋 Quick Facts
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="p-4 bg-blue-50 rounded-xl">
						<h4 className="font-semibold text-gray-900 mb-2 text-sm">
							Shipping & Returns
						</h4>
						<p className="text-xs text-gray-700">{quickFacts.shipping}</p>
					</div>
					<div className="p-4 bg-green-50 rounded-xl">
						<h4 className="font-semibold text-gray-900 mb-2 text-sm">
							Store Footprint
						</h4>
						<p className="text-xs text-gray-700">{quickFacts.stores}</p>
					</div>
					<div className="p-4 bg-orange-50 rounded-xl">
						<h4 className="font-semibold text-gray-900 mb-2 text-sm">
							Network Updates
						</h4>
						<p className="text-xs text-gray-700">{quickFacts.network}</p>
					</div>
					<div className="p-4 bg-purple-50 rounded-xl">
						<h4 className="font-semibold text-gray-900 mb-2 text-sm">
							Launch Calendar
						</h4>
						<p className="text-xs text-gray-700">{quickFacts.launches}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

PlaybooksTab.propTypes = {
	playbooks: PropTypes.array.isRequired,
	talkingPoints: PropTypes.array.isRequired,
	quickFacts: PropTypes.object.isRequired,
	iconMap: PropTypes.object.isRequired,
};

export default AISalesIntelligencePage;
