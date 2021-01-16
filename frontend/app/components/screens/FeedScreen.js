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

function FeedScreen({ navigation }) {
	const [
		products,
		setProducts
	] = useState([]);

	const [
		hasError,
		setHasError
	] = useState(false);

	const [
		isLoading,
		setIsLoading
	] = useState(false);

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		setIsLoading(true);
		const { data: dataProducts, ok } = await productsApi.getProducts();
		setIsLoading(false);

		if (!ok) {
			setHasError(true);
			return;
		}

		setHasError(false);
		setProducts(dataProducts);
	};

	return (
		<Fragment>
			{isLoading ? (
				<ActivityIndicator visible={isLoading} />
			) : (
				<Screen style={styles.screen}>
					{hasError && (
						<Fragment>
							<AppText>
								Nous n'avons pas pu récup les données
							</AppText>
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
									navigation.navigate(
										routes.PRODUCT_DETAILS,
										{
											item
										}
									)}
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
