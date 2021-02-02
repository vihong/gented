import { create } from 'apisauce';
import { API_SAUCE_ENDPOINT } from '@env';
import tokenStorage from './tokenStorage';

const apiClient = create({
	baseURL : API_SAUCE_ENDPOINT
});

apiClient.addAsyncRequestTransform(async (request) => {
	const validToken = await tokenStorage.getToken;
	if (!validToken) return;
	request.headers['x-auth-token'] = validToken;
});

export default apiClient;
