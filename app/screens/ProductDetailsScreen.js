import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import Card from '../components/molecules/Card';
import ListItem from '../components/molecules/ListItem';

function ProductDetailsScreen(props) {
	return (
		<ProductDetailsScreenStyled>
			<Card
				title="Red jacket for sale"
				subtitle="$100"
				image={require('../assets/images/red_jacket.jpg')}
			/>
			<ListItem
				image={require('../assets/images/lad_2.jpg')}
				fullName="Jeremaih Wainwright"
				description={'2 products'}
				style={{ marginVertical: 20 }}
			/>
		</ProductDetailsScreenStyled>
	);
}

export default ProductDetailsScreen;

const ProductDetailsScreenStyled = styled.View``;
