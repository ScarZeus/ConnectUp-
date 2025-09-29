import React from "react";
import './index.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, onSearch }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={value}
                onChange={onChange}
            />
            <button className="search-button" onClick={onSearch}><FaSearch size={20}/></button>
        </div>
    );
};

export default SearchBar;