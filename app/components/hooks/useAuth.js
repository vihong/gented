import jwtDecode from 'jwt-decode';
import { useContext } from 'react';
import { Alert } from 'react-native';
import tokenStorage from '../../api/tokenStorage';
import AuthContext from '../contexts/AuthContext';

/**
 *

@example
```const { user, login, logOut } = useAuth();```

```login(dataToken)```

@remarks
I purposefully included Alert.alert() in the hook as it is unlikely
the dev may want the user to be able to logOut without the user's permission
as it would lead to very bad user experience.
@param none
@returns userInfo, logIn (camelCase), logOut functions

 */

const useAuth = () => {
	const { user, setUser } = useContext(AuthContext);

	const logIn = (validToken) => {
		const userInfo = jwtDecode(validToken);
		setUser(userInfo);
		tokenStorage.storeToken(validToken);
	};

	const logOut = () => {
		Alert.alert('', 'Are you sure you want to log out?', [
			{
				text    : 'Yes',
				onPress : () => {
					setUser(null);
					tokenStorage.removeToken();
				}
			},
			{ text: 'No' }
		]);
	};

	return { user, logIn, logOut };
};

export default useAuth;

/*
Custom Hooks :
Le but c'est d'ENCAPSULER des éléments COHERENTS ensemble (data et functions)
qu'on est susceptible d'utiliser ailleurs ☝️
When building a custom hook, c'est comme useMutation.
On créé "a coherent bag of functions that are related to each other"
Souvent, they are related to each other because they have a setState linked
to each other.
Mais en simple, on créé une grande fonction (le hook) qui va contenir plusieurs éléments
(data, error, loading, functions) qu'on va pouvoir extraire du hook
Idéalement, faut que le hook n'ait pas besoin de paramètre pour être le plus générique
possible et immédiatement utilisable.
useAuth est un très bon exemple.
*/
