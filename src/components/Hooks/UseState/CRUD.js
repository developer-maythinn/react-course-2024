import React, { useState } from "react";

function CRUD() {
  // ['item1', 'item2', "item3"]
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
    const updateItems = items.map((item, i) => (i === index ? editText : item));
    console.log(updateItems);
    setItems(updateItems);
    setEditIndex(null);
    setEditText("");
  };
  const deleteItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };
  return (
    <>
      <h1>CRUD(Create, Read, Update, Delete)</h1>
      {/* create item */}
      <input
        value={newItem}
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <br />

      {/* read items */}
      {items?.length > 0 &&
        items.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
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
      {console.log(items)}
    </>
  );
}

export default CRUD;
