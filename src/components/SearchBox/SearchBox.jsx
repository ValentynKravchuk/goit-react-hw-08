import React from "react";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
