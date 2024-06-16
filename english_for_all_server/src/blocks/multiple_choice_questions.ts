import { RowLabelArgs } from '../types/RowLabelArgs'

export const MultipleChoiceQuestion = {
  slug: 'multiple_choice_question',
  labels: {
    singular: 'Multiple Choice Layout',
    plural: 'Multiple Choice Layouts',
  },
  imageURL: 'https://i.ibb.co/1TZX3jc/multiple-choice-question-vector.jpg',
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
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
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
