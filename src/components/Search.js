import React, { useState } from "react";

function Search({
  onHandleFilter,
  search,
  filterAlphabetically,
  alphabetically,
}) {
  const [currentSearch, setCurrentSearch] = useState("");

  //sending state to a parent component when form is submitted
  function handleSubmit(e) {
    e.preventDefault();
    onHandleFilter(currentSearch);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
      <button
        className={alphabetically === true ? "alphabet" : "not"}
        onClick={filterAlphabetically}
      >
        A-Z
      </button>
    </form>
  );
}

export default Search;
