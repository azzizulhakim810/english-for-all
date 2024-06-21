import { CollectionConfig } from 'payload'

const Book: CollectionConfig = {
  slug: 'book',
  admin: {
    useAsTitle: 'title',
  },
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
      name: 'title',
      label: 'Book Title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'relationship',
      relationTo: 'author',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'book_cover',
      label: 'Book Cover',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'course_duration',
      label: 'Course Duration (In Min)',
      type: 'number',
      required: true,
    },
    // {
    //   name: 'chapter',
    //   label: 'Book Chapter',
    //   type: 'array',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'title',
    //       label: 'Chapter Title',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'duration',
    //       label: 'Chapter Duration',
    //       type: 'number',
    //       required: true,
    //     },
    //     {
    //       name: 'quizes',
    //       label: 'quizes',
    //       type: 'array',
    //       fields: [
    //         {
    //           name: 'quiz_title',
    //           label: 'Quiz Title',
    //           type: 'text',
    //           required: true,
    //         },
    //         {
    //           name: 'questions',
    //           label: 'Questions',
    //           type: 'blocks',
    //           blocks: [SingleChoice, MultipleChoice, AnsAndQuestion],
    //           required: true,
    //         },
    //       ],
    //       required: true,
    //     },
    //   ],
    // },
  ],
}

export default Book
