import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';
import AuthContext from './app/components/context/context';

export default function App() {
	const [
		user,
		setUser
	] = useState();

	const AuthContextValue = {
		user,
		setUser
	};

	useEffect(
		() => {
			console.log('user: ', user);
		},
		[
			user
		]
	);

	return (
		<AuthContext.Provider value={AuthContextValue}>
			<NavigationContainer theme={navigationTheme}>
				{/* <TabNavigator /> */}
				<AuthNavigator />
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
