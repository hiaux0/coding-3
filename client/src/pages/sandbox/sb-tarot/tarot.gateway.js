// @ts-check

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

const DEBUG = true;

// Instantiate required constructor fields
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/',
  fetch: (...pl) => {
    if (!DEBUG) return fetch(...pl);
    const [_, options] = pl;
    const body = JSON.parse(options.body);
    console.log(`📡${body.operationName || ''}\n${body.query}`, body.variables);
    return fetch(...pl);
  }
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

/**
 * @returns {Promise<gqlt.TarotCard[]>}
 */
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

export async function fetchTarotPage() {
  let query = gql`
    query {
      tarotPages {
        id
        tarotFilterKeyWords
      }
    }
  `;

  const result = await client
    .query({ query })
    .catch(console.error);
  return result.data.tarotPages;
}

/**
 * @param {gqlt.TarotCardCreateInput} tarotCardCreateInput
 */
export async function apiAddTarotCard(tarotCardCreateInput) {
  let mutation = gql`
mutation createTarotCard($name: String!){
  createTarotCard(data: { name: $name }) {
    id
    name
  }
}
  `;

  const result = await client.mutate({
    mutation,
    variables: tarotCardCreateInput
  }).catch(console.error);
  return result.data.createTarotCard;
}

export async function apiAddTarotCardExplanation(source, tarorCardId) {
  const mutation = gql`
mutation createTarotExplanation($source: String!, $cardName: TarotCardCreateOneWithoutExplanationInput!){
  createTarotExplanation(data: { source: $source, cardName: $cardName }) {
    id
    source
  }
}
  `;

  const result = await client.mutate({
    mutation,
    variables: {
      source,
      cardName: {
        connect: {
          id: tarorCardId
        }
      }
    }
  }).catch(console.error);
  return result.data.createTarotExplanation;
}

export async function apiDeleteTarotCard(id) {
  let mutation = gql`
mutation deleteTarotCard($id: ID){
  deleteTarotCard(where: {id: $id}) {
    id
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
