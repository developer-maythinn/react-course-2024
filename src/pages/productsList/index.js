import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const { products, loading } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  
  function handleViewDetail(currentId) {
    navigate(`/products/${currentId}`);
  }
  if (loading) {
    return <h1>Loading... Please wait</h1>;
  }
  return (
    <section className="products-container">
      {products?.length > 0 &&
        products.map((product, index) => {
          return index < 20 ? (
            <React.Fragment key={index}>
              <div className="item-wrapper">
                <img src={product?.thumbnail} alt="" />
                <h3>{product?.title}</h3>
                <p className="price">${product?.price}</p>
                <button onClick={() => handleViewDetail(product?.id)}>
                  View Detail
                </button>
              </div>
            </React.Fragment>
          ) : null;
        })}
    </section>
  );
}

export default ProductsList;
