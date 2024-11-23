import React, { useState } from "react";
import {
  ProductCard,
  ProductImage,
  ProductsButtons,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "1",
  title: "Coffee Mug -  Card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffee Mug 2-  Card",
  img: "./coffeemug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  

  const onProductCountChange = ({count, product}: {count: number, product: Product;

  }) => {
      setShoppingCart((oldShopping) => {
        if ( count === 0) {
          const { [product.id]: toDelete, ...rest } = oldShopping;
          console.log({ toDelete })

          return rest;
        }
        return { 
          ...oldShopping,
          [product.id]: { ...product, count}
        }
      });

     
  };
  return (
    <div>
      
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((sigleProduct) => (
          <ProductCard
            product={sigleProduct}
            className="bg-dark text-white"
            key={sigleProduct.id}
            onChange={onProductCountChange}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />
            <ProductTitle className="text-white text-bold" />
            <ProductsButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
          {
            Object.entries( shoppingCart ).map( ( [key, product] ) => (
                <ProductCard
                key={key}
                product={product}
                className="bg-dark text-white"
                style={{ width: "100px" }}
              >
                <ProductImage
                  className="custom-image"
                  style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
                />
                <ProductsButtons className="custom-buttons" style={{ display: "flex", justifyContent: "center"}} />
              </ProductCard>
            ))
          }
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

