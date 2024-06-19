import { ImageBasedQuestion } from '@/blocks/image_based_questions'
import { MultipleChoiceQuestion } from '@/blocks/multiple_choice_questions'
import { CollectionConfig } from 'payload'

/* const QuoteBlock: Block = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
} */

export const Books: CollectionConfig = {
  slug: 'books',
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
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Thumbnail',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      label: 'Author',
    },
    {
      name: 'chapterName',
      label: 'Chapter Name',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      label: 'Chapter Duration',
      type: 'number',
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
