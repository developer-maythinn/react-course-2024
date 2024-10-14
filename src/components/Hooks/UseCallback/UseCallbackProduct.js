import React, { useState, useCallback } from "react";

// Wrap ProductFilter with React.memo to prevent unnecessary re-renders
const ProductFilter = React.memo(({ onFilter }) => {
  console.log("ProductFilter rendered WITH useCallback"); // check for usecallback and without usecallback

  return (
    <div>
      <h2>Filter Products</h2>
      <button onClick={() => onFilter("Electronics")}>Electronics</button>
      <button onClick={() => onFilter("Clothing")}>Clothing</button>
      <button onClick={() => onFilter("Books")}>Books</button>
    </div>
  );
});

const ProductApp = () => {
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "T-Shirt", category: "Clothing" },
    { id: 3, name: "Book", category: "Books" },
  ]);

  // Use useCallback to prevent function recreation on every render
  const filterProducts = useCallback((category) => {
    setCategory(category);
    console.log(`Filtering products by category: ${category}`);
  }, []);

  console.log("ProductApp rendered WITH useCallback");

  return (
    <div>
      <h1>Product List</h1>
      <ProductFilter onFilter={filterProducts} />
      <ul>
        {products
          .filter((product) => category === "" || product.category === category)
          .map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default ProductApp;
