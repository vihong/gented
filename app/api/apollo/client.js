import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_YOGA_ENDPOINT, PRISMA_ENDPOINT } from '@env';

export const client = new ApolloClient({
	uri   : GRAPHQL_YOGA_ENDPOINT,
	cache : new InMemoryCache()
});

//@TODO: sort backend resolver with updateProduct()
export const clientPrisma = new ApolloClient({
	uri   : PRISMA_ENDPOINT,
	cache : new InMemoryCache()
});
