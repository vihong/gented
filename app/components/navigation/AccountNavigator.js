import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MesssagesScreen from '../screens/MesssagesScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const Stack = createStackNavigator();
export default function AccountNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Account"
				component={MyAccountScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="Messages" component={MesssagesScreen} />
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({});
