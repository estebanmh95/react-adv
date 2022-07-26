import React from "react";
import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCart,
} from "../components";

const product = {
	id: "1",
	title: "Bed",
};
const product2 = {
	id: "2",
	title: "Coffee Mug",
	img: "./coffee-mug.png",
};
const ShoppingPage = () => {
	return (
		<div>
			<h1>ShoppingPagssse</h1>
			<hr />
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				<ProductCart product={product2}>
					<ProductCart.Image />
					<ProductCart.Title />
					<ProductCart.Buttons />
				</ProductCart>
				<ProductCart product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCart>
			</div>
		</div>
	);
};

export default ShoppingPage;
