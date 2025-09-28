import React from "react";
import './index.css';
import Navbar from "../../components/nav-bar";

const SearchPage = () => {
   return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <h1>Search page</h1>
        <p>Scroll content here. Navbar will stay at bottom on mobile.</p>
      </main>
    </div>
  );
};

export default SearchPage;
