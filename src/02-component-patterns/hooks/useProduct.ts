import { useEffect, useRef, useState } from "react";
import { Product } from "../interfaces/interfaces";

export const useProduct = (
	onChange: (value: number, product: Product) => void,
	customValue = 0
) => {
	const [counter, setCounter] = useState(customValue);

	const isControlled = useRef(!!onChange);

	useEffect(() => {
		setCounter(customValue);
	}, [customValue]);

	const increaseBy = (value: number, product: Product) => {
		if (isControlled.current) {
			return onChange(value, product);
		}
		setCounter((prev) => Math.max(prev + value, 0));
		onChange(Math.max(counter + value, 0), product);
	};
	return {
		increaseBy,
		counter,
	};
};
