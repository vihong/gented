import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import AppLink from '../molecules/AppLink';
import FeedScreen from '../screens/FeedScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ViewImageScreen from '../screens/ViewImageScreen';

const Stack = createStackNavigator();
export default function FeedStackNavigator() {
	return (
		<Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Feed"
				component={FeedScreen}
				options={{
					title       : 'Pokemon',
					headerStyle : { backgroundColor: colorPalette.primary }
				}}
			/>
			<Stack.Screen
				name="ProductDetails"
				component={ProductDetailsScreen}
				options={({ route }) => ({
					// title       : `Sakura ${route.params.id}`,
					headerStyle     : {
						// backgroundColor : colorPalette.secondary
					},
					headerBackTitle : false
				})}
			/>
			<Stack.Screen
				name="ViewImage"
				component={ViewImageScreen}
				options={({ route }) => ({
					// title       : `Sakura ${route.params.id}`,
					headerStyle     : {
						// backgroundColor : colorPalette.secondary
					},
					headerBackTitle : false
				})}
			/>
		</Stack.Navigator>
	);
}

const HomeScreen = ({ navigation }) => {
	return (
		<Screen style={{ alignItems: 'center' }}>
			<Text>Home</Text>
			<AppLink
				label="More details"
				pageDestination="Details"
				onPress={() => navigation.navigate(`Details`, { id: 1 })}
			/>
		</Screen>
	);
};

const DetailsScreen = ({ navigation, route }) => {
	console.log('route: ', route);
	return (
		<Screen>
			<Text>Details {route.params.id}</Text>
			<AppLink
				label="PUSH"
				onPress={() => navigation.push('Details', { id: 2 })}
				backgroundColor={colorPalette.secondary}
			/>
			<AppLink
				label="Go back (one step)"
				onPress={() => navigation.goBack()}
				backgroundColor={colorPalette.tertiary}
			/>
			<AppLink
				label="Go to Home Screen"
				onPress={() => navigation.popToTop()}
				backgroundColor={colorPalette.dark}
			/>
		</Screen>
	);
};
