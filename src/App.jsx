import HomePage from "./pages/home/HomePage";
import Features from "./components/Features";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlowGuide from "./components/FlowGuide";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features/:id" element={<Features />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/features/:id/:flowId" element={<FlowGuide />} />
      </Routes>
    </Router>
  );
}
