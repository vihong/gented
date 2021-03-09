import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
	GRAPHQL_YOGA_ENDPOINT,
	GRAPHQL_YOGA_ENDPOINT_PROD,
	PRISMA_ENDPOINT,
	PRISMA_ENDPOINT_PROD
} from '@env';

//@TODO: sort merge functions for add, delete, update
export const client = new ApolloClient({
	uri          : GRAPHQL_YOGA_ENDPOINT,
	cache        : new InMemoryCache(),
	typePolicies : {
		Query   : {
			fields : {
				products : {
					merge : true
				}
			}
		},
		Product : {
			fields : {
				images : {
					fields : {
						Image : {
							keyfields : [
								'id'
							]
						}
					}
				}
			}
		}
	}
});

//@TODO: sort backend resolver with updateProduct()
export const clientPrisma = new ApolloClient({
	uri   : PRISMA_ENDPOINT,
	cache : new InMemoryCache()
});
