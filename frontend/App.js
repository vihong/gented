import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';
import AuthContext from './app/components/contexts/AuthContext';
import { AppLoading } from 'expo';
import tokenStorage from './app/api/tokenStorage';

export default function App() {
	const [
		user,
		setUser
	] = useState();

	const [
		isAppReadyToLaunch,
		setIsAppReadyToLaunch
	] = useState(false);

	const authContextValue = {
		user,
		setUser
	};

	const getUserFromStorage = async () => {
		const userFromStorage = await tokenStorage.getUser();
		if (!userFromStorage) return;
		else setUser(userFromStorage);
	};

	if (!isAppReadyToLaunch)
		return (
			<AppLoading
				startAsync={getUserFromStorage}
				onFinish={() => setIsAppReadyToLaunch(true)}
			/>
		);
	return (
		<AuthContext.Provider value={authContextValue}>
			<NavigationContainer theme={navigationTheme}>
				{user ? <TabNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
