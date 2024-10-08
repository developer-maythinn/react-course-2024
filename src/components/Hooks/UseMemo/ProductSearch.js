import React, { useState, useMemo } from 'react';

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Smartphone' },
  { id: 3, name: 'Tablet' },
  { id: 4, name: 'Smartwatch' },
  { id: 5, name: 'Headphones' },
  // Imagine this list contains hundreds or thousands of products
];

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  // Simulate a more expensive operation: filtering and sorting the list of products
  const filteredProducts = useMemo(() => {
    console.log('Filtering and sorting products...');
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered.sort((a, b) => (sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
  }, [searchTerm, sortAsc]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={() => setSortAsc(!sortAsc)}>
        Sort {sortAsc ? 'Descending' : 'Ascending'}
      </button>

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;
