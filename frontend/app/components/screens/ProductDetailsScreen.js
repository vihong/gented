import { useNavigationState } from '@react-navigation/native';
import React, { Fragment } from 'react';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import ListItem from '../molecules/ListItem';
import routes from '../navigation/routes';

function ProductDetailsScreen({ navigation, route }) {
	item = route.params.item;

	return (
		<Fragment>
			<Card
				title={item.title}
				subtitle={item.subtitle}
				imageUrl={item.images[0].url}
				style={{ overflow: 'visible' }}
				onPress={() =>
					navigation.navigate(routes.VIEW_IMAGE, {
						item
					})}
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

export default ProductDetailsScreen;
