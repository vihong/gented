import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import colorPalette from '../../config/colorPalette';
import defaultStyles from '../../config/defaultStyles';
import AppText from '../atoms/AppText';
import Screen from '../atoms/Screen';
import AppField from '../molecules/AppField';
import Logo from '../molecules/Logo';
import SubmitButton from '../molecules/SubmitButton';
import AppForm from '../organisms/AppForm';

const validationSchema = Yup.object().shape({
	name     : Yup.string().required().label('Name'),
	email    : Yup.string().required().email().label('Email'),
	password : Yup.string().required().min(5).label('Password')
});

export default function RegisterScreen() {
	const handleOnSubmit = (values) => {
		alert(
			`Account created!\nIt's good to have you onboard ${values.name} `
		);
	};

	return (
		<Screen style={styles.screen}>
			<Logo
				style={defaultStyles.logo}
				image={require('../../assets/images/boeTiePrimary.png')}
				imageScale={0.3}
			/>
			<View style={styles.description}>
				<AppText style={styles.descriptionText}>
					First time here?
				</AppText>
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
					<AppField
						style={styles.textInputAtom}
						name="name"
						icon="account"
						placeholder="Name"
					/>
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
						label="register"
						color={colorPalette.white}
						backgroundColor={colorPalette.primary}
					/>
				</AppForm>
			</View>
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
	}
});
