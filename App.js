import React from 'react';
import styled from 'styled-components';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LoadingScreen from './app/screens/LoadingScreen';
import FeedScreen from './app/screens/FeedScreen';

export default function App() {
	return (
		<AppStyled>
			{/* <WelcomeScreen /> */}
			{/* <LoadingScreen /> */}
			<ViewImageScreen />
			{/* <FeedScreen /> */}
		</AppStyled>
	);
	r;
}

const AppStyled = styled.View`flex: 1;`;
