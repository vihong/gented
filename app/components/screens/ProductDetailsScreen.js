import { useNavigationState } from '@react-navigation/native';
import React, { Fragment } from 'react';
import Screen from '../atoms/Screen';
import Card from '../molecules/Card';
import ListItem from '../molecules/ListItem';

function ProductDetailsScreen({ navigation, route }) {
	item = route.params.item;

	return (
		<Fragment>
			<Card
				title={item.title}
				subtitle={item.subtitle}
				image={item.image}
				style={{ overflow: 'visible' }}
				onPress={() =>
					navigation.navigate('ViewImage', { image: item.image })}
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
