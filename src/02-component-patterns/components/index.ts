import { ProductCard as ProductCartHOC } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
import { ProductCartHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCartHOCProps = Object.assign(ProductCartHOC, {
	Title: ProductTitle,
	Image: ProductImage,
	Buttons: ProductButtons,
});
