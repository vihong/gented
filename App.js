import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/components/navigation/AuthNavigator';
import navigationTheme from './app/components/navigation/navigationTheme';
import TabNavigator from './app/components/navigation/TabNavigator';
import AuthContext from './app/components/contexts/AuthContext';
import { AppLoading } from 'expo';
import tokenStorage from './app/api/tokenStorage';
import { ApolloProvider } from '@apollo/client';
import client from './app/api/apollo/client';

export default function App() {
	const [
		user,
		setUser
	] = useState();

	const [
		isAppReady,
		setIsAppReady
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

	if (!isAppReady)
		return <AppLoading startAsync={getUserFromStorage} onFinish={() => setIsAppReady(true)} />;
	return (
		<AuthContext.Provider value={authContextValue}>
			<ApolloProvider client={client}>
				<NavigationContainer theme={navigationTheme}>
					{user ? <TabNavigator /> : <AuthNavigator />}
				</NavigationContainer>
			</ApolloProvider>
		</AuthContext.Provider>
	);
}
