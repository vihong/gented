import React from 'react';
import styled from 'styled-components';
import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc';
import colorPalette from '../config/colorPalette';
import { AppLoading } from 'expo';

function TextAtom(props) {
	const { numberOfLines, onPress, fontSize } = props;
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
			style={{ fontSize: fontSize ? fontSize : '20px' }}
			onPress={onPress && onPress}
			numberOfLines={numberOfLines && numberOfLines}
		>
			{props.children}
		</TextStyled>
	);
}

export default TextAtom;

// style générique et inhérent à tous le buttons vs style variable en props
const TextStyled = styled.Text`
	font-family: 'AmaticSC_400Regular';
	color: ${colorPalette.white};
`;
