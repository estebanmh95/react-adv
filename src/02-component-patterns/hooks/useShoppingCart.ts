import { useState } from "react";
import {
	Product,
	ProductInCart,
	ShoppingCartState,
} from "../interfaces/interfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCartState>({});

	const onProductCountChange = (count: number, product: Product) => {
		setShoppingCart((oldState) => {
			const productInCart: ProductInCart = oldState[product.id] || {
				...product,
				count: 0,
			};

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;
				return {
					...oldState,
					[product.id]: productInCart,
				};
			}
			delete oldState[product.id];
			return { ...oldState };

			// if (count === 0) {
			// 	delete oldState[product.id];
			// 	return { ...oldState };
			// }
			// return {
			// 	...oldState,
			// 	[product.id]: {
			// 		...product,
			// 		count: count,
			// 	},
			// };
		});
	};

	return {
		shoppingCart,
		onProductCountChange,
	};
};
