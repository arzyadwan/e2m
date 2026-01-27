'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio', // Akses CMS via yoursite.com/studio
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    // Vision tool untuk query data pake GROQ (penting buat dev)
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})