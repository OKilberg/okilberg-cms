import { CollectionConfig, Field } from 'payload/types'

const titleField: Field = {
  name: 'title',
  type: 'text',
  required: true,
}

const paragraph: Field = {
  name: 'paragraph',
  type: 'text',
}

const featuredImage: Field = {
  name: 'featuredImage',
  type: 'upload',
  relationTo: 'images'
}

const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  //auth: true,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: ()=> true
  },
  fields: [
    titleField,
    paragraph,
    featuredImage,
  ],
}

export default BlogPosts

