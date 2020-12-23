import React from 'react';
import styled from 'styled-components';
import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc';
import { AppLoading } from 'expo';
import colorPalette from '../../config/colorPalette';
import { Text } from 'react-native';

function TextAtom(props) {
	const { numberOfLines, onPress, fontSize, color } = props;
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	});

	const defaultStyle = {
		fontSize   : fontSize ? fontSize : 20,
		color      : color ? color : colorPalette.white,
		fontFamily : 'AmaticSC_400Regular'
	};

	//@TODO: remove warning message related to possible promise rejection
	if (!fontsLoaded) return <AppLoading />;
	return (
		<Text
			style={defaultStyle}
			onPress={onPress && onPress}
			numberOfLines={numberOfLines && numberOfLines}
		>
			{props.children}
		</Text>
	);
}

export default TextAtom;
