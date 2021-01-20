import client from './client';

const endpoint = '/auth';

const loginRequest = (email, password) => client.post(endpoint, { email, password });

export default {
	loginRequest
};
