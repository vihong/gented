import React from 'react';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function Card(props) {
	const { title, subtitle, image, style } = props;
	return (
		<CardStyled style={style}>
			<ImageStyled source={image} resizeMode="cover" />
			<DescriptionStyled>
				<TitleStyled numberOfLines={1}>{title}</TitleStyled>
				<SubtitleStyled numberOfLines={1}>{subtitle}</SubtitleStyled>
			</DescriptionStyled>
		</CardStyled>
	);
}

export default Card;

const CardStyled = styled.View`
	/* height: 40%; */
	width: 100%;
	background: ${colorPalette.white};
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	margin-bottom: 20px;
	overflow: hidden;
`;

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
