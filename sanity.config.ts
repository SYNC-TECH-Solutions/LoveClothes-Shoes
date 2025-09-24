import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemas'

export default defineConfig({
  name: 'default',
  title: 'Love Clothes & Shoes',

  projectId: 'v6a19qus',
  dataset: 'production',

  plugins: [
      structureTool(),
      visionTool(),
    ],

  schema: {
    types: schemaTypes,
  },
})
