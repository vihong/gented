import { useNavigationState } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import routes from '../navigation/routes';
import productsApi from '../../api/products';

function FeedScreen({ navigation }) {
	// const [
	// 	cards,
	// 	setCards
	// ] = useState([
	// 	{
	// 		id       : '1',
	// 		title    : 'Red jacket for sale!',
	// 		subtitle : '$100',
	// 		image    : require('../../assets/images/red_jacket.jpg')
	// 	},
	// 	{
	// 		id       : '2',
	// 		title    : "Levi's Jeans jacket available",
	// 		subtitle : '$200',
	// 		image    : require('../../assets/images/blue_jacket.jpg')
	// 	},
	// 	{
	// 		id       : '3',
	// 		title    : 'Bublizarre jacket available',
	// 		subtitle : '$300',
	// 		image    : require('../../assets/images/green_jacket.jpg')
	// 	}
	// ]);

	const [
		products,
		setProducts
	] = useState();

	useEffect(() => {
		loadProducts();
	}, []);

	const loadProducts = async () => {
		const { data: dataProducts } = await productsApi.getProducts();
		setProducts(dataProducts);
	};

	return (
		<Screen style={styles.screen}>
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
