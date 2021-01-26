import React, { Fragment } from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';

function Screen({ children, style }) {
	return (
		<Fragment>
			<StatusBar
			// translucent
			// backgroundColor="#5E8D48"
			// barStyle="light-content"
			/>
			<ScreenStyled style={style}>
				<View style={style}>{children}</View>
			</ScreenStyled>
		</Fragment>
	);
}

export default Screen;

const ScreenStyled = styled.SafeAreaView`
	padding-top: ${Constants.statusBarHeight}px;
	flex: 1;
`;
