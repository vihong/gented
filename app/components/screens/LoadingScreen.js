import React from 'react';
import styled from 'styled-components';
import colorPalette from '../../config/colorPalette';
import Logo from '../molecules/Logo';

function LoadingScreen(props) {
	return (
		<LoadingScreenStyled>
			<LogoStyled>
				<Logo />
			</LogoStyled>
		</LoadingScreenStyled>
	);
}

export default LoadingScreen;

const LoadingScreenStyled = styled.View`
	background: ${colorPalette.backgroundRed};
	align-items: center;
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;
`;

const LogoStyled = styled.SafeAreaView`
	justify-content: center;
	align-items: center;
`;
