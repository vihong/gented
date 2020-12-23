import React from 'react';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';

function Card(props) {
	const { title, subtitle, image } = props;
	return (
		<CardStyled>
			<ImageStyled source={image} resizeMode="cover" />
			<DescriptionStyled>
				<TitleStyled numberOfLines={1}>{title}</TitleStyled>
				<SubStyled>{subtitle}</SubStyled>
			</DescriptionStyled>
		</CardStyled>
	);
}

export default Card;

const CardStyled = styled.View`
	height: 40%;
	width: 100%;
	background: ${colorPalette.white};
	border-radius: 20px;
	display: flex;
	justify-content: flex-start;
	margin: 20px;
`;

const ImageStyled = styled.Image`
	max-height: 70%;
	width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

const DescriptionStyled = styled.View`
	padding: 15px;
	min-height: 30%;
	flex: 1;
	justify-content: space-between;
`;

const TitleStyled = styled.Text`
	color: ${colorPalette.black};
	font-weight: 500;
	width: 90%;
`;

const SubStyled = styled.Text`
	color: ${colorPalette.secondary};
	font-weight: 600;
`;
