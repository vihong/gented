import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
	query GET_PRODUCTS {
		products {
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
	}
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
			id
			title
			price
			category
			description
			brand
			images {
				name
				url
			}
		}
	}
`;
