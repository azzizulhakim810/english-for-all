import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
import { ApolloServer } from 'apollo-server-micro'
// import fetch from 'node-fetch'
const { collection } = require('../../dbConfig/index')

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
})

const typeDefs = gql`
  type Book {
    _id: ID
    name: String
    author: String
    price: Int
  }

  type Query {
    getBooks: [Book]
  }
`

const resolvers = {
  Query: {
    getBooks: async () => {
      const query = gql`
        query {
          getBooks {
            id
            name
            author
          }
        }
      `

      /* const { data } = await client.query({ query })
      return data.getBooks */

      const findResult = await collection.find({}).toArray()
      return findResult
    },
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = apolloServer.start()

export default async function handler(req, res) {
  await startServer
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}
