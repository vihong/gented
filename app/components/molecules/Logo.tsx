import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import defaultStyles from '../../config/defaultStyles'
import AppText from '../atoms/AppText'
import { useFonts, AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { AppLoading } from 'expo'

interface LogoProps {
	style?: any //@TODO: add StyleProp
	image?: string
	imageScale?: number
}

function Logo({ style, image, imageScale }: LogoProps) {
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	})

	if (!fontsLoaded) return <AppLoading />

	return (
		<View style={styles.container}>
			{/* @ts-ignore */}
			<AppText
				style={[
					defaultStyles.textLogo,
					style
				]}
			>
				Gented
			</AppText>
			<Image
				source={image ? image : require('../../assets/images/boeTiePrimary.png')}
				style={{
					transform: [
						{ scale: imageScale ? imageScale : 0.5 }
					]
				}}
			/>
		</View>
	)
}

export default Logo

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center'
	}
})
