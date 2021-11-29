
import React from "react";
import App from "./App";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
  } from "@apollo/client";
//import { createHttpLink } from 'apollo-link-http'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default (
    <ApolloProvider client = {client}>
        <App/>
    </ApolloProvider>
)