import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import routes from '../navigation/routes';
import ActivityIndicator from '../atoms/ActivityIndicator';
import Button from '../atoms/Button';
import CardTest from '../atoms/CardTest';
import { useMutation, useQuery } from '@apollo/client';
import { formatMontant } from '../../utils/maths';
import Text from '../atoms/Text';
import { GET_PRODUCTS, UPDATE_PRODUCTS } from '../../graphql/Queries';
import { clientPrisma } from '../../api/apollo/client';

export default function Wardrobe({ navigation }) {
	const [
		products,
		setProducts
	] = useState([]);

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

	const [
		updateProducts,
		{ loading: loadingUpdateProduct, error: errorUpdateProduct }
	] = useMutation(UPDATE_PRODUCTS, {
		client : clientPrisma
	});

	useEffect(
		() => {
			if (dataProducts) {
				const productsCopy = [
					...dataProducts.products
				];
				const productsReverted = productsCopy.reverse();
				setProducts(productsReverted);
			}
		},
		[
			dataProducts
		]
	);

	const handleButtonPush = async () => {
		console.log('button pushed');
		//@TODO: faire une custome mutation callback dans un fichier à part
		const response = await updateProducts({
			variables : {
				data  : {
					title  : 'Blue shirt',
					images : {
						update : {
							data  : {
								name : 'red shirt',
								url  :
									'https://images.pexels.com/photos/3768728/pexels-photo-3768728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
							},
							where : { id: 'ckkqcpx6qcu320928vbn9spa1' }
						}
					}
				},
				where : { id: 'ckkqcpx6ncu310928vicknq7y' }
			}
		});
		console.log('response: ', response);
	};

	if (loadingProducts || loadingUpdateProduct) return <ActivityIndicator visible />;
	if (errorProducts || errorUpdateProduct)
		return (
			<Screen style={styles.screen}>
				{/* @TODO: perhaps build an isolated component for that one ? */}
				<View style={styles.requestFailed}>
					<Text>Nous n'avons pas pu récupérer les données</Text>
					<Button label="Ré-essayer" onPress={refetch} />
				</View>
			</Screen>
		);

	return (
		<Fragment>
			<Button label="update one item" onPress={handleButtonPush} />
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
		alignItems  : 'center',
		padding     : '5%',
		borderWidth : 1
	}
});
