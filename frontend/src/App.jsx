import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // <-- import Navigate
import HomePage from "./pages/homepage";

const App = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path="*" element={<Navigate to="/home" replace />} />
  </Routes>
);

export default App;
