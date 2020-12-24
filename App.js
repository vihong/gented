import React from 'react';
import styled from 'styled-components';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import FeedScreen from './app/screens/FeedScreen';
import ProductDetailsScreen from './app/screens/ProductDetailsScreen';
import MesssagesScreen from './app/screens/MesssagesScreen';

export default function App() {
	return (
		<AppStyled>
			{/* <WelcomeScreen /> */}
			{/* <LoadingScreen /> */}
			{/* <ViewImageScreen /> */}
			{/* <FeedScreen /> */}
			{/* <ProductDetailsScreen /> */}
			<MesssagesScreen />
		</AppStyled>
	);
}

const AppStyled = styled.View`flex: 1;`;
