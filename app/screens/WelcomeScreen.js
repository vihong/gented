import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../LogoImage';
import LogoText from '../../LogoText';

function WelcomeScreen(props) {
	return (
		<WelcomeScreenStyled>
			<LogoStyled>
				<LogoText />
				<LogoImage />
			</LogoStyled>
			<ButtonsContainer>
				<LoginButtonStyled />
				<RegisterButtonStyled />
			</ButtonsContainer>
		</WelcomeScreenStyled>
	);
}

export default WelcomeScreen;

const WelcomeScreenStyled = styled.View`
	border: 1px solid black;
	flex: 1;
	background: #b22f44;
	align-items: center;
`;

const LogoStyled = styled.SafeAreaView`
	justify-content: center;
	align-items: center;
	justify-content: flex-start;
	position: absolute;
	top: 100px;
`;

const ButtonsContainer = styled.View`
	display: flex;
	flex: 1;
	height: 100%;
	width: 100%;
	justify-content: flex-end;
	align-items: flex-end;
`;

const LoginButtonStyled = styled.View`
	height: 70px;
	width: 100%;
	background: #ead18b;
`;

const RegisterButtonStyled = styled.View`
	height: 70px;
	width: 100%;
	background: #4ecdc4;
`;
