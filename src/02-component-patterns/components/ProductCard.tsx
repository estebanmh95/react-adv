import { createContext, CSSProperties, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
	InitialValues,
	Product,
	ProductCardHandlers,
	ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const ProductProvider = ProductContext.Provider;

export interface Props {
	product: Product;
	className?: string;
	style?: CSSProperties;
	onChange?: (value: number, product: Product) => void;
	value?: number;
	initialValues?: InitialValues;
	// style?: {
	// 	[key: string]: string;
	// };
	// children?: ReactElement | ReactElement[];
	children?: (args: ProductCardHandlers) => JSX.Element;
}

export const ProductCard = ({
	product,
	className,
	style,
	onChange = () => {},
	value,
	children,
	initialValues,
}: Props) => {
	const { counter, increaseBy, isMaxCountReached, reset } = useProduct(
		onChange,
		value,
		initialValues
	);

	return (
		<ProductProvider
			value={{
				counter,
				increaseBy,
				product,
				maxCount: initialValues?.maxCount,
			}}
		>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children &&
					children({
						count: counter,
						isMaxCountReached,
						maxCount: initialValues?.maxCount,
						product,
						increaseBy,
						reset,
					})}
			</div>
		</ProductProvider>
	);
};
