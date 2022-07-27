import { ReactElement } from "react";

export interface Product {
	id: string;
	title: string;
	img?: string;
	name: string;
}

export interface Counter {
	[key: string]: number;
}

export interface Props {
	product: Product;
	counter: Counter;
	increaseBy: (value: number, name: string) => void;
	// children?: () => JSX.Element;
	children?: ReactElement | ReactElement[];
}

// interface ProductButtonProps {
// 	counter: number;
// 	increaseBy: (value: number) => void;
// }

export interface ProductContextProps {
	counter: Counter;
	increaseBy: (value: number, name: string) => void;
	product: Product;
}

export interface ProductCartHOCProps {
	({ product, children }: Props): JSX.Element;
	Title: ({ title }: { title?: string }) => JSX.Element;
	Image: ({ img }: { img?: string }) => JSX.Element;
	Buttons: () => JSX.Element;
}