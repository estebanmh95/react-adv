import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCard,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Cart</h1>
			<hr />
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{products.map((product) => {
					return (
						<ProductCard
							product={product}
							className="bg-dark text-white"
							key={product.id}
							value={shoppingCart[product.id]?.count || 0}
							onChange={onProductCountChange}
						>
							<ProductImage className="custom-image" />
							<ProductTitle className="text-bold" />
							<ProductButtons className="custom-buttons" />
						</ProductCard>
					);
				})}
			</div>
			<div className="shopping-cart">
				{Object.keys(shoppingCart).map((key) => {
					return (
						<ProductCard
							product={shoppingCart[key]}
							key={key}
							className="bg-dark text-white"
							style={{ width: "100px" }}
							value={shoppingCart[key].count}
							onChange={onProductCountChange}
						>
							<ProductCard.Image className="custom-image" />
							<ProductCard.Buttons
								className="custom-buttons"
								style={{ display: "flex", justifyContent: "center" }}
							/>
						</ProductCard>
					);
				})}
			</div>
		</div>
	);
};

export default ShoppingPage;
