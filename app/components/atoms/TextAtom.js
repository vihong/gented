import React from 'react';
import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc';
import { AppLoading } from 'expo';
import colorPalette from '../../config/colorPalette';
import styled from 'styled-components';

function TextAtom(props) {
	const { numberOfLines, onPress, style } = props;
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	});

	//@TODO: remove warning message related to possible promise rejection
	if (!fontsLoaded) return <AppLoading />;
	return (
		<TextStyled
			style={style}
			onPress={onPress && onPress}
			numberOfLines={numberOfLines && numberOfLines}
		>
			{props.children}
		</TextStyled>
	);
}

export default TextAtom;

const TextStyled = styled.Text`
	font-size: 20px;
	color: ${colorPalette.white};
	font-family: 'AmaticSC_400Regular';
`;
