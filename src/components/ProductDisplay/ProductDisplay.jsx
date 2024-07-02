import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt="product-img"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_dull_icon} alt="star-dull-icon" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-price-description">
          Embrace the ultimate in luxurious comfort with the CozyCashmere
          Classic Sweater. Crafted from 100% pure cashmere, this sweater offers
          unparalleled softness and warmth, making it the perfect addition to
          your winter wardrobe.
        </div>
        <div className="product-display-right-size">
          <h1>Select size</h1>
          <div className="product-display-right-sizes">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="product-display-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags :</span> Modern, Latest{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
