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
export default function FeedNavigator() {
	return (
		<Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Feed"
				component={FeedScreen}
				options={{
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