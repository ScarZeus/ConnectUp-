import React from "react";
import "./index.css";
import Navbar from "../../components/nav-bar";
import SearchBar from "../../components/search-bar";
import ChatRoomTile from "../../components/chat_room_tile";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const chatRooms = [
    { roomName: "General", lastMessage: "Hey everyone, welcome to the group!", timestamp: "2025-10-01 08:00 AM", unreadCount: 2 },
    { roomName: "Project Alpha", lastMessage: "The client meeting is scheduled for tomorrow.", timestamp: "2025-10-01 07:45 AM", unreadCount: 5 },
    { roomName: "Random", lastMessage: "Did anyone watch the new movie last night?", timestamp: "2025-09-30 10:30 PM", unreadCount: 0 },
    { roomName: "Team Dev", lastMessage: "Code review completed, please check your PRs.", timestamp: "2025-10-01 06:15 AM", unreadCount: 3 },
    { roomName: "HR Announcements", lastMessage: "Reminder: Submit your leave requests before Friday.", timestamp: "2025-09-30 05:00 PM", unreadCount: 1 },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setSearchResults([]);
    } else {
      const filtered = chatRooms.filter(room =>
        room.roomName.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filtered);
    }
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="page-content">
        <SearchBar
          value={searchQuery}
          onChange={handleInputChange}
        />

        <div className="search-results">
          <h2>Search Results</h2>
          {searchQuery.trim() === "" ? (
            <p>Type to search chat rooms.</p>
          ) : searchResults.length === 0 ? (
            <p>No results found.</p>
          ) : (
            searchResults.map((room, index) => (
              <ChatRoomTile
                key={index}
                roomName={room.roomName}
                lastMessage={room.lastMessage}
                timestamp={room.timestamp}
                unreadCount={room.unreadCount}
                onClick={() => alert(`Open ${room.roomName} chat`)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
