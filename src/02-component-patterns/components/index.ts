import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from '../interfaces/interfaces';


// export { ProductCard } from "./ProductCard";

import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductsButtons } from "./ProductButtons";

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";
export { ProductsButtons } from "./ProductButtons";


export const ProductCard = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductsButtons,
  
} )

export default ProductCard;