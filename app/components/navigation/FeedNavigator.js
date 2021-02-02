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
		<Stack.Navigator mode="screen" screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name="Fil d'actu"
				component={FeedScreen}
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
					headerStyle     : {
						// backgroundColor : colorPalette.secondary
					},
					headerBackTitle : false
				})}
			/>
		</Stack.Navigator>
	);
}
