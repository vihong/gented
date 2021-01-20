import _ from 'lodash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import colorPalette from '../../config/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import ProductEditScreen from '../screens/ProductEditScreen';
import AccountNavigator from './AccountNavigator';
import ProductEditButton from '../molecules/ProductEditButton';
import routes from './routes';
import { getUsername } from '../../utils/user';

const Tab = createBottomTabNavigator();
export default function TabNavigator({ route }) {
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
				component={FeedNavigator}
				options={{
					tabBarIcon : ({ size, color }) => (
						<MaterialCommunityIcons name="home" size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen
				name="ProductEdit"
				component={ProductEditScreen}
				options={({ navigation }) => ({
					tabBarButton : () => (
						<ProductEditButton
							onPress={() => navigation.navigate(routes.PRODUCT_EDIT)}
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
				name={'Account'}
				component={AccountNavigator}
				options={{
					tabBarIcon : ({ size, color }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					)
				}}
			/>
		</Tab.Navigator>
	);
}
