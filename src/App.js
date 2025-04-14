import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import TestFlowPage from "./components/pages/TestFlowPage/TestFlowPage";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TestFlowPage />} />
          <Route path="/test" element={<TestFlowPage />} />
          <Route path="/result" element={<TestFlowPage />} />
          <Route path="/history" element={<TestFlowPage />} />
          <Route path="/complaints" element={<TestFlowPage />} />
          <Route path="/chat/:id" element={<TestFlowPage />} />
          <Route path="/recommendations" element={<TestFlowPage />} />
        </Routes>
      </BrowserRouter>
  );
}
