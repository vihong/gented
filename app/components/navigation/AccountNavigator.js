import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MesssagesScreen from '../screens/MesssagesScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
export default function AccountNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Account"
				component={AccountScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Messages" component={MesssagesScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
