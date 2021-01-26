import React, { useRef, useState } from 'react';
import { Alert, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import colorPalette from '../../config/colorPalette';
import defaultStyles from '../../config/defaultStyles';
import AppText from '../atoms/AppText';
import Screen from '../atoms/Screen';
import AppField from '../molecules/AppField';
import Logo from '../molecules/Logo';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';
import auth from '../../api/auth';
import useAuth from '../hooks/useAuth';
import AppErrorMessage from '../molecules/AppErrorMessage';

const validationSchema = Yup.object().shape({
	name     : Yup.string().required().label('Name'),
	email    : Yup.string().required().email('Please enter a valid email').label('Email'),
	password : Yup.string().required().min(5).label('Password')
});

export default function RegisterScreen({ navigation }) {
	const [
		registerError,
		setRegisterError
	] = useState();

	const { logIn } = useAuth();

	const handleOnSubmit = async (inputValues) => {
		//@TODO : useHook
		const { data: newUserInfo, ok: okRegister } = await auth.registerRequest(inputValues);
		if (!okRegister) {
			if (newUserInfo.error) setRegisterError('Oops... ' + newUserInfo.error);
			else {
				setRegisterError('An unexpected error occured.');
				console.log('newUserInfo: ', newUserInfo);
			}
		}

		//@TODO: useHook
		const { data: dataToken, ok: okLogin } = await auth.loginRequest(
			newUserInfo.email,
			newUserInfo.password
		);
		if (!okLogin) return;
		logIn(dataToken);
		Alert.alert('', `Welcome onboard ${newUserInfo.name}!`);
		navigation.navigate('Feed', { username: values.name });
	};

	const ref_input2 = useRef();
	const ref_input3 = useRef();

	return (
		<Screen style={styles.screen}>
			<KeyboardAwareScrollView>
				<Logo
					style={defaultStyles.logo}
					image={require('../../assets/images/boeTiePrimary.png')}
					imageScale={0.3}
				/>
				<View style={styles.description}>
					<AppText style={styles.descriptionText}>First time here?</AppText>
					<AppText style={styles.descriptionText}>
						Create an account in a few sec :)
					</AppText>
				</View>
				<View style={styles.form}>
					<AppForm
						initialValues={{ name: '', email: '', password: '' }}
						onSubmit={(values) => handleOnSubmit(values)}
						validationSchema={validationSchema}
					>
						<AppErrorMessage
							error={registerError}
							isVisible={registerError ? true : false}
							style={styles.error}
						/>
						<AppField
							style={styles.textInputAtom}
							name="name"
							icon="account"
							placeholder="Name"
							// autoFocus={true}
							onSubmitEditing={() => ref_input2.current.focus()}
							blurOnSubmit={false}
							showValidation
						/>
						<AppField
							name="email"
							style={styles.textInputAtom}
							icon="email"
							placeholder="Email"
							keyboardType="email-address"
							textContentType="emailAddress"
							autoCapitalize="none"
							ref={ref_input2}
							onSubmitEditing={() => ref_input3.current.focus()}
							blurOnSubmit={false}
							showValidation
						/>
						<AppField
							name="password"
							style={styles.textInputAtom}
							icon="lock"
							placeholder="Password"
							textContentType="password"
							autoCapitalize="none"
							autoCorrect={false}
							ref={ref_input3}
							secureTextEntry
							onSubmitEditing={Keyboard.dismiss}
							blurOnSubmit={false}
							showValidation
						/>
						<SubmitButton label="Register" />
					</AppForm>
				</View>
			</KeyboardAwareScrollView>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen          : {
		padding : 15
	},

	description     : {
		alignItems : 'center',
		marginTop  : 20
	},
	descriptionText : {
		fontSize   : 22,
		alignItems : 'center'
	},
	textInputAtom   : {
		color : 'grey'
	},
	form            : {
		marginVertical : 20
	},
	error           : {
		justifyContent : 'center',
		paddingTop     : 20,
		fontWeight     : 'bold'
	}
});
