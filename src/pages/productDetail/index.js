import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

function ProductDetail() {
  const { id } = useParams();
  const { productDetails, setProductDetails } = useContext(ShoppingCartContext);
  const [selectedImage, setSelectedImage] = useState(null);

  async function fetchProductDetail() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    console.log(result);

    if (result) {
      setProductDetails(result);
      setSelectedImage(result.thumbnail);
    }
  }

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);
  console.log("productDetails", productDetails?.images);
  return (
    <section>
      <img src={selectedImage} alt="" />
      <div>
        {productDetails?.images?.length > 0
          ? productDetails?.images.map((img, index) => {
              return (
                <React.Fragment key={index}>
                  <img
                    src={img}
                    onClick={() => handleImageClick(img)}
                    style={{ width: "100px" }}
                  />
                </React.Fragment>
              );
            })
          : null}
      </div>
    </section>
  );
}

export default ProductDetail;
