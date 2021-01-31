import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function Card({ title, subtitle, imageUrl, brand, style, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[
					styles.container,
					style
				]}
			>
				<ImageStyled source={{ uri: imageUrl }} resizeMode="cover" />
				<DescriptionStyled>
					<TitleStyled numberOfLines={1}>{title}</TitleStyled>
					<SubtitleStyled numberOfLines={1}>
						{subtitle}
						{brand && ` • ${brand}`}
					</SubtitleStyled>
				</DescriptionStyled>
			</View>
		</TouchableWithoutFeedback>
	);
}

export default Card;

const styles = StyleSheet.create({
	container : {
		width           : '100%',
		backgroundColor : colorPalette.white,
		borderRadius    : 20,
		marginBottom    : 20,
		overflow        : 'hidden'
	}
});

const ImageStyled = styled.Image`
	height: 250px;
	width: 100%;
`;

const DescriptionStyled = styled.View`
	padding: 15px;
	justify-content: space-between;
	width: 90%;
`;

const TitleStyled = styled.Text`
	color: ${colorPalette.black};
	padding-bottom: 7px;
	font-weight: 700;
`;

const SubtitleStyled = styled.Text`
	color: ${colorPalette.textColor};
	font-weight: 400;
`;
