import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/atoms/Screen';
import Logo from '../components/molecules/Logo';
import AppTextInput from '../components/atoms/AppTextInput';
import colorPalette from '../config/colorPalette';
import ButtonApp from '../components/atoms/ButtonAtom';
import AppText from '../components/atoms/AppText';
import AppErrorMessage from '../components/molecules/AppErrorMessage';

const validationSchema = Yup.object().shape({
	email    : Yup.string().required().email().label('Email'),
	password : Yup.string().required().min(5).label('Password')
});

function LoginScreen(props) {
	return (
		<Screen style={styles.screen}>
			<Logo
				style={styles.logo}
				image={require('../assets/images/boeTiePrimary.png')}
			/>

			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleSubmit,
					errors,
					setFieldTouched,
					touched
				}) => (
					<Fragment>
						<AppTextInput
							style={styles.textInputAtom}
							icon="email"
							placeholder="Email"
							keyboardType="email-address"
							textContentType="emailAddress"
							autoCapitalize="none"
							onChangeText={handleChange('email')}
							onBlur={() => setFieldTouched('email')}
						/>
						<AppErrorMessage
							error={errors.email}
							isVisible={touched.email}
						/>
						<AppTextInput
							style={styles.textInputAtom}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							autoCapitalize="none"
							autoCorrect={false}
							secureTextEntry
							onChangeText={handleChange('password')}
							onBlur={() => setFieldTouched('password')}
						/>
						<AppErrorMessage
							error={errors.password}
							isVisible={touched.password}
						/>
						<ButtonApp
							label="login"
							color={colorPalette.white}
							backgroundColor={colorPalette.primary}
							onPress={handleSubmit}
						/>
					</Fragment>
				)}
			</Formik>
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
