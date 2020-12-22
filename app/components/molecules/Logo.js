import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import styled from 'styled-components';
import TextAtom from '../atoms/TextAtom';

function Logo(props) {
	return (
		<ViewStyled>
			<TextAtom
				onPress={() => alert('Ceci est le logo Gented')}
				fontSize={100}
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
		</ViewStyled>
	);
}

export default Logo;

const ViewStyled = styled.View`align-items: center;`;
