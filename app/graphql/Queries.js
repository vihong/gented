import { gql } from '@apollo/client';

export const PRODUCT_FRAGMENT = gql`
	fragment PRODUCT_FRAGMENT on Product {
		id
		title
		price
		category
		description
		brand
		images {
			id
			url
		}
	}
`;

export const GET_PRODUCTS = gql`
	query GET_PRODUCTS {
		products {
			...PRODUCT_FRAGMENT
		}
	}
	${PRODUCT_FRAGMENT}
`;

export const CREATE_PRODUCT = gql`
	mutation CREATE_PRODUCT(
		$title: String!
		$category: String!
		$price: Float!
		$description: String
		$brand: String
		$images: ImageCreateManyWithoutProductInput
	) {
		createProduct(
			title: $title
			price: $price
			category: $category
			description: $description
			brand: $brand
			images: $images
		) {
			...PRODUCT_FRAGMENT
		}
	}
	${PRODUCT_FRAGMENT}
`;
