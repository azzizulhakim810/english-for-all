import { CollectionConfig } from 'payload'

const Author: CollectionConfig = {
  slug: 'author',
  admin: {
    useAsTitle: 'name',
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
      name: 'name',
      type: 'text',
      label: 'Full  Name',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'profile_img',
      label: 'Profile Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'age',
      label: 'Age',
      type: 'number',
      required: true,
    },
    {
      name: 'gender',
      label: 'Gender',
      type: 'select',
      options: [
        {
          label: 'Male',
          value: 'male',
        },
        {
          label: 'Female',
          value: 'female',
        },
        {
          label: 'other',
          value: 'Others',
        },
      ],
    },
  ],
}

export default Author
