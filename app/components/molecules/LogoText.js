import React from 'react';
import { Image, ImageBackground } from 'react-native';
import TextAtom from '../atoms/TextAtom';
import LogoImage from './LogoImage';

function LogoText(props) {
	return (
		<>
			<TextAtom
				onPress={() => alert('Ceci est le logo Gented')}
				fontSize={100}
			>
				Gented
			</TextAtom>
			<LogoImage/>
		</>
	);
}

export default LogoText;
