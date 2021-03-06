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
import { GET_PRODUCTS, UPDATE_PRODUCT } from '../../graphql/Queries';
import { clientPrisma } from '../../api/apollo/client';

export default function WardrobeScreen({ navigation }) {
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
	] = useMutation(UPDATE_PRODUCT, {
		client : clientPrisma
	});

	const [
		productsNumber,
		setProductsNumber
	] = useState(0);

	useEffect(
		() => {
			if (dataProducts) {
				const productsReverted = revertData(dataProducts);
				setProductsNumber(productsReverted.length);
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
					title  : 'Red shirt',
					images : {
						update : {
							data  : {
								name : 'red shirt',
								url  :
									'https://images.pexels.com/photos/6009272/pexels-photo-6009272.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
							},
							where : { id: 'ckkr12wsrh1gv0928toxm5g9q' }
						}
					}
				},
				where : { id: 'ckkr12wsoh1gu0928n8eifh38' }
			}
		});
		// console.log('response: ', response);
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
			<Screen style={styles.screen}>
				{/* <Button label="update one item" onPress={handleButtonPush} /> */}
				{products.length > 0 && <Banner productsNumber={productsNumber} />}
				<FlatList
					style={styles.cards}
					data={products}
					keyExtractor={(card) => card.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={formatMontant(item.price)}
							subtitle1={item.title} // item.views but needs to be added in backend
							subtitle2={item.description}
							brand={item.brand}
							imageUrl={item.images[0].url}
							onPress={() =>
								navigation.navigate(routes.PRODUCT_DETAILS, {
									item,
									hasScreenHeader : true
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

function Banner({ productsNumber }) {
	return (
		<Text style={styles.banner}>
			{productsNumber > 0 ? (
				<Text>
					You have <Text style={styles.productsNumber}>{productsNumber} items</Text> in
					your closet
				</Text>
			) : (
				"Vous n'avez pas encore d'article pour le moment."
			)}
		</Text>
	);
}

const styles = StyleSheet.create({
	screen         : {
		backgroundColor : colorPalette.backgroundGrey
	},
	banner         : {
		paddingHorizontal : 20,
		paddingVertical   : 10,
		fontWeight        : '500',
		marginTop         : 10,
		color             : colorPalette.dark
	},
	productsNumber : {
		color : colorPalette.primary
	},
	cards          : {
		paddingHorizontal : 20,
		paddingTop        : 20
	},
	requestFailed  : {
		alignItems  : 'center',
		padding     : '5%',
		borderWidth : 1
	},
	subtitle2      : {
		fontWeight : '800'
	}
});

function revertData(dataProducts) {
	// why do we need this function ? Because "data" obtained from useQuery is in read-only mode.
	const productsCopy = [
		...dataProducts.products
	];
	return productsCopy.reverse();
}
