import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components';

function Screen({ children, style }) {
	return (
		<ScreenStyled style={style}>
			<View style={style}>{children}</View>
		</ScreenStyled>
	);
}

export default Screen;

const ScreenStyled = styled.SafeAreaView`
	padding-top: ${Constants.statusBarHeight}px;
	flex: 1;
`;
