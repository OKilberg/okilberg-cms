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
    type
  ],
}

export default BlogPosts

