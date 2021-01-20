import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

//1. store token
const storeToken = async (authToken) => {
	try {
		await SecureStore.setItemAsync(key, authToken);
	} catch (error) {
		console.log('Error storing the auth token', error);
	}
};

//2. get token
const getToken = async () => {
	try {
		const authToken = await SecureStore.getItemAsync(key);
		return authToken;
	} catch (error) {
		console.log('Error reading the auth token', error);
	}
};

//3. remove token
const removeToken = async () => {
	try {
		await SecureStore.deleteItemAsync(key);
	} catch (error) {
		console.log('Error deleting the auth token', error);
	}
};

const authStorage = {
	getToken,
	removeToken,
	storeToken
};

export default authStorage;
