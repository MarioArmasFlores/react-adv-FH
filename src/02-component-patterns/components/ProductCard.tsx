import { createContext, ReactElement } from "react";
import { ProductContextProps, Product, onChnageArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProducts";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  activeBtnClass?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChnageArgs ) => void;
  value?: number;
  initialValues: InitialValues;

  
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProducts( { onChange, product, value, initialValues } );
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        value,
        maxCount,      
      }}
    >
      <div style={ style } className={`${ styles.productCard } ${ className }`}>
        {
        children({
          count:counter,
          isMaxCountReached,
          maxCount: initialValues.maxCount,
          product,
          
          increaseBy,
          reset
        })
        }
      </div>
    </Provider>
  );
};
 