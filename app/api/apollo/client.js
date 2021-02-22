import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GRAPHQL_YOGA_ENDPOINT, PRISMA_ENDPOINT } from '@env';

export const client = new ApolloClient({
	uri   : GRAPHQL_YOGA_ENDPOINT,
	cache : new InMemoryCache()
});

//@TODO: sort backend resolver with updateProduct()
//@TODO: sort merge functions for add, delete, update
export const clientPrisma = new ApolloClient({
	uri   : PRISMA_ENDPOINT,
	cache : new InMemoryCache()
	// typePolicies : {
	// Query : {
	// 	fields : {
	// 		Product : {
	// 			merge : true
	// 		}
	// 	}
	// }
	// Product : {
	// 	fields : {
	// 		images : {
	// 			fields : {
	// 				Image : {
	// 					keyfields : [
	// 						'id'
	// 					]
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	// }
});
