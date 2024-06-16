import { RowLabelArgs } from '../types/RowLabelArgs'

export const ImageBasedQuestion = {
  slug: 'image_based_question',
  labels: {
    singular: 'Image Based Layout',
    plural: 'Image Based Layouts',
  },
  imageURL: 'https://i.ibb.co/m8pw0Jh/image-question.jpg',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Quiz Title',
    },
    {
      name: 'questions',
      type: 'array',
      label: 'Questions',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'answers',
          type: 'array',
          label: 'Answers',
          minRows: 2,
          fields: [
            {
              name: 'answer',
              type: 'text',
              required: true,
              label: 'Answer',
            },
            {
              name: 'isCorrect',
              type: 'checkbox',
              label: 'Is Correct Answer',
              defaultValue: false,
            },
          ],
          admin: {
            components: {
              RowLabel: ({ data, index }: RowLabelArgs) => {
                return data?.answer || `Answer ${index !== undefined ? index + 1 : ''}`
              },
            },
          },
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data?.question || `Question ${index !== undefined ? index + 1 : ''}`
          },
        },
      },
    },
  ],
}
