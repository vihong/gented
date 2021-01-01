import React from 'react';
import MesssagesScreen from './app/components/screens/MesssagesScreen';
import MyAccountScreen from './app/components/screens/MyAccountScreen';
import InputScreen from './app/components/screens/InputScreen';
import LoginScreen from './app/components/screens/LoginScreen';
import RegisterScreen from './app/components/screens/RegisterScreen';
import ProductEditScreen from './app/components/screens/ProductEditScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';

export default function App() {
	// return <MesssagesScreen />;
	// return <MyAccountScreen />;
	// return <InputScreen />;
	// return <LoginScreen />;
	// return <RegisterScreen />;
	// return <ProductEditScreen />;
	return (
		<NavigationContainer theme={navigationTheme}>
			<TabNavigator />
			{/* <AuthNavigator /> */}
		</NavigationContainer>
	);
	// return null;
}
