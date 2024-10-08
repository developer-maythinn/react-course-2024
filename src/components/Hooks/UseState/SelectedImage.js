import React, { useState } from "react";

const ProductDetail = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-detail">
      {/* Big Image */}
      <div className="big-image">
        <img src={selectedImage} alt="Selected product" />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Product thumbnail ${index}`} />
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .product-detail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .big-image img {
          width: 500px;
          height: auto;
          object-fit: contain;
        }

        .thumbnails {
          display: flex;
          margin-top: 20px;
        }

        .thumbnail {
          margin: 0 10px;
          cursor: pointer;
          border: 2px solid transparent;
        }

        .thumbnail img {
          width: 100px;
          height: auto;
        }

        .thumbnail:hover {
          border: 2px solid #000;
        }
      `}</style>
    </div>
  );
};

// Usage example with an array of images
const images = [
  "https://via.placeholder.com/500x500?text=Image+1",
  "https://via.placeholder.com/500x500?text=Image+2",
  "https://via.placeholder.com/500x500?text=Image+3",
  "https://via.placeholder.com/500x500?text=Image+4",
];

const SelectedImage = () => {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <ProductDetail images={images} />
    </div>
  );
};

export default SelectedImage;
