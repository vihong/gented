import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import Screen from '../atoms/Screen';
import Logo from '../molecules/Logo';
import AppField from '../molecules/AppField';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';
import colorPalette from '../../config/colorPalette';

const validationSchema = Yup.object().shape({
	email    : Yup.string().required().email().label('Email'),
	password : Yup.string().required().min(5).label('Password')
});

function LoginScreen(props) {
	return (
		<Screen style={styles.screen}>
			<Logo
				style={styles.logo}
				image={require('../../assets/images/boeTiePrimary.png')}
			/>

			<View style={styles.form}>
				<AppForm
					initialValues={{ email: '', password: '' }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
					<AppField
						name="email"
						style={styles.textInputAtom}
						icon="email"
						placeholder="Email"
						keyboardType="email-address"
						textContentType="emailAddress"
						autoCapitalize="none"
					/>
					<AppField
						name="password"
						style={styles.textInputAtom}
						icon="lock"
						placeholder="Password"
						textContentType="password"
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry
					/>
					<SubmitButton
						label="login"
						color={colorPalette.white}
						backgroundColor={colorPalette.primary}
					/>
				</AppForm>
			</View>
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
	},
	form          : {
		marginVertical : 40
	}
});
