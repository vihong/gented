import React from 'react';
import { SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components';

function Screen({ children }) {
	return <ScreenStyled>{children}</ScreenStyled>;
}

export default Screen;

const ScreenStyled = styled.SafeAreaView`
	padding-top: ${Constants.statusBarHeight}px;
	flex: 1;
`;
