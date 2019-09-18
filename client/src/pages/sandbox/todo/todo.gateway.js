// @ts-check

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
});

export const client = new ApolloClient({
  // Provide required constructor fields
  cache,
  link,

  // Provide some optional constructor fields
  name: 'Aurelia-web-client',
  version: '1.3',
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export async function fetchListTodoItems() {
  let query = gql`
query {
  todoItems {
    id
    text
  }
}
  `;
  const result = await client
    .query({ query })
    .catch(console.error);
  return result.data.todoItems;
}

export async function apiAddTodo(value) {
  let mutation = gql`
mutation createTodoItem($text: String!){
  createTodoItem(data: { text: $text }) {
    id
    text
  }
}
    `;

  const result = await client.mutate({
    mutation,
    variables: {
      text: value,
    }
  }).catch(console.error);
  return result.data.createTodoItem;
}
