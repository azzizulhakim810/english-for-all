import { Block } from 'payload'

const MultipleChoice: Block = {
  slug: 'multiple_choice',
  imageURL:
    'https://static.vecteezy.com/system/resources/thumbnails/032/041/498/small_2x/free-check-mark-and-cross-mark-illustration-free-vector.jpg',
  labels: {
    singular: 'Multiple Choice',
    plural: 'Multiple Choice',
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

export default MultipleChoice
