import { useMutation } from '@apollo/client'
import { useActionSheet } from '@expo/react-native-action-sheet'
import React from 'react'
import { Alert, ScrollView, StyleSheet } from 'react-native'
import colorPalette from '../../config/colorPalette'
import { DELETE_PRODUCT, GET_PRODUCTS } from '../../graphql/Queries'
import { findIndexOfWord } from '../../utils/array'
import { formatMontant } from '../../utils/maths'
import ScreenHeader from '../atoms/ScreenHeader'
import Card from '../molecules/Card'
import ListItem from '../molecules/ListItem'
import routes from '../navigation/routes'

export default function ProductDetailsScreen({ navigation, route, ...otherProps }) {
	const { item, hasScreenHeader } = route.params

	const [
		deleteProduct
	] = useMutation(DELETE_PRODUCT, {
		update : (cache, { data }) => {
			const productsInCache = cache.readQuery({
				query : GET_PRODUCTS
			})
			const productToDelete = data.deleteProduct
			const productsUpdated = productsInCache.filter(
				(product) => product.id !== productToDelete.id
			)
			cache.writeQuery({
				query : GET_PRODUCTS,
				data  : {
					products : [
						...productsUpdated
					]
				}
			})
			// cache.evict({ id: productToDelete.id });
			// cache.evict({ id: productToDelete.id });
		}
	})

	const { showActionSheetWithOptions } = useActionSheet()

	const options = [
		'Edit',
		'Delete',
		'Cancel'
	]
	const destructiveButtonIndex = findIndexOfWord(options, 'Delete')
	const cancelButtonIndex = findIndexOfWord(options, 'Cancel')

	// @TODO: create hook useEditProduct
	const handleHangerButton = () => {
		showActionSheetWithOptions(
			{
				options,
				cancelButtonIndex,
				destructiveButtonIndex
			},
			(buttonIndex) => {
				if (buttonIndex === findIndexOfWord(options, 'Delete')) {
					Alert.alert('Confirmation', 'Are you sure you want to delete this product?', [
						{
							text    : 'Yes',
							onPress : async () => {
								try {
									const { response } = await deleteProduct({
										variables : { id: item.id }
									})
								} catch (error) {
									console.log('error mutation')
									// alert('Une erreur est survenu');
								}
								navigation.goBack()
								alert('Product deleted successfully. Please pull to refresh.')
							}
						},
						{ text: 'No' }
					])
				}
				if (buttonIndex === findIndexOfWord(options, 'Cancel')) console.log('Cancel')
				if (buttonIndex === findIndexOfWord(options, 'Edit'))
					navigation.navigate(routes.PRODUCT_EDIT, { item })
			}
		)
	}

	return (
		<ScrollView>
			{hasScreenHeader && (
				<ScreenHeader
					onPressLeft={() => navigation.goBack()}
					onPressRight={handleHangerButton}
					style={styles.header}
				/>
			)}
			<Card
				title={item.title}
				subtitle1={item.description}
				brand={item.brand}
				subtitle2={formatMontant(item.price)}
				styleTitle={styles.title}
				styleSubtitle2={styles.substitle2}
				imageUrl={item.images[0].url}
				style={{ overflow: 'visible' }}
				onPress={() =>
					navigation.navigate(routes.VIEW_IMAGE, {
						item
					})}
				{...otherProps}
			/>
			<ListItem
				image={require('../../assets/images/lad_2.jpg')}
				title="Andy Miller"
				description={'2 products'}
				style={{ marginVertical: 20 }}
			/>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	title      : {
		fontSize : 16
	},
	substitle2 : {
		fontWeight : '700',
		color      : colorPalette.dark,
		paddingTop : 3
	}
})
