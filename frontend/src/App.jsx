import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // <-- import Navigate
import HomePage from "./pages/homepage";
import SearchPage from "./pages/searchpage";

const App = () => (
  <Routes>
    <Route path="/home" element={<HomePage />} />
    <Route path = "/search" element = { <SearchPage/>} />
    <Route path = "/profile" element = { <SearchPage/>} />
    <Route path="*" element={<Navigate to="/home" replace />} />
  </Routes>
);

export default App;
