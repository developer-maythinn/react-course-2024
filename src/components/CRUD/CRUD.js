import React, { useState } from "react";

function CRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const updateItem = (index) => {
    const updateItem =
      items?.length > 0 &&
      items.map((item, i) => (i === index ? editText : item));
    setItems(updateItem);
    setEditIndex(null);
    setEditText("");
  };
  const deleteItem = (index) => {
    setItems(items.filter((item, i) => index !== i));
  };
  return (
    <>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      {items?.length > 0 &&
        items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button onClick={() => updateItem(index)}>Update</button>
                </>
              ) : (
                <>
                  <p>
                    {item}
                    <button onClick={() => setEditIndex(index)}>Edit</button>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                  </p>
                </>
              )}
            </React.Fragment>
          );
        })}
      <p></p>
    </>
  );
}

export default CRUD;
