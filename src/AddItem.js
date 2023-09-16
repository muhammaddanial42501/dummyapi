// AddItem.js
import React, { useState } from "react";

function AddItem({ onAddItem }) {
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    id: null,
    title: "",
    price: 0,
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAddItem = () => {
    onAddItem(newItem);
    // Reset the form
    setNewItem({
      id: null,
      title: "",
      price: 0,
      category: "",
      image: "",
    });
    // Hide the form after adding
    setShowForm(false);
  };

  return (
    <div>
      <h2>Add New Item</h2>
      {showForm ? (
        <div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newItem.title}
            onChange={handleInputChange}
          />
          {/* Add other input fields for price, category, and image */}
          <button onClick={handleAddItem}>Add Item</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
          {/* <Link to="/">View Items</Link> Link to the "View Items" page */}
        </div>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Item</button>
      )}
    </div>
  );
}

export default AddItem;
