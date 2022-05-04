import React, { useState } from "react";
import { URL } from "./App";

function NewItemForm({ onAddItem }) {
  //creating new state for the input
  const [newItem, setNewItem] = useState({
    description: "",
    image: "",
    location: "",
  });

  //setting the state to a value of input
  function handleChange(e) {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  }

  //creating new object, fetching to send it to the db
  function handleSubmit(e) {
    e.preventDefault();
    const newListing = {
      description: newItem.description,
      image: newItem.image,
      location: newItem.location,
    };

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((r) => r.json())
      .then((data) => onAddItem(data));

    //resetting the form
    setNewItem({
      description: "",
      image: "",
      location: "",
    });
  }

  return (
    <div className="new-item-bar">
      <form className="searchbar" onSubmit={handleSubmit}>
        <p>Add listing: </p>
        <input
          type="text"
          id="search"
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="description"
        />
        <input
          type="text"
          id="search"
          name="image"
          value={newItem.image}
          onChange={handleChange}
          placeholder="image"
        />
        <input
          type="text"
          id="search"
          name="location"
          value={newItem.location}
          onChange={handleChange}
          placeholder="location"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NewItemForm;
