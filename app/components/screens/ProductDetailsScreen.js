import { useMutation } from '@apollo/client';
import { useActionSheet } from '@expo/react-native-action-sheet';
import React, { Fragment } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import colorPalette from '../../config/colorPalette';
import { DELETE_PRODUCT } from '../../graphql/Queries';
import { formatMontant } from '../../utils/maths';
import ScreenHeader from '../atoms/ScreenHeader';
import Card from '../molecules/Card';
import ListItem from '../molecules/ListItem';
import routes from '../navigation/routes';

export default function ProductDetailsScreen({ navigation, route, ...otherProps }) {
	const { item, hasScreenHeader } = route.params;
	// console.log('item: ', item);

	const [
		deleteProduct
	] = useMutation(DELETE_PRODUCT);

	const { showActionSheetWithOptions } = useActionSheet();

	const options = [
		'Edit',
		'Delete',
		'Cancel'
	];
	const destructiveButtonIndex = getIndexOfWord(options, 'Delete');
	const cancelButtonIndex = getIndexOfWord(options, 'Cancel');

	// @TODO: create hook useEditProduct
	const handleHangerButton = () => {
		showActionSheetWithOptions(
			{
				options,
				cancelButtonIndex,
				destructiveButtonIndex
			},
			(buttonIndex) => {
				if (buttonIndex === getIndexOfWord(options, 'Delete')) {
					console.log('Delete');
					Alert.alert('Confirmation', 'Are you sure you want to delete this product?', [
						{
							text    : 'Yes',
							onPress : async () => {
								console.log('produit supprimé');
								console.log('item: ', item);
								const { response } = await deleteProduct({
									variables : { id: item.id }
								});
								console.log('response: ', response);
								navigation.push(routes.ACCOUNT);
							}
						},
						{ text: 'No' }
					]);
				}
				if (buttonIndex === getIndexOfWord(options, 'Cancel')) console.log('Cancel');
				if (buttonIndex === getIndexOfWord(options, 'Book')) console.log('Book');
			}
		);
	};

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
				title="Jeremaih Wainwright"
				description={'2 products'}
				style={{ marginVertical: 20 }}
			/>
		</ScrollView>
	);
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
});

export function getIndexOfWord(options, word) {
	return options.findIndex((option) => option === word);
}
