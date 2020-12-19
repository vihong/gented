import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { AppLoading } from 'expo';
import {
	useFonts,
	AmaticSC_400Regular,
	AmaticSC_700Bold
} from '@expo-google-fonts/amatic-sc';

export default function App() {
	let [
		fontsLoaded,
		error
	] = useFonts({
		AmaticSC_400Regular,
		AmaticSC_700Bold
	});

	if (!fontsLoaded) return <AppLoading />;
	return (
		<View style={styles.container}>
			<Text
				style={{
					fontSize   : 80,
					fontFamily : 'AmaticSC_400Regular',
					color      : '#FFF'
				}}
			>
				Gented
			</Text>
			<View style={{ objectFit: 'cover' }}>
				<Image
					source={require('./assets/images/boeTie.png')}
					style={{
						transform : [
							{ scale: 0.5 }
						]
					}}
				/>
			</View>
			{/* <Text
				style={{
					fontSize   : 30,
					marginTop  : 50,
					fontFamily : 'AmaticSC_400Regular',
					color      : '#FFF'
				}}
			>
				Old is the new trend
			</Text> */}
			{/* <StatusBar style="auto" /> */}
		</View>
	);
	r;
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#B22F44',
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});
