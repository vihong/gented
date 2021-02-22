import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import colorPalette from '../../config/colorPalette';
import WardrobeScreen from '../screens/WardrobeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ViewImageScreen from '../screens/ViewImageScreen';

const Stack = createStackNavigator();
export default function WardrobeNavigator({ navigation }) {
	return (
		<Stack.Navigator mode="screen">
			<Stack.Screen
				name="MyWardrobe"
				component={WardrobeScreen}
				options={{
					title       : 'My Wardrobe',
					headerStyle : { backgroundColor: colorPalette.lightgrey },
					headerShown : true
				}}
			/>
			<Stack.Screen
				name="ProductDetails"
				component={ProductDetailsScreen}
				options={{ headerShown: false }}
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
