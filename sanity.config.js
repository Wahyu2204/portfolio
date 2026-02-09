import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schema-types'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Admin',

  projectId: '8twc5zn4',
  dataset: 'production',
  basePath: '/studio', // Ini URL buat buka admin panel nanti

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})