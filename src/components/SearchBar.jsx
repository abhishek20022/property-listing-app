import React from "react";

const SearchBar = ({ value, onChange, placeholder = "Search by city, title..." }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
