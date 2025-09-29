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
    if (searchQuery.trim() === "") {
      setSearchResults([]);
    } else {
      setSearchResults([`Result for "${searchQuery}"`]);
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
            <div>
              {chatRooms.map((room, index) => (
                <ChatRoomTile
                  key={index}
                  roomName={room.roomName}
                  lastMessage={room.lastMessage}
                  timestamp={room.timestamp}
                  unreadCount={room.unreadCount}
                  onClick={() => alert(`Open ${room.roomName} chat`)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
