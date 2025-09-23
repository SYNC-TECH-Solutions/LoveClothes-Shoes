import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemas'

// This can be used to populate sample data
import { posts } from './src/lib/blog-posts'
const createIfNotExists = (doc: any) => {
    return {
        _type: 'document',
        _id: doc._id,
        ...doc,
    };
}
const createPosts = async (client: any) => {
    const transaction = client.transaction();
    posts.forEach(post => {
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
