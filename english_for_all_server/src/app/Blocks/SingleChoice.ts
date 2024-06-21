import { Block } from 'payload'

const SingleChoice: Block = {
  slug: 'single_choice',
  imageURL:
    'https://surveysparrow.com/wp-content/uploads/2022/03/Copy-of-Blog-Banner-Templates-23.png',
  labels: {
    singular: 'Single Choice',
    plural: 'Single Choice',
  },
  fields: [
    {
      name: 'question_title',
      label: 'Question Title',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      label: 'Options',
      type: 'array',
      fields: [
        {
          name: 'option',
          label: 'option',
          type: 'text',
          required: true,
        },
        {
          name: 'isCorrect',
          label: 'IsCorrect',
          type: 'checkbox',
        },
      ],
      required: true,
    },
  ],
}

export default SingleChoice
