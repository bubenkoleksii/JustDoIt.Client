import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://localhost:7163/graphql',
    cache: new InMemoryCache(),
});