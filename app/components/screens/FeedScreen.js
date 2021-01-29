import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import routes from '../navigation/routes';
import productsApi from '../../api/products';
import AppText from '../atoms/AppText';
import ActivityIndicator from '../atoms/ActivityIndicator';
import Button from '../atoms/Button';
import useApi from '../hooks/useApi';
import CardTest from '../atoms/CardTest';
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
	query GET_PRODUCTS {
		products {
			id
			title
			price
			category
			description
			images {
				id
				url
			}
		}
	}
`;

function FeedScreen({ navigation }) {
	const [
		products,
		setProducts
	] = useState([]);

	const { data: productsGql, loading, error, request: loadProducts } = useApi(
		productsApi.getProducts
	);

	useEffect(() => {
		loadProducts();
	}, []);
	const [
		isRefresh,
		setIsRefresh
	] = useState(false);

	const { data: dataProducts, loading: loadingProducts, error: errorProducts } = useQuery(
		GET_PRODUCTS
	);

	useEffect(
		() => {
			if (dataProducts) setProducts(dataProducts.products);
		},
		[
			dataProducts
		]
	);

	if (loadingProducts) return <Text>Loading</Text>;
	if (errorProducts) return <Text>Error</Text>;

	return (
		<Fragment>
			{loading ? (
				<ActivityIndicator visible={loading} />
			) : (
				<Screen style={styles.screen}>
					{error && (
						<Fragment>
							<AppText>Nous n'avons pas pu récupérer les données</AppText>
							<Button label="Retry" onPress={loadProducts} />
						</Fragment>
					)}

					<FlatList
						style={styles.cards}
						data={products}
						keyExtractor={(card) => card.id.toString()}
						renderItem={({ item }) => (
							<Card
								title={item.title}
								subtitle={item.subtitle}
								imageUrl={item.images[0].url}
								onPress={() =>
									navigation.navigate(routes.PRODUCT_DETAILS, {
										item
									})}
							/>
						)}
						refreshing={isRefresh}
						onRefresh={loadProducts}
					/>
					{/* <CardcTest /> */}
				</Screen>
			)}
		</Fragment>
	);
}

const styles = StyleSheet.create({
	screen : {
		backgroundColor : colorPalette.backgroundGrey,
		paddingTop      : 20
	},
	cards  : {
		paddingHorizontal : 20
	}
});

export default FeedScreen;
