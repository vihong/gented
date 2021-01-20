import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';
import AuthContext from './app/components/contexts/AuthContext';
import authStorage from './app/config/auth/storage';
import jwtDecode from 'jwt-decode';

export default function App() {
	const [
		user,
		setUser
	] = useState();

	const authContextValue = {
		user,
		setUser
	};

	const getTokenFromStorage = async () => {
		const token = await authStorage.getToken();
		if (!token) return;
		else setUser(jwtDecode(token));
	};

	useEffect(() => {
		getTokenFromStorage();
	}, []);

	return (
		<AuthContext.Provider value={authContextValue}>
			<NavigationContainer theme={navigationTheme}>
				{user ? <TabNavigator /> : <AuthNavigator />}
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
