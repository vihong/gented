import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MesssagesScreen from '../screens/MesssagesScreen';
import AccountScreen from '../screens/AccountScreen';
import MyProductsScreen from '../screens/MyProductsScreen';
import routes from './routes';
import colorPalette from '../../config/colorPalette';
import useAuth from '../hooks/useAuth';

const Stack = createStackNavigator();
export default function AccountNavigator() {
	const { user } = useAuth();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={routes.ACCOUNT}
				component={AccountScreen}
				options={{
					title       : user.name,
					headerShown : false
				}}
			/>
			<Stack.Screen
				name={routes.MY_PRODUCTS}
				component={MyProductsScreen}
				options={{
					title       : 'My Wardrobe',
					headerStyle : {
						backgroundColor : colorPalette.backgroundGrey
					}
				}}
			/>
			<Stack.Screen
				name={routes.MESSAGES}
				component={MesssagesScreen}
				options={{ title: 'My messages' }}
			/>
		</Stack.Navigator>
	);
}
