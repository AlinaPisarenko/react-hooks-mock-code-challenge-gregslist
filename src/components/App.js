import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewItemForm from "./NewItemForm";

const URL = "http://localhost:6001/listings";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [alphabetically, setAlphabetically] = useState(false);

  //getting data from db.json
  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((data) => setListings(data));
  }, []);

  //deleting item on the DOM
  function handleItemDelete(listing) {
    setListings(listings.filter((item) => item.id !== listing.id));
  }

  //updating state value to search by name
  function handleFilter(currentSearch) {
    setSearch(currentSearch);
  }

  //updating the state to filter alphabetically
  function filterAlphabetically() {
    setAlphabetically(!alphabetically);
  }

  //adding new item on the DOM
  function onAddItem(newItem) {
    setListings([...listings, newItem]);
  }

  //updating list of items for a filter by name
  const updatedList = listings.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  //displaying items alphabetically
  if (alphabetically) {
    updatedList.sort((a, b) => {
      return a.location.localeCompare(b.location);
    });
  }

  return (
    <div className="app">
      <Header
        search={search}
        onHandleFilter={handleFilter}
        filterAlphabetically={filterAlphabetically}
        alphabetically={alphabetically}
      />
      <NewItemForm onAddItem={onAddItem} />
      <ListingsContainer listings={updatedList} onDelete={handleItemDelete} />
    </div>
  );
}

export default App;
export { URL };
