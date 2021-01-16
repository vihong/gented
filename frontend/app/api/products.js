import client from './client';

const endpoint = 'listings';
const getProducts = () => client.get(endpoint);

export default {
	getProducts
};
