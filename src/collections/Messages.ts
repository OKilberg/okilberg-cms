import { CollectionConfig, Field } from 'payload/types'

const nameField: Field = {
  name: 'name',
  type: 'text',
  required: true
}

const messageField: Field = {
  name: 'message',
  type: 'text',
  required: true
}
const emailField: Field = {
    name: 'type',
    type: 'email',
    required: true
  }


const Messages: CollectionConfig = {
  slug: 'messages',
  //auth: true,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    //read: ()=> true
    create: ()=> true //anyone can create messages, might narrow this down later
  },
  fields: [
    nameField,
    messageField,
    emailField
  ],
}

export default Messages

