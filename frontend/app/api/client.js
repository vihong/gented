import { create } from 'apisauce';
import { IP_ADDRESS } from '@env';
import authStorage from '../config/auth/storage';

const apiClient = create({
	baseURL : IP_ADDRESS
});

apiClient.addAsyncRequestTransform(async (request) => {
	const validToken = await authStorage.getToken;
	if (!validToken) return;
	request.headers['x-auth-token'] = validToken;
});

export default apiClient;
