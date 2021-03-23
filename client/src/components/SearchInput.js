import React, { useState } from "react";

function SearchInput(props) {
  const [value, setValue] = useState("");

  return (
    <div className="searchInput">
      <input
        onChange={(e) => {
          setValue(e.target.value);
          props.searchSuggestions(e.target.value);
        }}
        placeholder="Search a ticket"
      />
      <button
        onClick={() => {
          props.search(value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
