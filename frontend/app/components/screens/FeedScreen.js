import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import routes from '../navigation/routes';
import productsApi from '../../api/products';
import AppText from '../atoms/AppText';
import ActivityIndicator from '../atoms/ActivityIndicator';
import Button from '../atoms/Button';
import useApi from '../hooks/useApi';

function FeedScreen({ navigation }) {
	const { data: products, loading, error, request: loadProducts } = useApi(
		productsApi.getProducts
	);

	useEffect(() => {
		loadProducts();
	}, []);

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
					/>
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
