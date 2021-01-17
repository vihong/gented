import { create } from 'apisauce';
import { IP_ADDRESS } from '@env';

const apiClient = create({
	baseURL : IP_ADDRESS
});

export default apiClient;
