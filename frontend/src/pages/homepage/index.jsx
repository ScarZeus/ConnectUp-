import React from "react";
import Navbar from "../../components/nav-bar";
import './index.css';

const HomePage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <h1>Welcome to the Home Page</h1>
        <p>Scroll content here. Navbar will stay at bottom on mobile.</p>
      </main>
    </div>
  );
};

export default HomePage;
