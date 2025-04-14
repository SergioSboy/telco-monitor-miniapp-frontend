import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import TestFlowPage from "./components/pages/TestFlowPage/TestFlowPage";
import TestHistoryPage from "./components/pages/TestHistoryPage/TestHistoryPage";
import ComplaintsPage from "./components/pages/ComplaintsPage/ComplaintsPage";
import RecommendationsPage from "./components/pages/RecommendationsPage/RecommendationsPage";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestFlowPage />} />
          <Route path="/history" element={<TestHistoryPage />} />
          <Route path="/complaints" element={<ComplaintsPage />} />
          <Route path="/chat/:id" element={<TestFlowPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
        </Routes>
      </BrowserRouter>
  );
}
