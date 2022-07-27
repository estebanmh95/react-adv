import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCard,
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
				<ProductCard product={product2}>
					<ProductCard.Image />
					<ProductCard.Title />
					<ProductCard.Buttons />
				</ProductCard>
				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
