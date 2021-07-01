import React, { useState } from 'react'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import _ from 'lodash'
import 'intl'
import 'intl/locale-data/jsonp/en'

import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/components/navigation/AuthNavigator'
import navigationTheme from './app/components/navigation/navigationTheme'
import TabNavigator from './app/components/navigation/TabNavigator'
import AuthContext from './app/components/contexts/AuthContext'
import { AppLoading } from 'expo'
import tokenStorage from './app/api/tokenStorage'
import { ApolloProvider } from '@apollo/client'
import { client } from './app/api/apollo/client'
import { LogBox } from 'react-native'

export default function App() {
	const [
		user,
		setUser
	] = useState()

	const [
		isAppReady,
		setIsAppReady
	] = useState(false)

	const authContextValue = {
		user,
		setUser
	}

	const isUserLoggedIn: boolean = !_.isEmpty(user)

	const getUserFromStorage = async () => {
		const userFromStorage: any = await tokenStorage.getUser()
		if (!userFromStorage) return
		setUser(userFromStorage)
	}

	if (!isAppReady)
		return <AppLoading startAsync={getUserFromStorage} onFinish={() => setIsAppReady(true)} />
	return (
		<AuthContext.Provider value={authContextValue}>
			<ActionSheetProvider>
				<ApolloProvider client={client}>
					<NavigationContainer theme={navigationTheme}>
						{isUserLoggedIn ? <TabNavigator /> : <AuthNavigator />}
					</NavigationContainer>
				</ApolloProvider>
			</ActionSheetProvider>
		</AuthContext.Provider>
	)
}

LogBox.ignoreAllLogs()
