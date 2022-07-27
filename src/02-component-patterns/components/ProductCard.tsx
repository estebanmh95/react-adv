import { createContext } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Props } from "../interfaces/interfaces";
// import { ProductButtons } from "./ProductButtons";
// import { ProductTitle } from "./ProductTitle";
// import { ProductImage } from "./ProductImage";

const INITIAL_VALUE = 0;

export const ProductContext = createContext({} as ProductContextProps);
const ProductProvider = ProductContext.Provider;

export const ProductCard = ({ product, children }: Props) => {
	const { counter, increaseBy } = useProduct(INITIAL_VALUE);

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
