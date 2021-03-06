import React, { useRef, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '../../api/auth';

import Screen from '../atoms/Screen';
import Logo from '../molecules/Logo';
import AppField from '../molecules/AppField';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';
import AppText from '../atoms/AppText';
import defaultStyles from '../../config/defaultStyles';
import AppErrorMessage from '../molecules/AppErrorMessage';
import useAuth from '../hooks/useAuth';

const validationSchema = Yup.object().shape({
	email    : Yup.string().required().email().label('Email'),
	password : Yup.string().required().min(5).label('Password')
});

function LoginScreen({ navigation }) {
	const [
		hasLoginFailed,
		setHasLoginFailed
	] = useState(false);

	const ref_input2 = useRef();

	const { user, logIn } = useAuth();

	const handleOnSubmit = async ({ email, password }) => {
		const { data: dataToken, ok } = await auth.loginRequest(email, password);

		// reject
		if (!ok) return setHasLoginFailed(true);

		// resolve
		setHasLoginFailed(false);
		logIn(dataToken);
		// alert(`Welcome back ${user.name}!`);
		//@TODO : reimplement this because of the App.js ternary
		// console.log('user.name: ', user.name);
	};

	return (
		<Screen style={styles.screen}>
			<KeyboardAwareScrollView>
				<Logo
					style={defaultStyles.logo}
					image={require('../../assets/images/boeTiePrimary.png')}
					imageScale={0.3}
				/>
				<View style={styles.description}>
					<AppText style={styles.descriptionText}>Already have an account?</AppText>
				</View>
				<View style={styles.form}>
					<AppForm
						initialValues={{ email: 'james@domain.com', password: 'james' }}
						onSubmit={(values) => handleOnSubmit(values)}
						validationSchema={validationSchema}
					>
						<AppField
							name="email"
							autoFocus={true}
							style={styles.textInputAtom}
							icon="email"
							placeholder="Email"
							keyboardType="email-address"
							textContentType="emailAddress"
							autoCapitalize="none"
							onSubmitEditing={() => ref_input2.current.focus()}
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
							ref={ref_input2}
							onSubmitEditing={Keyboard.dismiss}
						/>
						<AppErrorMessage
							error="Invalid email or password"
							isVisible={hasLoginFailed}
							style={styles.error}
						/>
						<SubmitButton label="Login" />
					</AppForm>
				</View>
			</KeyboardAwareScrollView>
		</Screen>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	screen          : {
		padding : 15
	},
	description     : {
		alignItems : 'center'
	},
	descriptionText : {
		fontSize  : 22,
		marginTop : 20
	},
	textInputAtom   : {
		color : 'grey'
	},
	form            : {
		marginVertical : 30
	},
	error           : {
		justifyContent : 'center',
		paddingTop     : 20
	}
});
