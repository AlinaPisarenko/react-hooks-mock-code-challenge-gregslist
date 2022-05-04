import React from "react";
import Search from "./Search";

function Header({
  onHandleFilter,
  search,
  filterAlphabetically,
  alphabetically,
}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        onHandleFilter={onHandleFilter}
        search={search}
        filterAlphabetically={filterAlphabetically}
        alphabetically={alphabetically}
      />
    </header>
  );
}

export default Header;
