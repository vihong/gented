import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import Screen from '../atoms/Screen';
import AppLink from '../molecules/AppLink';
import WardrobeScreen from '../screens/WardrobeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ViewImageScreen from '../screens/ViewImageScreen';

const Stack = createStackNavigator();
export default function WardrobeNavigator() {
	return (
		<Stack.Navigator mode="screen">
			<Stack.Screen
				name="News Feed"
				component={WardrobeScreen}
				options={{
					headerStyle : { backgroundColor: colorPalette.lightgrey },
					headerShown : true
					// headerLeft  : null
				}}
			/>
			<Stack.Screen
				name="ProductDetails"
				component={ProductDetailsScreen}
				options={({ route }) => ({
					title                    : '',
					headerShown              : true,
					headerStyle              : {
						// backgroundColor : colorPalette.secondary
						// color : 'white'
					},
					headerBackTitleStyle     : { color: 'white' },
					headerTintColor          : 'white',
					headerTransparent        : true,
					headerLeftContainerStyle : { paddingLeft: 10 },

					headerBackTitle          : 'Retour'
				})}
			/>
			<Stack.Screen
				name="ViewImage"
				component={ViewImageScreen}
				options={({ route }) => ({
					// title       : `Sakura ${route.params.id}`,
					headerShown     : false,
					headerStyle     : {
						// backgroundColor : colorPalette.secondary
					},
					headerBackTitle : false
				})}
			/>
		</Stack.Navigator>
	);
}
