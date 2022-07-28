import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const ProductProvider = ProductContext.Provider;

export interface Props {
	product: Product;
	className?: string;
	style?: CSSProperties;
	onChange?: (value: number, product: Product) => void;
	value?: number;
	// style?: {
	// 	[key: string]: string;
	// };
	children?: ReactElement | ReactElement[];
}

export const ProductCard = ({
	product,
	className,
	style,
	onChange = () => {},
	value,
	children,
}: Props) => {
	const { counter, increaseBy } = useProduct(onChange, value);

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
