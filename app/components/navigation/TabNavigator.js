import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colorPalette from '../../config/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from '../atoms/Screen';
import FeedStackNavigator from './FeedStackNavigator';
import ProductEditScreen from '../screens/ProductEditScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import AccountNavigator from './AccountNavigator';
import ProductEditButton from '../molecules/ProductEditButton';
import routes from './routes';

const Tab = createBottomTabNavigator();
export default function AppTabNavigator() {
	return (
		<Tab.Navigator
			tabBarOptions={{
				// activeBackgroundColor   : colorPalette.danger,
				// activeTintColor         : colorPalette.white,
				inactiveBackgroundColor : colorPalette.white,
				inactiveTintColor       : colorPalette.black,
				style                   : {
					minHeight : 65
				},
				tabStyle                : {
					height : 50
				},
				labelStyle              : {
					bottom : 5
				}
			}}
		>
			<Tab.Screen
				name="Feed"
				component={FeedStackNavigator}
				options={{
					tabBarIcon : ({ size, color }) => (
						<MaterialCommunityIcons
							name="home"
							size={size}
							color={color}
						/>
					)
				}}
			/>
			<Tab.Screen
				name="ProductEdit"
				component={ProductEditScreen}
				options={({ navigation }) => ({
					tabBarButton : () => (
						<ProductEditButton
							onPress={() =>
								navigation.navigate(routes.PRODUCT_EDIT)}
						/>
					),
					tabBarIcon   : ({ size, color }) => (
						<MaterialCommunityIcons
							name="plus-circle-outline"
							size={size}
							color={color}
						/>
					)
				})}
			/>
			<Tab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					tabBarIcon : ({ size, color }) => (
						<MaterialCommunityIcons
							name="account"
							size={size}
							color={color}
						/>
					)
				}}
			/>
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({});

const Account = () => {
	return (
		<Screen>
			<Text>Account</Text>
		</Screen>
	);
};
