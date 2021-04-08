import React from 'react'
import { ImageBackground, Pressable, Platform, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { AppLoading } from 'expo'
import { useFonts, AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'

import AppButton from '../atoms/AppButton'
import AppText from '../atoms/AppText'
import Logo from '../molecules/Logo'
import colorPalette from '../../config/colorPalette'
import defaultStyles from '../../config/defaultStyles'
import AppLink from '../molecules/AppLink'
import routes from '../navigation/routes'

type Props = {
	navigation?: any
}

function WelcomeScreen({ navigation }: Props) {
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	})

	if (!fontsLoaded) return <AppLoading />

	return (
		<ImageBackground
			source={require('../../assets/images/hypster.jpg')}
			style={{ width: '100%', height: '100%' }}
			blurRadius={Platform.OS === 'android' ? 1 : 1}
		>
			<WelcomeScreenStyled>
				<LogoContainerStyled>
					{/* @ts-ignore */}
					<Logo />
					{/* @ts-ignore */}
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
					<AppLink
						label="Log in"
						backgroundColor={colorPalette.white}
						color={colorPalette.dark}
						onPress={() => navigation.navigate(routes.LOGIN)}
					/>
					{/* @ts-ignore */}
					<AppButton
						label="Register"
						backgroundColor={colorPalette.dark}
						color={colorPalette.white}
						onPress={() => navigation.navigate(routes.REGISTER)}
					/>
				</ButtonsContainerStyled>
			</WelcomeScreenStyled>
		</ImageBackground>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({
	tagline: {
		fontSize: 35,
		fontFamily: 'AmaticSC_700Bold',
		marginTop: 30,
		color: colorPalette.grey
	}
})

const WelcomeScreenStyled = styled.View`
	align-items: center;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	padding: 10px 5% 20px;
`

const LogoContainerStyled = styled.SafeAreaView`
	position: absolute;
	top: 110px;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	justify-content: flex-start;
`

const ButtonsContainerStyled = styled.View`width: 100%;`
