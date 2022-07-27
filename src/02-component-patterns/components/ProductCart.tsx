import { createContext } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Props } from "../interfaces/interfaces";
// import { ProductButtons } from "./ProductButtons";
// import { ProductTitle } from "./ProductTitle";
// import { ProductImage } from "./ProductImage";

export const ProductContext = createContext({} as ProductContextProps);
const ProductProvider = ProductContext.Provider;

export const ProductCart = ({
	product,
	counter,
	increaseBy,
	children,
}: Props) => {
	return (
		<ProductProvider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={styles.productCard}>{children}</div>
		</ProductProvider>
	);
};

// ProductCart.Title = ProductTitle;
// ProductCart.Image = ProductImage;
// ProductCart.Buttons = ProductButtons;
