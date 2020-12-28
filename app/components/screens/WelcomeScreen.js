import React from 'react';
import { ImageBackground, Pressable, Platform, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { AppLoading } from 'expo';
import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc';

import ButtonAtom from '../atoms/ButtonAtom';
import AppText from '../atoms/AppText';
import Logo from '../molecules/Logo';
import colorPalette from '../../config/colorPalette';
import defaultStyles from '../../config/defaultStyles';

function WelcomeScreen(props) {
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	});

	if (!fontsLoaded) return <AppLoading />;

	return (
		<ImageBackground
			source={require('../../assets/images/living_room.jpg')}
			style={{ width: '100%', height: '100%' }}
			blurRadius={Platform.OS === 'android' ? 3 : 10}
		>
			<WelcomeScreenStyled>
				<LogoContainerStyled>
					<Logo />
					<AppText
						style={[
							defaultStyles.textLogo,
							styles.tagline
						]}
					>
						Old is the new trend
					</AppText>
				</LogoContainerStyled>
				<ButtonsContainerStyled>
					<ButtonAtom
						label="Log in"
						backgroundColor={colorPalette.primary}
						color={colorPalette.white}
					/>
					<ButtonAtom
						label="Register"
						backgroundColor={colorPalette.secondary}
						color={colorPalette.white}
					/>
				</ButtonsContainerStyled>
			</WelcomeScreenStyled>
		</ImageBackground>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	tagline : {
		fontSize : 30
	}
});

const WelcomeScreenStyled = styled.View`
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
