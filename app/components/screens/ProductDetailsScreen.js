import React, { Fragment } from 'react';
import Card from '../molecules/Card';
import ListItem from '../molecules/ListItem';

function ProductDetailsScreen(props) {
	return (
		<Fragment>
			<Card
				title="Red jacket for sale"
				subtitle="$100"
				image={require('../../assets/images/red_jacket.jpg')}
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
