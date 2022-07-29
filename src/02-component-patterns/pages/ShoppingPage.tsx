import {
	ProductButtons,
	ProductImage,
	ProductTitle,
	ProductCard,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Cart</h1>
			<hr />
			<ProductCard
				product={product}
				className="bg-dark text-white"
				key={product.id}
				initialValues={{ count: 4, maxCount: 10 }}
			>
				{({
					count,
					isMaxCountReached,
					maxCount,
					product,
					increaseBy,
					reset,
				}) => (
					<>
						<ProductImage className="custom-image" />
						<ProductTitle className="text-bold" />
						<ProductButtons className="custom-buttons" />
						<button onClick={reset}>Presioname</button>
						<button onClick={() => increaseBy(-2, product)}>-2</button>
						{!isMaxCountReached ? (
							<button onClick={() => increaseBy(2, product)}>+2</button>
						) : null}
						<span>{count}</span>
					</>
				)}
			</ProductCard>
		</div>
	);
};

export default ShoppingPage;
