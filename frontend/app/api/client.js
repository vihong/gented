import { create } from 'apisauce';
import { IP_ADDRESS } from '@env';
import tokenStorage from './tokenStorage';

const apiClient = create({
	baseURL : IP_ADDRESS
});

apiClient.addAsyncRequestTransform(async (request) => {
	const validToken = await tokenStorage.getToken;
	if (!validToken) return;
	request.headers['x-auth-token'] = validToken;
});

export default apiClient;
