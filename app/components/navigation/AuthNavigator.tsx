import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import TabNavigator from './TabNavigator'

export type RootStackParamList = {
	Welcome: undefined
	Login: undefined
	Register: undefined
	FeedNavigator: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

export default function AuthNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Welcome"
				component={WelcomeScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerTitle: '' }} />
			<Stack.Screen
				name="Register"
				component={RegisterScreen}
				options={{ headerTitle: '' }}
			/>
			<Stack.Screen
				name="FeedNavigator"
				component={TabNavigator}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
}
