import React from "react";
import "./Descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          An e-commerce website is a digital platform that allows businesses to
          sell products and services online, providing a convenient and
          accessible shopping experience for customers. These websites feature
          user-friendly interfaces, secure payment gateways, and advanced search
          functionalities, making it easy for users to browse, select, and
          purchase items.
        </p>
        <p>
          E-commerce websites, or online stores, are digital marketplaces where
          businesses can sell products and services. They function similarly to
          physical stores, with features like product listings, shopping carts,
          secure payment systems, and order tracking. Building an e-commerce
          website is easier than ever with platforms like Shopify and Wix, and a
          well-designed site is crucial for a smooth customer experience. These
          online stores offer businesses a wider audience, lower costs, and the
          flexibility of being open 24/7.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
