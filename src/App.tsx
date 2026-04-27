import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { useAnalytics } from "./hooks/useAnalytics";
import { MarketingAutomations } from "./pages/MarketingAutomations";
import { MainLayout } from "./components/layout/MainLayout";
import { PackMarketingPage } from "./pages/PackMarketingPage";
import { ArticleView } from "./pages/ArticleView";
import { Projects } from "./pages/Projects";
import { ProjectView } from "./pages/ProjectView";

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
            <Route path="/blog/:slug" element={<ArticleView />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectView />} />
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
