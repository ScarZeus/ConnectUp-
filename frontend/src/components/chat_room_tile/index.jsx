import React from "react";
import "./index.css";

const ChatRoomTile = ({ roomName, lastMessage, timestamp, unreadCount, onClick }) => {
  return (
    <div className="chat-room-tile" onClick={onClick}>
      <div className="chat-room-left">
        <div className="room-avatar">{roomName.charAt(0)}</div>
      </div>
      <div className="chat-room-middle">
        <div className="room-name">{roomName}</div>
        {lastMessage && <div className="last-message">{lastMessage}</div>}
      </div>
      <div className="chat-room-right">
        {timestamp && <div className="timestamp">{timestamp}</div>}
        {unreadCount > 0 && <div className="unread-count">{unreadCount}</div>}
      </div>
    </div>
  );
};

export default ChatRoomTile;
