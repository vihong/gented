import React, { useRef } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Screen from '../atoms/Screen';
import Logo from '../molecules/Logo';
import AppField from '../molecules/AppField';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';
import colorPalette from '../../config/colorPalette';
import AppText from '../atoms/AppText';
import defaultStyles from '../../config/defaultStyles';

const validationSchema = Yup.object().shape({
	email    : Yup.string().required().email().label('Email'),
	password : Yup.string().required().min(5).label('Password')
});

function LoginScreen(props) {
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
					<AppText style={styles.descriptionText}>
						Already have an account?
					</AppText>
				</View>
				<View style={styles.form}>
					<AppForm
						initialValues={{ email: '', password: '' }}
						onSubmit={(values) => alert(`Welcome back!`)}
						validationSchema={validationSchema}
					>
						<AppField
							// autoFocus={true}
							name="email"
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
						<SubmitButton label="login" />
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
	}
});
