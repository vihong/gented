import { useNavigationState } from '@react-navigation/native';
import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import colorPalette from '../../config/colorPalette';
import { formatMontant } from '../../utils/maths';
import Card from '../molecules/Card';
import ListItem from '../molecules/ListItem';
import routes from '../navigation/routes';

export default function ProductDetailsScreen({ navigation, route, ...otherProps }) {
	item = route.params.item;
	console.log('item: ', item);
	return (
		<Fragment>
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
		</Fragment>
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
