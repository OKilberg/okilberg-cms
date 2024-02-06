import { CollectionConfig, Field } from 'payload/types'

const titleField: Field = {
  name: 'title',
  type: 'text',
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

const richText: Field = {
  name: 'content',
  type: 'richText',
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
    {
      name: 'id',
      type: 'text',
      required: true
    },
    titleField,
    paragraph,
    featuredImage,
    richText
  ],
}

export default BlogPosts

