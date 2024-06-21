import { CollectionConfig } from 'payload'

const Chapter: CollectionConfig = {
  slug: 'chapter',
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
      label: 'Chapter Title',
      type: 'text',
      required: true,
    },
    {
      name: 'book',
      label: 'Select Book',
      type: 'relationship',
      relationTo: 'book',
      required: true,
    },
    {
      name: 'duration',
      label: 'Chapter Duration',
      type: 'number',
      required: true,
    },
  ],
}

export default Chapter
