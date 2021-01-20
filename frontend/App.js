import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';
import AuthContext from './app/components/contexts/AuthContext';
import authStorage from './app/config/auth/storage';
import { AppLoading } from 'expo';

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
		const userFromStorage = await authStorage.getUser();
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
