import styles from "../styles/styles.module.css";
import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";

export interface Props {
	className?: string;
	style?: CSSProperties;
}
export const ProductButtons = ({ className, style }: Props) => {
	const { counter, increaseBy, product, maxCount } = useContext(ProductContext);

	const isMaxReached = useCallback(() => {
		return !!maxCount ? counter >= maxCount : false;
	}, [counter, maxCount]);

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button
				className={styles.buttonMinus}
				onClick={() => increaseBy(-1, product)}
			>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button
				className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
				onClick={() => increaseBy(1, product)}
			>
				+
			</button>
		</div>
	);
};
