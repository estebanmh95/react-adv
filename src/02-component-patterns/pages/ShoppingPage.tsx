import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCard,
} from "../components";
import "../styles/custom-styles.css";

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
				<ProductCard product={product2} className="bg-dark text-white">
					<ProductCard.Image className="custom-image" />
					<ProductCard.Title className="text-bold" />
					<ProductCard.Buttons className="custom-buttons" />
				</ProductCard>
				<ProductCard product={product} className="bg-dark text-white">
					<ProductImage className="custom-image" />
					<ProductTitle className="text-bold" />
					<ProductButtons className="custom-buttons" />
				</ProductCard>

				<ProductCard
					product={product2}
					style={{
						backgroundColor: "light-blue",
					}}
				>
					<ProductImage className="custom-image" />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};

export default ShoppingPage;
