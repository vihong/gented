import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';
import LoginScreen from './app/components/screens/LoginScreen';

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			{/* <TabNavigator /> */}
			<AuthNavigator />
		</NavigationContainer>
	);
}
