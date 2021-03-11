import { ApolloClient, InMemoryCache } from '@apollo/client';
import {
	YOGA_ENDPOINT_DEV,
	YOGA_ENDPOINT_PROD,
	PRISMA_ENDPOINT_DEV,
	PRISMA_ENDPOINT_PROD
} from '@env';

//@TODO: sort merge functions for add, delete, update
export const client = new ApolloClient({
	uri          : YOGA_ENDPOINT_DEV,
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
	uri   : PRISMA_ENDPOINT_DEV,
	cache : new InMemoryCache()
});
