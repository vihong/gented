import _ from 'lodash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import colorPalette from '../../config/colorPalette';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FeedNavigator from './FeedNavigator';
import ProductAddScreen from '../screens/ProductAddScreen';
import AccountNavigator from './AccountNavigator';
import ProductEditButton from '../molecules/ProductEditButton';
import routes from './routes';
import AuthContext from '../contexts/AuthContext';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
	const { user } = useContext(AuthContext);

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
			initialRouteName={routes.ACCOUNT}
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
				component={ProductAddScreen}
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
				name="Account"
				component={AccountNavigator}
				options={{
					tabBarIcon  : ({ size, color }) => (
						<MaterialCommunityIcons name="account" size={size} color={color} />
					),
					tabBarLabel : user.name
				}}
			/>
		</Tab.Navigator>
	);
}
