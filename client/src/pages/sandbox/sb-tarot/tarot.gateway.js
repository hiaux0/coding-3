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

export async function fetchListTarotCards() {
  let query = gql`
query {
  tarotCards {
    id
    name,
    keyWords,
    explanation {
      id,
      content,
      source,
    }
  }
}
  `;
  const result = await client
    .query({ query })
    .catch(console.error);
  return result.data.tarotCards;
}

/**
 *
 * @param {object} TarotCardCreateInput
 */
export async function apiAddTarotCard(TarotCardCreateInput) {
  let mutation = gql`
mutation createTarotCard($name: String!){
  createTarotCard(data: { name: $name }) {
    id
  }
}
    `;

  const result = await client.mutate({
    mutation,
    variables: TarotCardCreateInput
  }).catch(console.error);
  return result.data.createTodoItem;
}

export async function apiDeleteTodoItem(id) {
  let mutation = gql`
mutation deleteTodoItem($id: ID){
  deleteTodoItem(where: {id: $id}) {
    id
    text
  }
}
  `;

  await client.mutate({
    mutation,
    variables: {
      id,
    }
  }).catch(console.error);
}

export async function apiUpdateTodoItem(id, { attribute, value }) {
  let mutation = gql`
mutation updateTodoItem($id: ID, $data: TodoItemUpdateInput!){
  updateTodoItem(
    where: {
      id: $id
    }
    data: $data
  ) {
    id
    text
    done
  }
}
  `;

  await client.mutate({
    mutation,
    variables: {
      id,
      data: {
        [attribute]: value,
      },
    }
  }).catch(console.error);
}

/**
 *
 * @param {string} id
 * @param {object} TarotExplanationUpdateInput
 */
export async function apiUpdateTarotExplanation(id, { attribute, value }) {
  let mutation = gql`
mutation updateTarotExplanation($id: ID, $data: TarotExplanationUpdateInput!){
  updateTarotExplanation(
    where: {
      id: $id
    }
    data: $data
  ) {
    id
    content
  }
}
  `;

  await client.mutate({
    mutation,
    variables: {
      id,
      data: {
        [attribute]: value,
      },
    }
  }).catch(console.error);
}


export async function apiUpdateTodoItemDone(id, doneStatus) {
  let mutation = gql`
mutation updateTodoItem($id: ID, $doneStatus: Boolean!){
  updateTodoItem(
    where: {
      id: $id
    }
    data: {
      done: $doneStatus
    }
  ) {
    id
    text
    done
  }
}
  `;

  await client.mutate({
    mutation,
    variables: {
      id,
      doneStatus
    }
  }).catch(console.error);
}
