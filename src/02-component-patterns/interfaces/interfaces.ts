import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductTitleProps } from "../components/ProductTitle";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductButtonsProps } from "../components/ProductButtons";

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	counter: number;
	increaseBy: (value: number, product: Product) => void;
	product: Product;
	maxCount?: number;
}

export interface ProductCartHOCProps {
	({ product, children }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface ProductInCart extends Product {
	count: number;
}
export interface ShoppingCartState {
	[key: string]: ProductInCart;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: Product;

	increaseBy: (value: number, product: Product) => void;
	reset: () => void;
}
