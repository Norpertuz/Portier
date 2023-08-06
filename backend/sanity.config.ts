import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/schemas';
import structure from './src/deskStructure';

export default defineConfig({
  name: 'default',
  title: 'project-3723',

  projectId: '2y78pwa4',
  dataset: 'production',

  plugins: [deskTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
