import React, { Fragment, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator as Popo, ScrollView } from 'react-native';
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
import { CREATE_PRODUCT, GET_PRODUCTS } from '../../graphql/Queries';
import Icon from '../atoms/Icon';
import IconInCircle from '../atoms/IconInCircle';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

function FeedScreen({ navigation }) {
	const [
		showIndicator,
		setShowIndicator
	] = useState(false);

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

	const _listEmptyComponent = () => {
		return (
			<View>
				<MaterialCommunityIcons name="email" size={40} color={colorPalette.primary} />
			</View>
		);
	};
	if (loadingProducts) return <ActivityIndicator visible />;
	if (errorProducts)
		return (
			<Screen style={styles.screen}>
				{/* @TODO: perhaps build an isolated component for that one ? */}
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
					ListFooterComponent={() =>
						products.length > 0 && (
							<Fragment>
								{showIndicator ? (
									<View style={styles.indicatorContainer}>
										<LottieView
											source={require('../../assets/animations/wait.json')}
											autoPlay
											loop
											style={styles.indicator}
										/>
									</View>
								) : (
									<TouchableWithoutFeedback
										onPress={async () => {
											console.log('pokemon');
											setShowIndicator(true);
											await refetch();
											setShowIndicator(false);
										}}
									>
										<View style={styles.reloadContainer}>
											<MaterialCommunityIcons
												name="refresh"
												size={40}
												color={colorPalette.primary}
											/>
										</View>
									</TouchableWithoutFeedback>
								)}
							</Fragment>
						)}
				/>
			</Screen>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	screen             : {
		backgroundColor : colorPalette.backgroundGrey,
		paddingTop      : 20
	},
	cards              : {
		paddingHorizontal : 20
	},
	requestFailed      : {
		alignItems  : 'center',
		padding     : '5%',
		borderWidth : 1
	},
	reloadContainer    : {
		justifyContent : 'center',
		alignItems     : 'center',
		width          : '100%',
		marginTop      : 30,
		marginBottom   : 70,
		height         : 80
		// borderWidth    : 1
	},
	indicatorContainer : {
		width        : '100%',
		alignItems   : 'center',
		// borderWidth : 1,
		marginTop    : 30, // doit être de la même marginTop que reloadContainer
		marginBottom : 70,
		height       : 80
	},
	indicator          : {
		// borderWidth : 1,
		// borderColor : 'red'
	}
});

export default FeedScreen;
