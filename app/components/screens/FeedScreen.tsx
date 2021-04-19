import React, { Fragment, useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import colorPalette from '../../config/colorPalette'
import Screen from '../atoms/Screen'
import Card from '../molecules/Card'
import routes from '../navigation/routes'
import ActivityIndicator from '../atoms/ActivityIndicator'
import Button from '../atoms/Button'
import { useQuery } from '@apollo/client'
import { formatMontant } from '../../utils/maths'
import Text from '../atoms/Text'
import { GET_PRODUCTS } from '../../graphql/Queries'
import { IProduct } from '../../ts/interfaces/IProduct'

type Props = {
	navigation: any
}

type Products = Array<IProduct>

function FeedScreen({ navigation }: Props) {
	const [
		products,
		setProducts
	] = useState<Products | null>([])

	const [
		isRefresh,
		setIsRefresh
	] = useState(false)

	const {
		data: dataProducts,
		loading: loadingProducts,
		error: errorProducts,
		refetch
	} = useQuery(GET_PRODUCTS)

	useEffect(
		() => {
			if (dataProducts) {
				const productsCopy = [
					...dataProducts.products
				]
				const productsReverted = productsCopy.reverse()
				setProducts(productsReverted)
			}
		},
		[
			dataProducts
		]
	)

	if (loadingProducts) return <ActivityIndicator visible />
	if (errorProducts)
		return (
			<Screen style={styles.screen}>
				{/* @TODO: perhaps build an isolated component for that one ? */}
				<View style={styles.requestFailed}>
					<Text>Nous n'avons pas pu récupérer les données</Text>
					<Button label="Ré-essayer" onPress={refetch} />
				</View>
			</Screen>
		)

	return (
		<Fragment>
			<Screen style={styles.screen}>
				<FlatList
					style={styles.cards}
					data={products}
					keyExtractor={(card) => card.id.toString()}
					renderItem={({ item }) => (
						// @ts-ignore
						<Card
							title={formatMontant(item.price)}
							subtitle1={item.title}
							brand={item.brand}
							imageUrl={item.images[0].url}
							showLikeButton
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
	)
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colorPalette.backgroundGrey
	},
	cards: {
		paddingHorizontal: 20,
		paddingTop: 20
	},
	requestFailed: {
		alignItems: 'center',
		padding: '5%',
		borderWidth: 1
	}
})

export default FeedScreen
