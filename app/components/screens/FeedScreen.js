import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import routes from '../navigation/routes';
import productsApi from '../../api/products';
import ActivityIndicator from '../atoms/ActivityIndicator';
import Button from '../atoms/Button';
import useApi from '../hooks/useApi';
import CardTest from '../atoms/CardTest';
import { gql, useMutation, useQuery } from '@apollo/client';
import { formatMontant } from '../../utils/maths';
import Text from '../atoms/Text';
import { CREATE_PRODUCT, GET_PRODUCTS } from '../../graphql/ProductEdit';

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

	const {
		data    : dataProducts,
		loading : loadingProducts,
		error   : errorProducts,
		refetch
	} = useQuery(GET_PRODUCTS);

	const nouveauProduit = {};

	useEffect(
		() => {
			if (dataProducts) setProducts(dataProducts.products);
		},
		[
			dataProducts
		]
	);

	//@TODO: remove these two when CRUD is finished
	const [
		createProduct
	] = useMutation(CREATE_PRODUCT);
	const onButtonPushed = async () => {
		console.log('onButtonPushed');
		const response = await createProduct();
		console.log('response: ', response);
	};

	if (loadingProducts) return <ActivityIndicator visible />;
	if (errorProducts)
		return (
			<Screen style={styles.screen}>
				<View style={styles.requestFailed}>
					<Text>Nous n'avons pas pu récupérer les données</Text>
					<Button label="Ré-essayer" onPress={loadProducts} />
				</View>
			</Screen>
		);

	return (
		<Fragment>
			<Screen style={styles.screen}>
				<FlatList
					style={styles.cards}
					data={products}
					keyExtractor={(card) => card.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={formatMontant(item.price)}
							subtitle={item.title}
							brand={item.brand}
							imageUrl={item.images[0].url}
							onPress={() =>
								navigation.navigate(routes.PRODUCT_DETAILS, {
									item
								})}
						/>
					)}
					refreshing={isRefresh}
					onRefresh={() => refetch()}
				/>
			</Screen>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	screen        : {
		backgroundColor : colorPalette.backgroundGrey,
		paddingTop      : 20
	},
	cards         : {
		paddingHorizontal : 20
	},
	requestFailed : {
		alignItems : 'center',
		padding    : '5%'
	}
});

export default FeedScreen;
