import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
// import fetch from "isomorphic-unfetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "/api/graphql", // Use the proxy API route
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
