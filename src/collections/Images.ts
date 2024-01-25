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

const BlogPosts: CollectionConfig = {
  slug: 'images',
  //auth: true,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: ()=> true
  },
  upload: {
    staticDir: '../assets'
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    titleField,
    
  ],
}

export default BlogPosts

