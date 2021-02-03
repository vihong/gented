import { create } from 'apisauce';

const apiSauceClient = create({
	baseURL : 'https://res.cloudinary.com/probamaths'
});

export default apiSauceClient;
