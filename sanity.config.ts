import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemas'

// This file provides sample blog posts to populate Sanity.
import { posts } from './src/lib/blog-posts'

const createPosts = async (client: any) => {
    const transaction = client.transaction();
    posts.forEach(post => {
        // Use the built-in createIfNotExists method directly on the transaction
        transaction.createIfNotExists(post);
    });
    await transaction.commit();
}


export default defineConfig({
  name: 'default',
  title: 'Love Clothes & Shoes',

  projectId: 'v6a19qus',
  dataset: 'production',

  plugins: [
      structureTool(),
      visionTool(),
      // A custom plugin to create sample blog posts if they don't exist
      {
          name: 'create-sample-posts',
          async initialize(client) {
              await createPosts(client);
          }
      }
    ],

  schema: {
    types: schemaTypes,
  },
})
