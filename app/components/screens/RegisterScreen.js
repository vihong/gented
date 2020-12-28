import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import AppField from '../molecules/AppField';
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
			`name: ${values.name} \n email: ${values.email} \n password: ${values.password}`
		);
	};

	return (
		<Screen style={styles.screen}>
			<View style={styles.form}>
				<AppForm
					initialValues={{ name: '', email: '', password: '' }}
					onSubmit={(values) => handleOnSubmit(values)}
					validationSchema={validationSchema}
				>
					<AppField name="name" icon="account" placeholder="Name" />
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
	screen        : {
		padding : 15
	},
	textInputAtom : {
		color : 'grey'
	},
	form          : {
		marginVertical : 20
	}
});
