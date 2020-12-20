import { AppLoading } from 'expo';
import React from 'react';
import { Text } from 'react-native';
import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc';
import styled from 'styled-components';

function LogoText(props) {
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	});

	if (!fontsLoaded) return <AppLoading />;
	return (
		<LogoTextStyled
			numberOfLines={1}
			onPress={() => alert('Ceci est le logo Gented')}
		>
			Gented
		</LogoTextStyled>
	);
}

const LogoTextStyled = styled.Text`
	font-size: 80px;
	font-family: 'AmaticSC_400Regular';
	color: #fff;
`;

export default LogoText;
