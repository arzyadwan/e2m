import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Event Organizer', value: 'eo' },
          { title: 'Wedding Organizer', value: 'wo' },
          { title: 'Creative & Digital', value: 'creative' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
    }),
    // Gallery images tambahan jika diklik detail
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image' }],
    }),
  ],
})