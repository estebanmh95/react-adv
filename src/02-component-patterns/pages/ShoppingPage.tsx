import React from "react";
import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCart,
} from "../components";
import { useProduct } from "../hooks/useProduct";

const product = {
	id: "1",
	title: "Bed",
	name: "bed",
};
const product2 = {
	id: "2",
	title: "Coffee-Mug",
	img: "./coffee-mug.png",
	name: "coffe",
};

const INITIAL_VALUE = {
	bed: 0,
	coffe: 0,
};

const ShoppingPage = () => {
	const { counter, increaseBy } = useProduct(INITIAL_VALUE);
	// const { counter: counter2, increaseBy: increaseBy2 } =
	// 	useProduct(INITIAL_VALUE);
	// console.log("counter", counter);
	return (
		<div>
			<h1>ShoppingPagssse</h1>
			<hr />
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				<ProductCart
					product={product2}
					counter={counter}
					increaseBy={increaseBy}
				>
					<ProductCart.Image />
					<ProductCart.Title />
					<ProductCart.Buttons />
				</ProductCart>
				<ProductCart
					product={product}
					counter={counter}
					increaseBy={increaseBy}
				>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCart>
			</div>
		</div>
	);
};

export default ShoppingPage;
