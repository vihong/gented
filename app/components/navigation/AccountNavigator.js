import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MesssagesScreen from '../screens/MesssagesScreen';
import AccountScreen from '../screens/AccountScreen';
import routes from './routes';
import useAuth from '../hooks/useAuth';
import WardrobeNavigator from './WardrobeNavigator';
import ProductEditScreen from '../screens/ProductEditScreen';

const Stack = createStackNavigator();
export default function AccountNavigator() {
	const { user } = useAuth();
	return (
		<Stack.Navigator initialRouteName={routes.ACCOUNT}>
			<Stack.Screen
				name={routes.ACCOUNT}
				component={AccountScreen}
				options={{
					title       : user.name,
					headerShown : false
				}}
			/>
			<Stack.Screen
				name={routes.WARDROBE}
				component={WardrobeNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={routes.PRODUCT_EDIT}
				component={ProductEditScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={routes.MESSAGES}
				component={MesssagesScreen}
				options={{ title: 'My messages' }}
			/>
		</Stack.Navigator>
	);
}
