import { Organisation } from '../../../types/type';

export const productsLoader = async () => {
	const response = await fetch('https://fakestoreapi.com/products');
	const data = await response.json();

	return data as Organisation[];
};

// export const productByIdLoader = async (id: string) => {
// 	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
// 	const data = await response.json();

// 	return data as Product;
// };

// export const editProductByIdAction = async (id: string) => {
// 	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
// 	const data = await response.json();

// 	return data as Product;
// };
