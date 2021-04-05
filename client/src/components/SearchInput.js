import React, { useState } from "react";

function SearchInput(props) {
  const [value, setValue] = useState("");

  return (
    <div id="searchArea">
      <input
        id="searchInput"
        onChange={(e) => {
          setValue(e.target.value);
          props.search(e.target.value);
        }}
        placeholder="Search a ticket"
      />
    </div>
  );
}

export default SearchInput;
