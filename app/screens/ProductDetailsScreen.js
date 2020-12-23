import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import Card from '../components/molecules/Card';
import Profile from '../components/molecules/Profile';

function ProductDetailsScreen(props) {
	return (
		<ProductDetailsScreenStyled>
			<Card
				title="Red jacket for sale"
				subtitle="$100"
				image={require('../assets/images/red_jacket.jpg')}
				// style={{ height: '300' }}
			/>
			<Profile
				image={require('../assets/images/lad_2.jpg')}
				fullName="Jeremaih Wainwright"
				numberOfProducts={2}
			/>
		</ProductDetailsScreenStyled>
	);
}

export default ProductDetailsScreen;

const ProductDetailsScreenStyled = styled.View``;
