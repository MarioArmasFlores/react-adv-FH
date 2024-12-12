import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductsButtons } from "./ProductButtons";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductsButtons } from "./ProductButtons";


export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductsButtons,
    
    
  
} )

export default ProductCard;