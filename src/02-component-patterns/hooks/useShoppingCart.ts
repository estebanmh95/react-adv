import { useState } from "react";
import { Product, ShoppingCartState } from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCartState>({});

	const onProductCountChange = (count: number, product: Product) => {
		setShoppingCart((oldState) => {
			if (count === 0) {
				delete oldState[product.id];
				return { ...oldState };
			}
			return {
				...oldState,
				[product.id]: {
					...product,
					count: count,
				},
			};
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
