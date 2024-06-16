import { ImageBasedQuestion } from '@/blocks/image_based_questions'
import { MultipleChoiceQuestion } from '@/blocks/multiple_choice_questions'
import { CollectionConfig } from 'payload/types'

export const BooksOld: CollectionConfig = {
  slug: 'books-old',
  fields: [
    {
      name: 'bookName',
      label: 'Book Name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'layout',
      type: 'blocks',
      // @ts-ignore
      blocks: [MultipleChoiceQuestion, ImageBasedQuestion],
    },
  ],
}
