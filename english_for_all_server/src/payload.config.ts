import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import Author from './collections/Author'
import Chapter from './collections/Chapter'
import Book from './collections/Books'
import Question from './collections/Question'
// import { graphqlPlugin } from '@payloadcms/graphql'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  serverURL: 'http://localhost:5000',
  cors: '*',
  collections: [Users, Media, Author, Chapter, Book, Question],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    /*  graphqlPlugin({
      schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
    }), */
  ],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
