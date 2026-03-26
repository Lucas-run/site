import Navbar from "./components/layout/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Footer } from "./components/layout/Footer";
import { useAnalytics } from "./hooks/useAnalytics";

function AnalyticsWrapper() {
  useAnalytics();
  return null;
}

function App() {
  return (
    <>
      <Router>
        <AnalyticsWrapper />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
