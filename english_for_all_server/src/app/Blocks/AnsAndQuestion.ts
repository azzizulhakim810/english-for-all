import { Block } from 'payload'

const AnsAndQuestion: Block = {
  slug: 'ansAnsQuestion',
  imageURL:
    'https://digitalmarketingservicesindia.in/wp-content/uploads/2019/01/questions-answers.jpg',
  labels: {
    singular: 'Ans & Question Choice',
    plural: 'Ans & Question Choice',
  },
  fields: [
    {
      name: 'question_title',
      label: 'Question Title',
      type: 'text',
      required: true,
    },
    {
      name: 'asnwer',
      label: 'answer',
      type: 'text',
      required: true,
    },
  ],
}

export default AnsAndQuestion
