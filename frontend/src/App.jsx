import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import SearchPage from "./features/search/SearchPage";
import DashboardLayout from "./features/dashboard/DashboardLayout";
import HomePage from "./features/home/HomePage";
import SupplyChainPage from "./features/supply-chain/SupplyChainPage";
import CriticalInsightsPage from "./features/critical-insights/CriticalInsightsPage";
import PeoplePage from "./features/people/PeoplePage";
import AISalesIntelligencePage from "./features/ai-sales-intelligence/AISalesIntelligencePage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SearchPage />} />
				<Route path="/dashboard/:companyName" element={<DashboardLayout />}>
					<Route index element={<Navigate to="home" replace />} />
					<Route path="home" element={<HomePage />} />
					<Route path="supply-chain" element={<SupplyChainPage />} />
					<Route path="critical-insights" element={<CriticalInsightsPage />} />
					<Route path="people" element={<PeoplePage />} />
					<Route
						path="ai-sales-intelligence"
						element={<AISalesIntelligencePage />}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</Router>
	);
}

export default App;
