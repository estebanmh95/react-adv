import { useState } from "react";
import { Counter } from "../interfaces/interfaces";

export const useProduct = (initialValue = {}) => {
	const [counter, setCounter] = useState(initialValue);

	const increaseBy = (value: number, name: string) => {
		setCounter((prev: Counter) => ({
			...prev,
			[name]: Math.max(prev[name] + value, 0),
		}));
	};
	return {
		increaseBy,
		counter,
	};
};
