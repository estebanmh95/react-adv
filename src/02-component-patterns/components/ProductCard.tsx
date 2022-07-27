import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";

const INITIAL_VALUE = 0;

export const ProductContext = createContext({} as ProductContextProps);
const ProductProvider = ProductContext.Provider;

export interface Props {
	product: Product;
	className?: string;
	style?: CSSProperties;
	// style?: {
	// 	[key: string]: string;
	// };
	children?: ReactElement | ReactElement[];
}

export const ProductCard = ({ product, className, style, children }: Props) => {
	const { counter, increaseBy } = useProduct(INITIAL_VALUE);

	return (
		<ProductProvider
			value={{
				counter,
				increaseBy,
				product,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</ProductProvider>
	);
};
