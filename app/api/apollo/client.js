import { ApolloClient, InMemoryCache } from '@apollo/client';
import { APOLLO_CLIENT_ENDPOINT } from '@env';

const client = new ApolloClient({
	uri   : APOLLO_CLIENT_ENDPOINT,
	cache : new InMemoryCache()
});

export default client;
