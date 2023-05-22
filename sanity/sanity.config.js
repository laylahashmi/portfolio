import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schema} from './schemas/schema.js'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'gx60ahvb',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schema,
  },
})
