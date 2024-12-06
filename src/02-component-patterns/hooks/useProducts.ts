import { useEffect, useRef, useState } from "react";
import { onChnageArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChnageArgs ) => void;
  value?: number;
}

export const useProducts = ( {onChange, product, value = 0}: useProductArgs ) => {

  

    

    const [counter, setCounter] = useState(value);
    const increaseBy = (value: number) => {

    
  
      const newValue = Math.max( counter + value, 0 )
     

      setCounter(newValue);
      
      onChange && onChange({count: newValue, product});
    }

    useEffect(() => {
      setCounter( value );
    }, [ value ])




 return { counter, increaseBy }   
}