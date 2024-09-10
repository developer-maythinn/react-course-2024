// create context
// state to context
// wrap context in root Component
// consume context using useContext

import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);

  async function fetchProducts() {
    const apiResponse = await fetch("https://dummyjson.com/products");
    const result = await apiResponse.json();

    if (result?.products) {
      setProducts(result?.products);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        setProducts,
        loading,
        productDetails,
        setProductDetails,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;
