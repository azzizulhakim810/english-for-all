import AnsAndQuestion from '@/app/Blocks/AnsAndQuestion'
import MultipleChoice from '@/app/Blocks/MultipleChoice'
import SingleChoice from '@/app/Blocks/SingleChoice'
// import { convertSlateNodesToLexical } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

const Question: CollectionConfig = {
  slug: 'quiz',
  access: {
    read: () => {
      return true
    },
    create: () => {
      return true
    },
    delete: () => {
      return true
    },
    update: () => {
      return true
    },
  },
  fields: [
    {
      name: 'quiz_title',
      label: 'Quiz Title',
      type: 'text',
      required: true,
    },
    {
      name: 'book',
      type: 'relationship',
      relationTo: 'book',
      required: true,
    },
    {
      name: 'chapter',
      type: 'relationship',
      relationTo: 'chapter',
      required: true,
      admin: {
        condition: (data, siblingData, { user }) => !!siblingData.book,
      },
    },
    {
      name: 'questions',
      label: 'Questions',
      type: 'array',
      fields: [
        {
          name: 'question',
          label: 'question',
          type: 'blocks',
          blocks: [MultipleChoice, SingleChoice, AnsAndQuestion],
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        console.log(data)
        // Ensure chapter belongs to the selected book
        if (data.chapter && data.book) {
          const chapter = await req.payload.findByID({
            collection: 'chapter',
            id: data.chapter,
          })
          console.log(chapter)
          // @ts-ignore
          if (chapter?.book?.id !== data.book) {
            throw new Error('Selected chapter does not belong to the chosen book')
          }
        }
      },
    ],
  },
}

export default Question
