import React, { useState } from "react";
import { URL } from "./App";

function ListingCard({ listing, onDelete }) {
  const [favorite, setFavorite] = useState(false);
  const { description, image, location, id } = listing;

  //marking item as favorite or the opposite
  function handleClick() {
    setFavorite(!favorite);
  }

  //deleting item from db, sending result to a parent component
  function handleDeleteClick() {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDelete(listing));
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price"></span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
