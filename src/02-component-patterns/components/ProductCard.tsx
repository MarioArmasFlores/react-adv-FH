import { createContext, ReactElement } from "react";
import { ProductContextProps, Product, onChnageArgs } from '../interfaces/interfaces';
import styles from "../styles/styles.module.css";

import { useProducts } from "../hooks/useProducts";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  activeBtnClass?: string;
  style?: React.CSSProperties;
  onChange?: ( args: onChnageArgs ) => void;
  value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value  }: Props) => {
  const { counter, increaseBy } = useProducts( { onChange, product, value } );
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        value
      }}
    >
      <div style={ style } className={`${ styles.productCard } ${ className }`}>
        {children}
      </div>
    </Provider>
  );
};
 