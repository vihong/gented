import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text } from 'react-native';
import Screen from '../components/atoms/Screen';
import Logo from '../components/molecules/Logo';
import TextInputAtom from '../components/atoms/TextInputAtom';
import colorPalette from '../config/colorPalette';
import ButtonApp from '../components/atoms/ButtonAtom';

function LoginScreen(props) {
	const [
		email,
		setEmail
	] = useState();
	const [
		password,
		setPassword
	] = useState();

	return (
		<Screen style={styles.screen}>
			<Logo
				style={styles.logo}
				image={require('../assets/images/boeTiePrimary.png')}
			/>
			<TextInputAtom
				style={styles.textInputAtom}
				icon="email"
				placeholder="Email"
				keyboardType="email-address"
				textContentType="emailAddress"
				onChangeText={(emailInput) => setEmail(emailInput)}
			/>
			<TextInputAtom
				style={styles.textInputAtom}
				icon="lock"
				placeholder="Password"
				textContentType="password"
				autoCapitalize="none"
				autoCorrect={false}
				secureTextEntry
				onChangeText={(passwordInput) => setPassword(passwordInput)}
			/>
			<ButtonApp
				label="login"
				color={colorPalette.white}
				backgroundColor={colorPalette.primary}
				onPress={() =>
					alert(`email: ${email} \n password: ${password}`)}
			/>
		</Screen>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	screen        : {
		padding : 15
	},
	logo          : {
		color : colorPalette.primary
	},
	textInputAtom : {
		color : 'grey'
	}
});
