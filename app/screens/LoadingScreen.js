import React from 'react';
import styled from 'styled-components';
import colorPalette from '../config/colorPalette';
import Logo from '../components/molecules/Logo';

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
	flex: 1;
	background: ${colorPalette.background};
	align-items: center;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	padding-bottom: 20px;
`;

const LogoStyled = styled.SafeAreaView`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
