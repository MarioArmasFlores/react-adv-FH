import React from "react";
import {
  ProductCard,
  ProductImage,
  ProductsButtons,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug -  Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" img={product.img} />
          <ProductCard.Title className="text-bold" title={""} />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" img={product.img} style={{ boxShadow:'10px 10px 10px rgba(0,0,0,0.2)' }} />
          <ProductTitle
            title=""
            className="text-white text-bold"
            activeBtnClass="active"
          />
          <ProductsButtons
            className="custom-buttons"
            activeBtnClass="active"
          />
        </ProductCard>

        <ProductCard product={product} style={{
          backgroundColor: '#70D1F8'
        }}>
          <ProductImage style={{ boxShadow:'10px 10px 10px rgba(0,0,0,0.2)' }}/>
          <ProductTitle style={{ fontWeight:'bold' }} />
          <ProductsButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard>
      </div>
    </div>
  );
};
