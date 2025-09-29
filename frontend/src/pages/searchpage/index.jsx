import React from "react";
import "./index.css";
import Navbar from "../../components/nav-bar";
import SearchBar from "../../components/search-bar";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // TODO: hook up to real API or logic
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      setSearchResults([`Result for "${searchQuery}"`]); // dummy result
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <SearchBar
          value={searchQuery}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />

        <div className="search-results">
          <h2>Search Results</h2>
          {searchResults.length === 0 ? (
            <p>No results found.</p>
          ) : (
            <ul>
              {searchResults.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
