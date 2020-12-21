import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';

function ViewImageScreen(props) {
	return (
		<ViewImageScreenStyled>
			<IconsContainerStyled>
				<DeleteIconStyled />
				<CloseIconStyled />
			</IconsContainerStyled>
			<ImageStyled
				source={require('../assets/images/living_room.jpg')}
				resizeMode="contain"
			/>
		</ViewImageScreenStyled>
	);
}

export default ViewImageScreen;

const ViewImageScreenStyled = styled.View`
	border: 1px solid black;
	flex: 1;
	background: #1d1d1d;
	align-items: center;
`;

const ImageStyled = styled.Image`
	width: 100%;
	height: 100%;
`;

const IconsContainerStyled = styled.SafeAreaView`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100%;
	width: 80%;
	position: absolute;
	top: 50px;
`;

const DeleteIconStyled = styled.View`
	height: 50px;
	width: 50px;
	background: #fc5c65;
`;

const CloseIconStyled = styled.View`
	height: 50px;
	width: 50px;
	background: #4ecdc4;
`;
