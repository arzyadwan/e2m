import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Pricing Packages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Package Name',
      type: 'string', // e.g., "Silver Wedding", "Corporate Gathering"
    }),
    defineField({
      name: 'serviceCategory',
      title: 'For Service',
      type: 'string',
      options: {
        list: [
          { title: 'Event Organizer', value: 'eo' },
          { title: 'Wedding Organizer', value: 'wo' },
          { title: 'Creative & Digital', value: 'creative' },
        ],
      },
    }),
    defineField({
      name: 'price',
      title: 'Starting Price (IDR)',
      type: 'string', // String agar fleksibel, misal "Mulai 5jt"
    }),
    defineField({
      name: 'features',
      title: 'Included Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isRecommended',
      title: 'Is Recommended?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'ctaUrl',
      title: 'WhatsApp Link Custom',
      type: 'url',
      description: 'Link WA pre-filled text sesuai paket',
    }),
  ],
})