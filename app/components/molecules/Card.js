import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function Card({ title, subtitle, image, style, onPress }) {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View
				style={[
					styles.container,
					style
				]}
			>
				<ImageStyled source={image} resizeMode="cover" />
				<DescriptionStyled>
					<TitleStyled numberOfLines={1}>{title}</TitleStyled>
					<SubtitleStyled numberOfLines={1}>
						{subtitle}
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
	font-weight: 500;
`;

const SubtitleStyled = styled.Text`
	color: ${colorPalette.secondary};
	font-weight: 600;
`;
