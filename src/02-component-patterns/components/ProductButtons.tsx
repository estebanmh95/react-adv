import styles from "../styles/styles.module.css";
import { useContext } from "react";
import { ProductContext } from "./ProductCart";

export const ProductButtons = () => {
	const { counter, increaseBy, product } = useContext(ProductContext);
	return (
		<div className={styles.buttonsContainer}>
			<button
				className={styles.buttonMinus}
				onClick={() => increaseBy(-1, product.name)}
			>
				-
			</button>
			<div className={styles.countLabel}>{counter[product.name]}</div>
			<button
				className={styles.buttonAdd}
				onClick={() => increaseBy(1, product.name)}
			>
				+
			</button>
		</div>
	);
};
