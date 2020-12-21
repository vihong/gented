import React from 'react';
import styled from 'styled-components';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
	return (
		<AppStyled>
			{/* <WelcomeScreen /> */}
			<ViewImageScreen />
		</AppStyled>
	);
	r;
}

const AppStyled = styled.View`flex: 1;`;
