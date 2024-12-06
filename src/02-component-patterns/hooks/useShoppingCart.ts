import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShopping) => {
      
      console.log({ count})

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

  return { shoppingCart, onProductCountChange };
};
