import { CollectionConfig, Field } from 'payload/types'

const titleField: Field = {
  name: 'title',
  type: 'text',
}

const caption: Field = {
  name: 'caption',
  type: 'text',
}
const type: Field = {
    name: 'type',
    type: 'text',
  }

const featuredImage: Field = {
  name: 'featuredImage',
  type: 'upload',
  relationTo: 'images'
}

const BlogPosts: CollectionConfig = {
  slug: 'skills',
  //auth: true,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: ()=> true
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true
    },
    titleField,
    caption,
    type,
    featuredImage,
    {
      name: 'level',
      type: 'text'
    },
    {
      name: 'experience',
      type: 'text'
    },
    {
      name: 'field',
      type: 'text'
    },
    {
      name: 'projects',
      type: 'number'
    }

  ],
}

export default BlogPosts

