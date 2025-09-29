import React from "react";
import './index.css';
import Navbar from "../../components/nav-bar";
import SearchBar from "../../components/search-bar";

const SearchPage = () => {
   return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <SearchBar 
          value="" 
          onChange={() => {}} 
          onSearch={() => {}} 
        />
        <div className="search-results">
          <h2>Search Results</h2>
          <p>No results found.</p>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
