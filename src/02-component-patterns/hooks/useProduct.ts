import { useEffect, useRef, useState } from "react";
import { Product, InitialValues } from "../interfaces/interfaces";

export const useProduct = (
	onChange: (value: number, product: Product) => void,
	customValue = 0,
	initialValues?: InitialValues
) => {
	const [counter, setCounter] = useState<number>(
		initialValues?.count || customValue
	);

	const isMounted = useRef(false);

	const reset = () => {
		setCounter(initialValues?.count || customValue);
	};
	useEffect(() => {
		if (!isMounted.current) {
			return;
		}
		setCounter(customValue);
	}, [customValue]);

	useEffect(() => {
		isMounted.current = true;
	}, []);
	const increaseBy = (value: number, product: Product) => {
		const newValue = Math.min(
			Math.max(counter + value, 0),
			initialValues?.maxCount || 9999
		);
		setCounter(newValue);
		onChange(newValue, product);
	};
	return {
		increaseBy,
		counter,
		reset,
		isMaxCountReached:
			!!initialValues?.count && initialValues.maxCount === counter,
	};
};
