import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { useAnalytics } from "./hooks/useAnalytics";
import { MarketingAutomations } from "./pages/MarketingAutomations";
import { MainLayout } from "./components/layout/MainLayout";
import { PackMarketingPage } from "./pages/PackMarketingPage";

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}

function App() {
  return (
    <>
      <Router>
        <AnalyticsWrapper />
        <Routes>
          {/* Site Institucional */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/marketing-automations"
              element={<MarketingAutomations />}
            />
          </Route>

          {/* Landing Pages */}
          <Route path="/pack-marketing" element={<PackMarketingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
