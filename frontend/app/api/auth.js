import client from './client';

const endpoint = '/auth';
const endpoint2 = '/users';

const loginRequest = (email, password) => client.post(endpoint, { email, password });

const registerRequest = (registerInfo) => client.post(endpoint2, registerInfo);

export default {
	loginRequest,
	registerRequest
};
