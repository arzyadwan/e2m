import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description (Home)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description (Page)',
      type: 'array', 
      of: [{type: 'block'}] // Rich text editor
    }),
    defineField({
      name: 'icon',
      title: 'Icon / Illustration',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})