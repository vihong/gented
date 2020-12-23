import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import styled from 'styled-components';
import TextAtom from '../atoms/TextAtom';

function Logo(props) {
	return (
		<LogoStyled>
			<TextAtom
				onPress={() => alert('Ceci est le logo Gented')}
				style={{ fontSize: 100 }}
			>
				Gented
			</TextAtom>
			<Image
				source={require('../../assets/images/boeTie.png')}
				style={{
					transform : [
						{ scale: 0.5 }
					]
				}}
			/>
		</LogoStyled>
	);
}

export default Logo;

const LogoStyled = styled.View`align-items: center;`;
