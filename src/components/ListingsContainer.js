import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  //mapping through all the items and sending each of them to a child component
  const eachListing = listings.map((item) => (
    <ListingCard key={item.id} listing={item} onDelete={onDelete} />
  ));

  return (
    <main>
      <ul className="cards">{eachListing}</ul>
    </main>
  );
}

export default ListingsContainer;
