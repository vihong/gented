import React from 'react';
import { ImageBackground, Pressable, Platform } from 'react-native';
import styled from 'styled-components';
import ButtonAtom from '../components/atoms/ButtonAtom';
import TextAtom from '../components/atoms/TextAtom';
import Logo from '../components/molecules/Logo';
import colorPalette from '../config/colorPalette';

function WelcomeScreen(props) {
	return (
		<ImageBackground
			source={require('../assets/images/living_room.jpg')}
			style={{ width: '100%', height: '100%' }}
			blurRadius={Platform.OS === 'android' ? 3 : 10}
		>
			<WelcomeScreenStyled>
				<LogoContainerStyled>
					<Logo />
					<TextAtom style={{ fontSize: 30 }}>
						Old is the new trend
					</TextAtom>
				</LogoContainerStyled>
				<ButtonsContainerStyled>
					<ButtonAtom
						label="Log in"
						backgroundColor={colorPalette.primary}
					/>
					<ButtonAtom
						label="Register"
						backgroundColor={colorPalette.secondary}
						textColor={colorPalette.white}
					/>
				</ButtonsContainerStyled>
			</WelcomeScreenStyled>
		</ImageBackground>
	);
}

export default WelcomeScreen;

const WelcomeScreenStyled = styled.View`
	flex: 1;
	align-items: center;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	padding: 10px 5% 20px;
`;

const LogoContainerStyled = styled.SafeAreaView`
	position: absolute;
	top: 110px;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	justify-content: flex-start;
`;

const ButtonsContainerStyled = styled.View`width: 100%;`;
